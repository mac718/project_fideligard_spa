import React, {Component} from 'react';
import {connect} from 'react-redux';
import Stocks from '../components/Stocks';
import {cleanUp} from '../Helpers/ApiCleanup';


class StocksContainer extends Component {
  render() {
    const {stockData, date, isFetchingHistoricalData} = this.props
    let cleanStockData = stockData.map(stock => {
      //console.log(stock.dataset_data.data)
      return cleanUp(stock.dataset_data.data)
    })
    //console.log(stockData[0][0].dataset_data)
    return <Stocks stockData={cleanStockData} date={date} isFetchingHistoricalData={isFetchingHistoricalData}/>
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