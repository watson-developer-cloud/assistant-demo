import React from 'react';
import ChatContainer from './ChatContainer/ChatContainer';
import SelectionSidebar from './SelectionSidebar/SelectionSidebar';
import JsonSidebar from './JsonSidebar/JsonSidebar';

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
    this.fetchMessage();
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

  fetchMessage(text) {
    // construct conversation payload
    const payload = {
      input: { text },
      context: this.state.lastMessageContext,
    };

    // add user message to state
    this.updateChatList('user', text);

    // send payload to conversation
    fetch('/api/message', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    }).then((data) => {
      data.json()
        .then((json) => {
          // update chat list with conversation response
          this.updateChatList('bot', json.output.text[0]);

          // send stringified JSON to sidebar
          this.updateJsonSidebar(JSON.stringify(json));

          // update context
          this.updateConversationContext(json.context);
        });
    });
  }

  render() {
    return (
      <div className="ibm">
        <SelectionSidebar />
        <ChatContainer
          messages={this.state.messages}
          onEnterText={(text) => { this.fetchMessage(text); }}
        />
        <JsonSidebar json={this.state.lastMessageJson} />
      </div>
    );
  }
}

export default App;
