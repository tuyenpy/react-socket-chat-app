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
  let { nameRoom, name } = props;
  let stateColor = Math.floor((Math.random() / 2 * 10));
  let href = `/?room=${name}`;
  return (
    <a href={href} className="roomLink">
      <div className="ChannelItem">
        <p className={colorGird[stateColor]}>{nameRoom[0]}</p>
        <p>{`# ${name || nameRoom}`}</p>
      </div>
    </a>
  )
}

ChannelItem.defaultProps = {
  nameRoom: "chatroom"
}

export default ChannelItem;