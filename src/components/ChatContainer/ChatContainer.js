import React from 'react';
import ChatList from '../ChatList/ChatList';
import ChatHeader from '../ChatHeader/ChatHeader';

const ChatContainer = () => (
  <div className="ibm-col-lg-8 ibm-col-full chat-container">
    <ChatHeader />
    <ChatList />
  </div>
);

export default ChatContainer;
