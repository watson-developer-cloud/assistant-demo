import React from 'react';
import PropTypes from 'prop-types';
import ChatMessage from '../ChatMessage/ChatMessage';
import ChatOptionList from '../ChatOptionList/ChatOptionList'; import BalanceCard from '../BalanceCard/BalanceCard';
import ApptCard from '../ApptCard/ApptCard';
import AgentCard from '../AgentCard/AgentCard';
import StatementCard from '../StatementCard/StatementCard';
import { IN_PROGRESS } from '../../constants';


const ChatList = ({ messages, onUserInput, botMessageStatus }) => {
  // eslint-disable-next-line
  const isBotLoading = (botMessageStatus === IN_PROGRESS);
  const chatListClasses = isBotLoading ? 'ibm-lg-col-4 ibm-padding chat-list chat-list--loading' : 'ibm-lg-col-4 ibm-padding chat-list';

  return (
    <div id="chat-list" className={chatListClasses}>
      {messages.map((message, i) => {
        const isLastMessage = (i === messages.length - 1);
        switch (message.type) {
          case 'option':
            return (
              <ChatOptionList
                type="button"
                options={message.content}
                onUserInput={onUserInput}
                isLastMessage={isLastMessage}
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
          case 'agent':
            return (
              <AgentCard
                time={message.content}
              />
            );
          case 'creditCard':
            return (
              <ChatOptionList
                type="creditCard"
                options={message.content}
                isLastMessage={isLastMessage}
              />
            );
          case 'statement':
            return (
              <StatementCard
                startDate={message.content.startingDate}
                endDate={message.content.endingDate}
              />
            );
          default:
            return (
              <ChatMessage
                type={message.type}
                text={message.content}
              />
            );
        }
      })}
      <div className="chat-list__loader">
        <p className="ibm-type-c">
          &nbsp;
          <span />
        </p>
      </div>
      <div id="chat-list-bottom">&nbsp;</div>
    </div>
  );
};

ChatList.propTypes = {
  messages: PropTypes.array.isRequired,
  onUserInput: PropTypes.func.isRequired,
  botMessageStatus: PropTypes.string.isRequired,
};

export default ChatList;
