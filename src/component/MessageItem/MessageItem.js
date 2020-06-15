import React from 'react';
import './MessageItem.css';

const MessageItem = ({ message }) => {
  let { userName, text, date } = message;
  return (
    <div className="MessageItem-group">
      <div className="MessageItem">
        <div className="MessageItem-avatar">
          <p>{userName[0].toUpperCase()}</p>
        </div>
        <div className="MessageItem-user">
          <p>{userName}</p>
        </div>
        <div className="MessageItem-time">
          <p>{date}</p>
        </div>
      </div>
      <p>{text}</p>
    </div>
  )
}

MessageItem.defaultProps = {
  message: {
    userName: "viya.sommerville",
    text: "message: what ?",
    date: "9.45PM"
  }
}

export default MessageItem;