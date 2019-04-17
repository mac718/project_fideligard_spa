import React, {Component} from 'react';
import {connect} from 'react-redux';
import Stocks from '../components/Stocks';

class StocksContainer extends Component {
  render() {
    const {stockData, date, isFetchingHistoricalData} = this.props
    return <Stocks stockData={stockData} date={date} isFetchingHistoricalData={isFetchingHistoricalData}/>
  }
}

const mapStateToProps = state => {
  return {
    stockData: state.historicalStockData,
    date: state.date,
    isFetchingHistoricalData: state.isFetchingHistoricalData
  }
}

export default connect(
  mapStateToProps
)(StocksContainer)