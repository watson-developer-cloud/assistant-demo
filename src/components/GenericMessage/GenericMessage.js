import React from 'react';
import PropTypes from 'prop-types';

const GenericMessage = ({ sender, text }) => {
  if (sender === 'bot') {
    return (
      <p className="bot-chat">
        <span className="chatBar">{text}</span>
      </p>
    );
  } else if (sender === 'user') {
    return (
      <p className="user-chat">
        <span className="bubble">{text}</span>
      </p>
    );
  }
};

GenericMessage.propTypes = {
  sender: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default GenericMessage;
