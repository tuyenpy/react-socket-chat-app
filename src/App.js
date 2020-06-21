import React from 'react';
import { withCookies } from 'react-cookie';
import { BrowserRouter } from 'react-router-dom';

import './App.css';
import Authencation from './component/Authencation/Authencation';
import AppContainer from './component/AppContainer/AppContainer';


const App = (props) => {
  let { cookies } = props;
  return (
    <BrowserRouter>
      <div className="App">
        {
          cookies.get('userID') ? (
            <AppContainer />

          ) : (
              <Authencation />
            )
        }

      </div>
    </BrowserRouter>
  )
}

export default withCookies(App);
