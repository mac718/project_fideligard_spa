import React from "react";
import { Router } from "react-router";
import {
  //BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";
import DateWidgetContainer from "../containers/DateWidgetContainer";
import Header from "./Header";
import StocksContainer from "../containers/StocksContainer";
import TradeContainer from "../containers/TradeContainer";
import TransactionsContainer from "../containers/TransactionsContainer";
import ControlPanel from "./ControlPanel";
import PortfolioContainer from "../containers/PortfolioContainer";
import MainDropdownContainer from "../containers/MainDropdownContainer";
import history from "../history";

const Menu = withRouter(MainDropdownContainer);

const App = () => {
  return (
    <Router history={history}>
      <div className="App container-fluid">
        <Header />
        <div className="row">
          <StocksContainer />
          {/* <div className='buffer col-1'></div> */}
          <div className="col-sm">
            <DateWidgetContainer />
            <div className="buffer col-5"></div>
            <ControlPanel>
              <Menu options={["Trade", "Transactions", "Portfolio"]} />
              <Switch>
                <Route exact path="/" component={TradeContainer} />
                <Route exact path="/Trade" component={TradeContainer} />
                <Route
                  exact
                  path="/Transactions"
                  component={TransactionsContainer}
                />
                <Route exact path="/Portfolio" component={PortfolioContainer} />
              </Switch>
            </ControlPanel>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
