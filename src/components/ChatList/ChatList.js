import React from 'react';
import PropTypes from 'prop-types';
import GenericMessage from '../GenericMessage/GenericMessage';
import ChatOptionList from '../ChatOptionList/ChatOptionList';

const ChatList = ({ messages, onUserInput }) => (
  <div className="ibm-lg-col-4 ibm-padding chat-list">
    {messages.map((message) => {
      if (message.type === 'option') {
        return (
          <ChatOptionList
            options={message.text}
            onUserInput={onUserInput}
          />
        );
      }
      return (
        <GenericMessage
          type={message.type}
          text={message.text || ''}
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
