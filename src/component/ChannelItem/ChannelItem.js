import React from 'react';
import './ChannelItem.css';

const colorGird = [
  "blueLight",
  "greenLight",
  "orangeLight",
  "greyLight",
  "brownLight",
  "yellowLight"
];

const ChannelItem = (props) => {
  let { nameRoom } = props;
  let stateColor = Math.floor((Math.random()/2 * 10));
  return (
    <div className="ChannelItem">
      <p className={colorGird[stateColor]}>{nameRoom[0]}</p>
      <p>{`# ${nameRoom}`}</p>
    </div>
  )
}

ChannelItem.defaultProps = {
  nameRoom: "chatroom"
}

export default ChannelItem;