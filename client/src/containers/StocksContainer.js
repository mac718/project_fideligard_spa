import React, {Component} from 'react';
import {connect} from 'react-redux';
import Stocks from '../components/Stocks';
import {cleanUp} from '../Helpers/ApiCleanup';
import {onTradeClick} from '../actions';


class StocksContainer extends Component {
  
  render() {
    const {stockData, date, isFetchingHistoricalData, onClick} = this.props
    let cleanStockData = stockData.map(stock => {
      //console.log(stock.dataset_data.data)
      return cleanUp(stock.dataset_data.data)
    })
    //console.log(stockData[0][0].dataset_data)
    return <Stocks 
              stockData={cleanStockData} 
              date={date} 
              isFetchingHistoricalData={isFetchingHistoricalData} 
              onClick={onClick}
            />
  }
}

const mapStateToProps = state => {
  return {
    stockData: state.historicalStockData,
    date: state.date,
    isFetchingHistoricalData: state.isFetchingHistoricalData
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onClick: (e) => {
      let tradeInfo = {}

      tradeInfo.symbol = e.target.parentNode.parentNode.firstChild.innerHTML
      tradeInfo.stockPrice = parseFloat(e.target.parentNode.parentNode.children[1].innerHTML.slice(1)).toFixed(2)

      console.log('tradeInfo' + tradeInfo)

      dispatch(onTradeClick(tradeInfo))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StocksContainer)