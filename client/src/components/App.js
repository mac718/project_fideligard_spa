import React from 'react';
import {Router} from 'react-router'
import {
  //BrowserRouter as Router,
  Route,
  Switch,
  NavLinks,
  withRouter,
} from 'react-router-dom'
import DateWidgetContainer from '../containers/DateWidgetContainer'
import Header from './Header';
import StocksContainer from '../containers/StocksContainer';
import TradeContainer from '../containers/TradeContainer';
import Transactions from './Transactions'
import ControlPanel from './ControlPanel'
import Portfolio from './Portfolio';
import MainDropdownContainer from '../containers/MainDropdownContainer'
import history from "../history";

const Menu = withRouter(MainDropdownContainer)

const App = () => {
  return (
    <Router history={history}>
      <div className="App container-fluid">
        <Header />
        <div className='row'>
          <StocksContainer />
          <div className='buffer col-1'></div>
          <div className='col-sm'>
          <DateWidgetContainer />
          <div className='buffer col-5'></div>
          <ControlPanel>
            <Menu options={['Trade', 'Transactions', 'Portfolio']} />
            <Switch>
              <Route exact path='/' component={TradeContainer} />
              <Route exact path='/Trade' component={TradeContainer} />
              <Route exact path='/Transactions' component={Transactions} />
              <Route exact path='/Portfolio' component={Portfolio} />
            </Switch>
          </ControlPanel>
          </div>
        </div>
      </div>
    </Router>
  );
}


export default App;
