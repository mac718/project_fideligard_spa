import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLinks,
} from 'react-router-dom'
import DateWidgetContainer from '../containers/DateWidgetContainer'
import Header from './Header';

const App = () => {
  return (
    <div className="App container-fluid">
      <Header />
      <div className='row'>
        <div className='col-4'></div>
        <DateWidgetContainer />
      </div>
    </div>
  );
}


export default App;
