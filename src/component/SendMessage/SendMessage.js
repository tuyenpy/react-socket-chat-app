import React from 'react';
import { connect } from 'react-redux';
import { sendMessage } from '../../actions/message.action';

import './SendMessage.css';
import SendIcon from '@material-ui/icons/Send';

const refInput = React.createRef();

let SendMessage = (props) => {
  let { user, socket, room, sendMessage } = props;
  const onSend = (e) => {
    e.preventDefault();
    sendMessage({
      userName: user.user.name,
      text: refInput.current.value,
      room: room
    })
    socket.emit('send-message');
  }
  return (
    <div className="SendMessage">
      <div className="SendMessage-input">
        <input type="text"
          ref={refInput}
          placeholder="type a message"
        />

      </div>
      <div className="SendMessage-button" onClick={onSend}>
        <SendIcon style={{color: "#CBCED1"}}/>
      </div>
    </div>
  )
}

const mapStateToProp = (state) => ({
  user: state.user
})

const mapDispatchToProp = {
  sendMessage: sendMessage
}
SendMessage = connect(mapStateToProp, mapDispatchToProp)(SendMessage);

export default SendMessage;