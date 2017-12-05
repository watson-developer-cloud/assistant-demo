import React from 'react';
import { InputWithButton } from 'watson-react-components';
import PropTypes from 'prop-types';
import ChatList from '../ChatList/ChatList';
import ChatHeader from '../ChatHeader/ChatHeader';

const ChatContainer = ({ onEnterText, messages }) => (
  <div className="ibm-col-lg-8 chat-container">
    <ChatHeader />
    <ChatList messages={messages} />
    <InputWithButton
      onSubmit={(e) => {
        onEnterText(e.target.value);
        e.target.value = '';
      }}
      placeholder="Type here..."
    />
  </div>
);

ChatContainer.propTypes = {
  messages: PropTypes.array.isRequired,
  onEnterText: PropTypes.func.isRequired,
};

export default ChatContainer;
