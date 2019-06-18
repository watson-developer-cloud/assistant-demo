import React from 'react';
import PropTypes from 'prop-types';
import ChatMessage from '../ChatMessage/ChatMessage';
import ChatOptionList from '../ChatOptionList/ChatOptionList'; import BalanceCard from '../BalanceCard/BalanceCard';
import ApptCard from '../ApptCard/ApptCard';
import AgentCard from '../AgentCard/AgentCard';
import StatementCard from '../StatementCard/StatementCard';
import { IN_PROGRESS } from '../../constants';
import ImageOption from '../ImageOption/ImageOption';
import SearchResultsList from '../SearchResults/SearchResultsList';

function lastBotMessage(i, messages) {
  let isLastBotMessage = true;
  // look forward to see if there is a user message
  for (let x = i; x < messages.length && isLastBotMessage === true; x += 1) {
    if (messages[x].type === 'user') {
      isLastBotMessage = false;
    }
  }
  return isLastBotMessage;
}

const ChatList = ({ messages, onUserInput, botMessageStatus }) => {
  // eslint-disable-next-line
  const isBotLoading = (botMessageStatus === IN_PROGRESS);
  const chatListClasses = isBotLoading ? 'ibm-lg-col-4 ibm-padding chat-list chat-list--loading' : 'ibm-lg-col-4 ibm-padding chat-list';
  return (
    <div id="chat-list" className={chatListClasses}>
      {messages.map((message, i) => {
        switch (message.type) {
          case 'option':
            if (message.display === 'list') {
              return (
                <ChatOptionList
                  type="list"
                  options={message.content}
                  onUserInput={onUserInput}
                  isLastMessage={lastBotMessage(i, messages)}
                />
              );
            }
            return (
              <ChatOptionList
                type="button"
                options={message.content}
                onUserInput={onUserInput}
                isLastMessage={lastBotMessage(i, messages)}
              />
            );
          case 'balance':
            return (
              <BalanceCard
                balance={message.content['Total Balance']}
                recPay={message.content['Payment Amount']}
                accountId={message.content.Account}
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
                isLastMessage={lastBotMessage(i, messages)}
              />
            );
          case 'statement':
            return (
              <StatementCard
                startDate={message.content.startingDate}
                endDate={message.content.endingDate}
              />
            );
          case 'image':
            return (
              <ImageOption
                url={message.content}
              />
            );
          case 'search':
            return (
              <SearchResultsList
                res={message.content}
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
