import React from 'react';
import { Link } from 'react-router-dom';
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
    <Link to={href} className="roomLink">
      <div className="ChannelItem">
        <p className={colorGird[stateColor]}>{nameRoom[0]}</p>
        <p>{`# ${name || nameRoom}`}</p>
      </div>
    </Link>
  )
}

ChannelItem.defaultProps = {
  nameRoom: "chatroom"
}

export default ChannelItem;