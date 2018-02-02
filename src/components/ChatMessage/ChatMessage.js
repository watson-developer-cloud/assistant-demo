import React from 'react';
import PropTypes from 'prop-types';

const ChatMessage = ({ type, text, loaded }) => {
  const isItemLoaded = loaded ? ' chat-list__item chat-list__item-loaded' : ' chat-list__item';
  if (type === 'bot') {
    return (
      <div className={`chat-message chat-message--bot ${isItemLoaded}`}>
        <p className="ibm-type-c">
          {text}
        </p>
      </div>
    );
  } else if (type === 'user') {
    return (
      <div className={`chat-message chat-message--anchor-right ${isItemLoaded}`}>
        <p className="chat-message--user ibm-type-b">
          {text}
        </p>
      </div>
    );
  } else if (type === 'option') {
    return (
      <div className={`chat-option ${isItemLoaded}`}>
        <button
          className="chat-option__button chat-option__button--selected"
          disabled
        >{text}
        </button>
      </div>
    );
  }
};

ChatMessage.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  loaded: PropTypes.bool.isRequired,
};

export default ChatMessage;
