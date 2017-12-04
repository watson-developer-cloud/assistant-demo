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
    this.userChatEntered();
  }

  updateChatList(sender, text) {
    this.setState({ messages: [...this.state.messages, { sender, text }] });
  }

  updateJsonSidebar(json) {
    this.setState({ lastMessageJson: json });
  }

  updateConversationContext(contextObj) {
    this.setState({ lastMessageContext: contextObj });
  }

  userChatEntered(text) {
    // add user message to state
    this.updateChatList('user', text);

    fetchMessage(text, this.state.lastMessageContext)
      .then((data) => {
        // update chat list with conversation response
        this.updateChatList('bot', data.output.text[0]);

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
          onEnterText={(text) => { this.userChatEntered(text); }}
        />
        <JsonSidebar json={this.state.lastMessageJson} />
      </div>
    );
  }
}

export default App;
