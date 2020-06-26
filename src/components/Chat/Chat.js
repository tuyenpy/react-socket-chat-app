import React, { useEffect } from 'react';
import queryString from 'query-string';

import './Chat.css';
import MessageList from '../MessageList/MessageList';
import SendMessage from '../SendMessage/SendMessage';

const Chat = (props) => {
  let { socket, location } = props;
  let { room } = queryString.parse(location.search);

  useEffect(() => {
    if (room) {
      socket.emit('join', room);
    }
  },[room, socket])
  return (
    <div className="Chat">
      {
        room && <p>You have joined the <strong><u>{room}</u></strong> room</p>
      }
      <MessageList socket={socket} room={room} />
      <SendMessage socket={socket} room={room}/>
    </div>
  )
}

export default Chat;