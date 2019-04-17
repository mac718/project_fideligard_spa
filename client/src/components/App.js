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

const App = () => {
  return (
    <div className="App container-fluid">
      <Header />
      <div className='row'>
        <StocksContainer />
        <div className='col-1'></div>
        <DateWidgetContainer />
      </div>
    </div>
  );
}


export default App;
