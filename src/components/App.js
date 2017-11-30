import React from 'react';
import ChatContainer from './ChatContainer/ChatContainer';
import SelectionSidebar from './SelectionSidebar/SelectionSidebar';
import JsonSidebar from './JsonSidebar/JsonSidebar';

const App = () => (
  <div className="ibm">
    <SelectionSidebar />
    <ChatContainer />
    <JsonSidebar />
  </div>
);

export default App;
