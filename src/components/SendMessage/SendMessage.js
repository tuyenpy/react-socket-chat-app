import React from 'react';
import { connect } from 'react-redux';
import { sendMessage } from '../../actions/message.action';

import './SendMessage.css';

const refInput = React.createRef();

let SendMessage = (props) => {
  let { user, socket, room, sendMessage } = props;
  const onSend = (e) => {
    e.preventDefault();
    sendMessage({
      userName: user.user.name,
      text: refInput.current.value,
      room: room
    });
    refInput.current.value = "";
    socket.emit('send-message');
  }
  return (
    <div className="SendMessage">
      <div className="SendMessage-input">
        <form onSubmit={onSend}>
          <input type="text"
            ref={refInput}
            placeholder="type a message"
          />

        </form>

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