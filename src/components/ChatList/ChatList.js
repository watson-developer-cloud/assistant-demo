import React from 'react';
import { InputWithButton } from 'watson-react-components';
import BotMessage from '../BotMessage/BotMessage';

class ChatList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
      lastMessageJson: '',
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
    })
      .then((data) => {
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
      <div className="ibm-lg-col-4 ibm-padding chat-list">
        {this.state.messages.map(message => (
          <BotMessage
            sender={message.sender}
            text={message.text}
          />))}

        <InputWithButton
          className="chat-input"
          onSubmit={(e) => {
            this.fetchMessage(e.target.value);
            e.target.value = '';
          }}
          placeholder="Type here..."
        />
        {this.state.lastMessageJson}
      </div>
    );
  }
}

export default ChatList;
