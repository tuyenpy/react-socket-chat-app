import React from 'react';
import { connect } from 'react-redux';
import { createRoom } from '../../actions/room.action';
import './AddRoom.css';

const refInput = React.createRef();

let AddRoom = (props) => {
  let {socket, setAddRoom, createRoom} = props;
  const onAddRoom = (e) => {
    e.preventDefault();
    if (refInput.current.value.trim() !=="") {
      createRoom(refInput.current.value);
      socket.emit('add-channel');

    }
    console.log('fix');
    setAddRoom(false);
  }
  return <div className="AddRoom">
    <form onSubmit={onAddRoom}>
      <input 
        type="text"
        ref={refInput}
        placeholder="Fill the room name and enter..."
        />
    </form>
  </div>
}

const mapDispatchToProp = {
  createRoom: createRoom
}

AddRoom = connect(null, mapDispatchToProp)(AddRoom);

export default AddRoom;