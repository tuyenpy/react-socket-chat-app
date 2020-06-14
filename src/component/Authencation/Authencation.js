import React from 'react';
import './Authencation.css';
import {Switch, Route, Redirect} from 'react-router-dom';

import Login from '../Login/Login';
import Signup from '../Signup/Signup';

const Authencation = () => {
  return(
    <div className="Authencation">
      
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/signup" component={Signup} />
      </Switch>
    </div>
  )
}

export default Authencation;