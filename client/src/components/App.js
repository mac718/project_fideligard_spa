import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLinks,
} from 'react-router-dom'
import DateWidgetContainer from '../containers/DateWidgetContainer'
import Header from './Header';
import StocksContainer from '../containers/StocksContainer';
import Trade from './Trade';
import ControlPanel from './ControlPanel'

const App = () => {
  return (
    <div className="App container-fluid">
      <Header />
      <div className='row'>
        <StocksContainer />
        <div className='buffer col-1'></div>
        <DateWidgetContainer />
        <div className='buffer col-5'></div>
        <ControlPanel>
          <Trade />
        </ControlPanel>
      </div>
    </div>
  );
}


export default App;
