import React from 'react';
import './ChannelList.css';

import ChannelItem from '../ChannelItem/ChannelItem';

const ChannelList = (props) => {
  let { channels } = props;
  return (
    <div className="ChannelList">
      <div className="ChannelList-header">
        <p className="title">Channels</p>
        <p>{channels.length}</p>
      </div>
      <div className="ChannelList-room">
        {
          channels.map((channel, index) => <ChannelItem {...channel} key={index} />)
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
export default ChannelList;