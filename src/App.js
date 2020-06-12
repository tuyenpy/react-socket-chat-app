import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';

import './App.css';

import Test from './component/Test/Test';

const App = () => {
  return <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path="/" component={Test} />
      </Switch>
    </div>
  </BrowserRouter>
}

export default App;
