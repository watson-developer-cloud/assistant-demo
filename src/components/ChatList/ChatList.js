import React from 'react';
import PropTypes from 'prop-types';
import ChatMessage from '../ChatMessage/ChatMessage';
import ChatOptionList from '../ChatOptionList/ChatOptionList';
import BalanceCard from '../BalanceCard/BalanceCard';
import ApptCard from '../ApptCard/ApptCard';


const ChatList = ({ messages, onUserInput }) => (
  <div className="ibm-lg-col-4 ibm-padding chat-list">
    {messages.map((message) => {
      switch (message.type) {
        case 'option':
          return (
            <ChatOptionList
              options={message.content}
              onUserInput={onUserInput}
            />
          );
        case 'balance':
          return (
            <BalanceCard
              balance={message.content['Total Balance']}
              recPay={message.content['Payment Amount']}
            />
          );
        case 'appointment':
          return (
            <ApptCard
              zip={message.content.address}
              apptDate={message.content.date}
              apptTime={message.content.time}
              reason="this is a test"
            />
          );
          /*
        case 'agent':
          return (

          );
          */
        default:
          return (
            <ChatMessage
              type={message.type}
              text={message.content || ''}
            />
          );
      }
    })}
  </div>
);

ChatList.propTypes = {
  messages: PropTypes.array.isRequired,
  onUserInput: PropTypes.func.isRequired,
};

export default ChatList;
