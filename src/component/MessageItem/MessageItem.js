import React from 'react';
import './MessageItem.css';

const MessageItem = ({ message }) => {
  let { avatar, username, msg, date } = message;
  return (
    <div className="MessageItem-group">
      <div className="MessageItem">
        <div className="MessageItem-avatar">
          <p>{avatar}</p>
        </div>
        <div className="MessageItem-user">
          <p>{username}</p>
        </div>
        <div className="MessageItem-time">
          <p>{date}</p>
        </div>
      </div>
      <p>{msg}</p>
    </div>
  )
}

MessageItem.defaultProps = {
  message: {
    avatar: "M",
    username: "viya.sommerville",
    msg: "message: what ?",
    date: "9.45PM"
  }
}

export default MessageItem;