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
      chatOptions: [],
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

  selectChatOption(option) {
    this.setState({ chatOptions: [] });
  }

  updateBotAction(outputObj) {
    if (outputObj.output.generic !== undefined) {
      outputObj.output.generic.forEach((response) => {
        if (response.response_type === 'text') {
          this.updateChatList('bot', response.text);
        } else if (response.response_type === 'option') {
          this.setState({ chatOptions: response.options });
        }
      });
    } else {
      this.updateChatList('bot', outputObj.output.text[0]);
    }
  }

  userChatEntered(text) {
    // add user message to state
    this.updateChatList('user', text);

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
          onEnterText={(text) => { this.userChatEntered(text); }}
          onSelectOption={(option) => { this.selectChatOption(option); }}
        />
        <JsonSidebar json={this.state.lastMessageJson} />
      </div>
    );
  }
}

export default App;
