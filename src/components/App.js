import React from 'react';
import ChatContainer from './ChatContainer/ChatContainer';
import SelectionSidebar from './SelectionSidebar/SelectionSidebar';
import JsonSidebar from './JsonSidebar/JsonSidebar';
import fetchMessage from './fetchMessage';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
      lastMessageJson: JSON.stringify({ test: 'hi' }),
      lastMessageContext: {},
    };
  }

  componentWillMount() {
    this.userInputEntered('user', 'Hi');
  }

  updateChatList(type, text) {
    this.setState({ messages: [...this.state.messages, { type, text }] });
  }

  updateJsonSidebar(json) {
    this.setState({ lastMessageJson: json });
  }

  updateConversationContext(contextObj) {
    this.setState({ lastMessageContext: contextObj });
  }

  updateBotAction(outputObj) {
    if (outputObj.output.generic !== undefined) {
      outputObj.output.generic.forEach((response) => {
        if (response.response_type === 'text') {
          this.updateChatList('bot', response.text);
        } else if (response.response_type === 'option') {
          this.updateChatList('option', response.options);
        }
      });
    } else {
      outputObj.output.text.forEach((response) => {
        if (response !== '') {
          this.updateChatList('bot', response);
        }
      });
    }
  }

  userInputEntered(type, text) {
    // add user message to state
    if (type !== 'option') {
      this.updateChatList(type, text);
    }

    fetchMessage(text, this.state.lastMessageContext)
      .then((data) => {
        // render appropriate data
        this.updateBotAction(data);

        // send stringified JSON to sidebar
        this.updateJsonSidebar(JSON.stringify(data));

        // update context
        this.updateConversationContext(data.context);
      })
      .catch((err) => {
        this.updateChatList('bot', 'An error has occured.');
        throw new Error(err);
      });
  }

  render() {
    return (
      <div className="ibm">
        <SelectionSidebar />
        <ChatContainer
          messages={this.state.messages}
          chatOptions={this.state.chatOptions}
          onUserInput={(type, text) => { this.userInputEntered(type, text); }}
        />
        <JsonSidebar json={this.state.lastMessageJson} />
      </div>
    );
  }
}

export default App;
