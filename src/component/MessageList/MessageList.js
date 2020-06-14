import React from 'react';
import './MessageList.css';
import MessageItem from '../MessageItem/MessageItem';

const MessageList = (props) => {
  let { messages } = props;
  return(
    <div className="MessageList">
      {
        messages && messages.map((message, index) => 
          <MessageItem message={message} key={index} />
        )
      }
    </div>
  )
}

MessageList.defaultProps = {
  messages: [
    {
      avatar: "M",
      username: "viya.sommerville",
      msg: "message: what ?",
      date: "9.45PM"
    },
    {
      avatar: "M",
      username: "viya.sommerville",
      msg: "message: what ?",
      date: "9.45PM"
    },
    {
      avatar: "M",
      username: "viya.sommerville",
      msg: "message: what ?",
      date: "9.45PM"
    },
    {
      avatar: "M",
      username: "viya.sommerville",
      msg: "message: what ?",
      date: "9.45PM"
    },
    {
      avatar: "M",
      username: "viya.sommerville",
      msg: "message: what ?",
      date: "9.45PM"
    }
  ]
}
export default MessageList;