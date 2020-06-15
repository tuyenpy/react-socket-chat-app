import React from 'react';
import { connect } from 'react-redux';

import './SendMessage.css';
import SendIcon from '@material-ui/icons/Send';

const refInput = React.createRef();

let SendMessage = (props) => {
  let { user, socket } = props;
  const onSend = (e) => {
    e.preventDefault();
    socket.emit('send-message', {
      userName: user.user.name,
      text: refInput.current.value
    })
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

SendMessage = connect(mapStateToProp, null)(SendMessage);

export default SendMessage;