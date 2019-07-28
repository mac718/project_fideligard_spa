import React, {Component} from 'react';
import {connect} from 'react-redux';
import Stocks from '../components/Stocks';
import {cleanUp} from '../Helpers/ApiCleanup';
import {onTradeClick, onValidInput, setFilterInput} from '../actions';


class StocksContainer extends Component {
  
  render() {
    const {stockData, date, isFetchingHistoricalData, onClick, handleFilter, filterInput} = this.props
    let cleanStockData = stockData.map(stock => {
      return cleanUp(stock.dataset_data.data)
    })
    return <Stocks 
              stockData={cleanStockData} 
              date={date} 
              isFetchingHistoricalData={isFetchingHistoricalData} 
              onClick={onClick}
              filterInput={filterInput}
              handleFilter={handleFilter}
            />
  }
}

const mapStateToProps = state => {
  return {
    stockData: state.historicalStockData,
    date: state.date,
    isFetchingHistoricalData: state.isFetchingHistoricalData,
    filterInput: state.filterInput
  }
}

const mapDispatchToProps = ( dispatch, ownProps ) => {
  return {
    onClick: (e) => {
      let tradeInfo = {}

      tradeInfo.symbol = e.target.parentNode.parentNode.firstChild.innerHTML
      tradeInfo.price = parseFloat(e.target.parentNode.parentNode. 
                              children[1].innerHTML.slice(1)).toFixed(2)

      dispatch(onTradeClick(tradeInfo))
      dispatch(onValidInput(tradeInfo))
    },

    handleFilter: (e) => {
      let input = e.target.value
      console.log('filterInput ' + input)
      dispatch(setFilterInput(input))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StocksContainer)