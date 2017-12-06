import React from 'react';
import PropTypes from 'prop-types';
import GenericMessage from '../GenericMessage/GenericMessage';
import ChatOptionList from '../ChatOptionList/ChatOptionList';

const ChatList = ({ messages, chatOptions, onSelectOption }) => (
  <div className="ibm-lg-col-4 ibm-padding chat-list">
    {messages.map(message => (
      <GenericMessage
        sender={message.sender}
        text={message.text || ''}
      />))}

    <ChatOptionList
      options={chatOptions}
      onSelectOption={onSelectOption}
    />
  </div>
);

ChatList.propTypes = {
  messages: PropTypes.array.isRequired,
  chatOptions: PropTypes.array.isRequired,
  onSelectOption: PropTypes.func.isRequired,
};

export default ChatList;
