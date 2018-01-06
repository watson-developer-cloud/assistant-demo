import React from 'react';
import { InputWithButton } from 'watson-react-components';
import PropTypes from 'prop-types';
import ChatList from '../ChatList/ChatList';

const ChatContainer = ({
  messages,
  onUserInput,
}) => (
  <div className="ibm-col-lg-8 chat-container">
    <div className="ibm-lg-col-4 ibm-padding chat-container__header">
      XBankBot
    </div>
    <ChatList
      messages={messages}
      onUserInput={onUserInput}
    />
    <InputWithButton
      onSubmit={(e) => {
        onUserInput('user', e.target.value);
        e.target.value = '';
      }}
      placeholder="Type here..."
    />
  </div>
);

ChatContainer.propTypes = {
  messages: PropTypes.array.isRequired,
  onUserInput: PropTypes.func.isRequired,
};

export default ChatContainer;
