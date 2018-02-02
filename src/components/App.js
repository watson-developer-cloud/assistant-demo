import React from 'react';
import ChatContainer from './ChatContainer/ChatContainer';
import SelectionSidebar from './SelectionSidebar/SelectionSidebar';
import OptionsSidebar from './OptionsSidebar/OptionsSidebar';
import { fetchMessage, executeClientAction, executeWorkspaceAction } from '../conversation';
import { IDLE, IN_PROGRESS, COMPLETED, FAILED } from '../constants';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
      lastMessageJson: JSON.stringify({ test: 'hi' }),
      lastMessageContext: {},
      currentPath: 1,
      maxPaths: 4,
      botMessageStatus: IDLE,
    };
  }

  componentDidMount() {
    this.sendMessageToConversation('');
  }

  // eslint-disable-next-line
  scrollChatListToBottom() {
    const chatContainer = document.getElementsByClassName('chat-list');
    if (chatContainer[0] !== undefined) {
      chatContainer[0].scrollTop = chatContainer[0].scrollHeight;
    }
  }

  updateChatList(messageObj) {
    this.setState({ messages: [...this.state.messages, messageObj] });

    // the ChatList component will re-render when messages in state is updated
    // so we call scrollChatListToBottom to anchor the scrollbar at the bottom
    // of the list
    this.scrollChatListToBottom();
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
          onPathSelect={(path) => { this.sendMessageToConversation(path); }}
          currentPath={this.state.currentPath}
          maxPaths={this.state.maxPaths}
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
