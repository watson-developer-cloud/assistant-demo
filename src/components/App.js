import React from 'react';
import ChatContainer from './ChatContainer/ChatContainer';
import SelectionSidebar from './SelectionSidebar/SelectionSidebar';
import OptionsSidebar from './OptionsSidebar/OptionsSidebar';
import { fetchMessage, executeClientAction, executeWorkspaceAction } from '../conversation';
import { IDLE, IN_PROGRESS, COMPLETED, FAILED } from '../constants';
require('smoothscroll-polyfill').polyfill();

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
      lastMessageJson: JSON.stringify({ test: 'hi' }),
      lastMessageContext: {},
      botMessageStatus: IDLE,
      paths: [
        {
          id: 1,
          label: 'Make a Payment',
          description: 'Utilize buttons and other response types, like photos or bank balances, to help expedite the credit card payment process.',
          path: 'How can I make payments to my credit card?',
        },
        {
          id: 2,
          label: 'Book an Appointment',
          description: 'Provide the required information to schedule an appointment in a flexible, conversational manner.',
          path: 'I want to book an appointment',
        },
        {
          id: 3,
          label: 'Recommend a Credit Card',
          description: 'Describe your ideal credit card and receive a recommendation tailored to your preferences.',
          path: 'Can you help me choose a credit card?',
        },
        {
          id: 4,
          label: 'Live Agent Integration',
          description: 'Transfer any query or dispute that can\'t be addressed by a bot to a live agent.',
          path: 'There\'s a problem with my credit card bill',
        },
      ],
      currentPath: 1,
    };
  }

  componentWillMount() {
    // TODO: wrap in a settimeout of 0
    // this puts it within the event loop
    // so that rendering
    this.sendMessageToConversation('');
  }

  updateChatList(messageObj) {
    const chatBottom = document.getElementById('chat-list-bottom');
    this.setState({ messages: [...this.state.messages, messageObj] });
    // scroll to bottom of #chat-list on each update
    chatBottom.scrollIntoView({ behavior: 'smooth' });
  }

  updateOptionsSidebar(lastMessageJson) {
    this.setState({ lastMessageJson });
  }

  updateConversationContext(lastMessageContext) {
    this.setState({ lastMessageContext });
  }

  updateMessageStatus(botMessageStatus) {
    this.setState({ botMessageStatus });
  }

  botMessageHandler(outputObj) {
    // always read the text from output
    outputObj.output.text.forEach((response) => {
      if (response !== '') {
        this.updateChatList({
          type: 'bot',
          content: response,
        });
      }
    });

    // execute client programmatic actions if they exist
    if (outputObj.actions !== undefined && outputObj.actions.length > 0) {
      executeClientAction(outputObj.actions[0])
        .then(result =>
          this.sendMessageToConversation(result.result, this.state.lastMessageContext));
    }

    // execute standard workspace actions if they exist
    if (outputObj.output.action !== undefined) {
      const action = executeWorkspaceAction(outputObj.output.action);
      this.updateChatList(action);
    }

    // check for chat options in generic options object
    if (outputObj.output.generic !== undefined) {
      this.botMessageOptionsHandler(outputObj.output.generic);
    }
  }

  routeToPath(path) {
    this.setState({ messages: [] });
    this.setState({ currentPath: path.id });
    this.sendMessageToConversation(path.path, this.state.lastMessageContext);
  }

  botMessageOptionsHandler(genericObj) {
    genericObj.forEach((response) => {
      if (response.response_type === 'text') {
        this.updateChatList({
          type: 'bot',
          content: response.text,
        });
      } else if (response.response_type === 'option') {
        this.updateChatList({
          type: 'option',
          content: response.options,
        });
      }
    });
  }

  userMessageHandler(type, text) {
    // do not accept empty inputs
    if (text.trim() !== '') {
      // add user message to state
      if (type !== 'option') {
        this.updateChatList({
          type: 'user',
          content: text,
        });
      }
      this.sendMessageToConversation(text, this.state.lastMessageContext);
    }
  }

  sendMessageToConversation(text, context = {}) {
    this.updateMessageStatus(IN_PROGRESS);

    fetchMessage(text, context)
      .then((data) => {
        // update message status
        this.updateMessageStatus(COMPLETED);

        // render appropriate data
        this.botMessageHandler(data);

        // send stringified JSON to sidebar
        this.updateOptionsSidebar(JSON.stringify(data));

        // update context
        this.updateConversationContext(data.context);
      })
      .catch((err) => {
        // update message status
        this.updateMessageStatus(FAILED);

        this.updateChatList({
          type: 'bot',
          content: 'Could not connect to Watson Conversation',
        });
        throw new Error(err);
      });
  }

  render() {
    return (
      <div className="ibm App">
        <SelectionSidebar
          onPathSelect={(path) => { this.routeToPath(path); }}
          paths={this.state.paths}
          currentPath={this.state.currentPath}
        />
        <ChatContainer
          messages={this.state.messages}
          chatOptions={this.state.chatOptions}
          onUserInput={(type, text) => { this.userMessageHandler(type, text); }}
          botMessageStatus={this.state.botMessageStatus}
        />
        <OptionsSidebar json={this.state.lastMessageJson} />
      </div>
    );
  }
}

export default App;
