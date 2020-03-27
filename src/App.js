import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './page/Home'
import Info from './page/Info'
import Lank from './page/Lank'
import Community from './page/Community'
import Header from './header/Header';

function App() {
  return (
    <div className="App">
    <Header />
      <Route path="/Home" component={Home}/>
        <Switch>
          <Route path="/info" component={Info}/>
          <Route path="/lank" component={Lank}/>
          <Route path="/community" component={Community}/>
      </Switch>
    </div>
  );
}

export default App;
