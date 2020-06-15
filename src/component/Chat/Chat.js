import React, { useEffect } from 'react';
import queryString from 'query-string';

import './Chat.css';
import MessageList from '../MessageList/MessageList';
import SendMessage from '../SendMessage/SendMessage';

const Chat = (props) => {
  let { socket, location } = props;
  useEffect(() => {
    let room = queryString.parse(location.search);
    socket.emit('join', room)
  })
  return (
    <div className="Chat">
      <MessageList socket={socket} />
      <SendMessage socket={socket} />
    </div>
  )
}

export default Chat;