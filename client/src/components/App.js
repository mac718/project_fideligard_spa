import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLinks,
} from 'react-router-dom'
import DateWidgetContainer from '../containers/DateWidgetContainer'

const App = () => {
  return (
    <div className="App">
      <DateWidgetContainer />
    </div>
  );
}


export default App;
