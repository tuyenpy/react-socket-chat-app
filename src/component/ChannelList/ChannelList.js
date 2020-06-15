import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getRoom } from '../../actions/index';

import './ChannelList.css';

import ChannelItem from '../ChannelItem/ChannelItem';

let ChannelList = (props) => {
  let { newRoom, getRoom, option, channels } = props;

  //get room
  useEffect(() => {

    getRoom();

  }, [getRoom]);

  //set channel
  if (newRoom.rooms) {
    var rooms = newRoom.rooms.length && newRoom.rooms;
  }
  console.log(newRoom);
  return (
    <div className="ChannelList">
      <div className="ChannelList-header">
        <p className="title">{option.title}</p>
        <p>{
          rooms ? (
            rooms.length
          ) : (
              channels.length
            )
        }</p>
      </div>
      <div className="ChannelList-room">
        {
          rooms ? (
            rooms.map((channel, index) => <ChannelItem {...channel} key={index} />)

          ) : (

              channels.map((channel, index) => <ChannelItem {...channel} key={index} />)
            )
        }
      </div>
    </div>
  )
}

ChannelList.defaultProps = {
  channels: [
    {
      nameRoom: "chatroom",
    },
    {
      nameRoom: "animal-club",
    },
    {
      nameRoom: "united-kingdom",
    },
    {
      nameRoom: "soviet-union",
    },
    {
      nameRoom: "india",
    },
    {
      nameRoom: "united-state",
    },
  ]
}

const mapStateToProp = (state) => ({
  newRoom: state.rooms
})

const mapDispatchToProp = {
  getRoom: getRoom
}

ChannelList = connect(mapStateToProp, mapDispatchToProp)(ChannelList);

export default ChannelList;