import React from 'react';
import PropTypes from 'prop-types';
import ChatMessage from '../ChatMessage/ChatMessage';
import ChatOptionList from '../ChatOptionList/ChatOptionList';

const ChatList = ({ messages, onUserInput }) => (
  <div className="ibm-lg-col-4 ibm-padding chat-list">
    {messages.map((message) => {
      if (message.type === 'option') {
        return (
          <ChatOptionList
            options={message.content}
            onUserInput={onUserInput}
          />
        );
      }
      return (
        <ChatMessage
          type={message.type}
          text={message.content || ''}
        />
      );
    })}
  </div>
);

ChatList.propTypes = {
  messages: PropTypes.array.isRequired,
  onUserInput: PropTypes.func.isRequired,
};

export default ChatList;
