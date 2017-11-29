import React from 'react';
import ChatList from '../ChatList/ChatList';
import ChatHeader from '../ChatHeader/ChatHeader';

const ChatContainer = () => (
  <div className="ibm-sm-col-2 ibm-md-col-2 ibm-lg-col-4 ibm-col-full chat-container">
    <ChatHeader />
    <ChatList />
  </div>
);

export default ChatContainer;
