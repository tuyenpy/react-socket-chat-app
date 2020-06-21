import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withCookies } from 'react-cookie';


import { getUser } from '../../actions/index';
import socket from '../../socket/index';

import './AppContainer.css';
import Menu from '../Menu/Menu';
import HigherOrderChannelComponent from '../HigherOrderChannelComponent/HigherOrderChannelComponent';
import ChannelList from '../ChannelList/ChannelList';
import Chat from '../Chat/Chat';

const WithChannelComponent = HigherOrderChannelComponent({title: "Channel"}, ChannelList);

let AppContainer = (props) => {
  let { cookies, getUser, location } = props;

  //getUser
  useEffect(() => {
    getUser(cookies.get('userID'))
  })

  return(
    <div className="AppContainer">
      <div className="AppContainer-sideleft">
        <Menu />
        <WithChannelComponent />
      </div>
      <div className="AppContainer-sideright">
        <Chat socket={socket} location={location}/>
      </div>
    </div>
  )
}

const mapDispatchToProp = {
  getUser: getUser
}

AppContainer = connect(null, mapDispatchToProp)(AppContainer);

export default withCookies(AppContainer);