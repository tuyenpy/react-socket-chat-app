import React from 'react';
import './SendMessage.css';
import SendIcon from '@material-ui/icons/Send';

const refInput = React.createRef();

const SendMessage = () => {
  const onSend = (e) => {
    e.preventDefault();
    alert(refInput.current.value);
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

export default SendMessage;