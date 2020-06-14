import React from 'react';
import './App.css';

import MessageList from './component/MessageList/MessageList';
import SendMessage from './component/SendMessage/SendMessage';

const App = () => {
  return <div className="App">
      <MessageList />
      <SendMessage />
  </div>
}

export default App;
