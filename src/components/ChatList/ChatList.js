import React from 'react';
import PropTypes from 'prop-types';
import GenericMessage from '../GenericMessage/GenericMessage';

const ChatList = ({ messages }) => (
  <div className="ibm-lg-col-4 ibm-padding chat-list">
    {messages.map(message => (
      <GenericMessage
        sender={message.sender}
        text={message.text || ''}
      />))}
  </div>
);

ChatList.propTypes = {
  messages: PropTypes.array.isRequired,
};

export default ChatList;
