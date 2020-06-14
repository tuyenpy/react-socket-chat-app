import React from 'react';
import './AppContainer.css';
import Menu from '../Menu/Menu';
import HigherOrderChannelComponent from '../HigherOrderChannelComponent/HigherOrderChannelComponent';
import ChannelList from '../ChannelList/ChannelList';
import MessageList from '../MessageList/MessageList';
import SendMessage from '../SendMessage/SendMessage';

const WithUnreadComponent = HigherOrderChannelComponent({title: "Unread"}, ChannelList);
const WithChannelComponent = HigherOrderChannelComponent({title: "Channel"}, ChannelList);
const WithPrivateComponent = HigherOrderChannelComponent({title: "Private Group"}, ChannelList);


const AppContainer = () => {
  return(
    <div className="AppContainer">
      <div className="AppContainer-sideleft">
        <Menu />
        <WithUnreadComponent />
        <WithChannelComponent />
        <WithPrivateComponent />
      </div>
      <div className="AppContainer-sideright">
        <MessageList />
        <SendMessage />
      </div>
    </div>
  )
}

export default AppContainer;