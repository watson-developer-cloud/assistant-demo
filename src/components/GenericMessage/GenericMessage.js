import React from 'react';
import PropTypes from 'prop-types';

const GenericMessage = ({ type, text }) => {
  if (type === 'bot') {
    return (
      <p className="bot-chat">
        <span className="chatBar">{text}</span>
      </p>
    );
  } else if (type === 'user') {
    return (
      <p className="user-chat">
        <span className="bubble">{text}</span>
      </p>
    );
  } else if (type === 'option') {
    return (
      <div className="chat-option">
        <button
          className="chat-option__button chat-option__button--selected"
          disabled
        >{text}
        </button>
      </div>
    );
  }
};

GenericMessage.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default GenericMessage;
