import React, { useState, useEffect } from 'react';
import socket from '../../socket/index';

import './MessageList.css';
import MessageItem from '../MessageItem/MessageItem';

const MessageList = (props) => {
  let { messages } = props;
  let [newMessages, setNewMessages] = useState([]);

  //update new message
  useEffect(() => {
    socket.on('history-message', data => {
      setNewMessages(data);
    })

  }, [])

  useEffect(() => {
    socket.on('new-message', data => {
      let newMsg = [...newMessages, data];
      setNewMessages(newMsg);
    })
  })

  return(
    <div className="MessageList">
      {
        newMessages ? (
          newMessages.map((message, index) => 
        <MessageItem message={message} key={index} />)
        ) : (
          messages.map((message, index) => 
            <MessageItem message={message} key={index} />)

        )
      }
    </div>
  )
}

MessageList.defaultProps = {
  messages: [
    {
      userName: "viya.sommerville",
      text: "message: what ?",
      date: "9.45PM"
    },
    {
      userName: "viya.sommerville",
      text: "message: what ?",
      date: "9.45PM"
    },
    {
      userName: "viya.sommerville",
      text: "message: what ?",
      date: "9.45PM"
    },
    {
      userName: "viya.sommerville",
      text: "message: what ?",
      date: "9.45PM"
    },
    {
      userName: "viya.sommerville",
      text: "message: what ?",
      date: "9.45PM"
    }
  ]
}
export default MessageList;