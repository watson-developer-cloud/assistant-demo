import React from 'react';
import PropTypes from 'prop-types';

import ChatMessage from '../ChatMessage/ChatMessage';

const ChatUnorderedList = ({ options, onUserInput, isSelected }) => {
  if (isSelected) {
    return (
      <ChatMessage
        type="user"
        text={options[0].label}
      />
    );
  }
  return (
    <ul>
      {options.map(option => (
        <li
          className="chat-option-item"
          role="presentation"
          onClick={() => { onUserInput(option); }}
        >
          {option.label}
        </li>
      ))}
    </ul>
  );
};

ChatUnorderedList.propTypes = {
  options: PropTypes.object.isRequired,
  onUserInput: PropTypes.func.isRequired,
  isSelected: PropTypes.bool,
};

ChatUnorderedList.defaultProps = {
  isSelected: false,
};

export default ChatUnorderedList;
