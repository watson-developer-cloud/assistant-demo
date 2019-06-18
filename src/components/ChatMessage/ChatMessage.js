import React from 'react';
import PropTypes from 'prop-types';

const ChatMessage = ({ type, text }) => {
  if (type === 'bot') {
    return (
      <div className="chat-message chat-message--bot">
        <p className="ibm-type-c">{text}</p>
      </div>
    );
  }
  if (type === 'user') {
    return (
      <div className="chat-message chat-message--anchor-right">
        <p className="chat-message--user ibm-type-b">{text}</p>
      </div>
    );
  }
  if (type === 'option') {
    return (
      <div className="chat-option">
        <button
          type="button"
          className="chat-option__button chat-option__button--selected"
          disabled
        >
          {text}
        </button>
      </div>
    );
  }

  return null;
};

ChatMessage.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string,
};

ChatMessage.defaultProps = {
  text: '',
};

export default ChatMessage;
