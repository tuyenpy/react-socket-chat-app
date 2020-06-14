import React from 'react';
import './App.css';
import ChannelList from './component/ChannelList/ChannelList';
import HigherOrderChannelComponent from './component/HigherOrderChannelComponent/HigherOrderChannelComponent';

const WithChannelComponent = HigherOrderChannelComponent({title: "Channel"}, ChannelList);
const WithUnreadComponent = HigherOrderChannelComponent({title: "Unread"}, ChannelList);
const WithPrivateGroupComponent = HigherOrderChannelComponent({title: "Private Group"}, ChannelList)


const App = () => {
  return <div className="App">
    <WithUnreadComponent />
    <WithChannelComponent />
    <WithPrivateGroupComponent />
  </div>
}

export default App;
