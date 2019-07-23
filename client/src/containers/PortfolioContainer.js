import React, {Component} from 'react'
import { connect } from 'react-redux'
import { onTradeClick, onValidInput } from '../actions'
import Portfolio from '../components/Portfolio'

class PortfolioContainer extends Component {
  render() {
    const { transactions, historicalStockData, dateString, date, handleTradeClick } = this.props
    return (
      <Portfolio 
        transactions={ transactions } 
        historicalStockData={ historicalStockData } 
        dateString={ dateString }
        date={ date }
        handleTradeClick={ handleTradeClick }
      />
    )
  }
}

const mapStateToProps = state => {
  return {
    transactions: state.transactions,
    historicalStockData: state.historicalStockData,
    dateString: state.dateString,
    date: state.date
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleSortArrowClick: (e) => {

    },

    handleTradeClick: (symbol) => {

      let tradeInfo = {}

      tradeInfo.symbol = document.getElementById(`${symbol}`).innerHTML
      tradeInfo.price = parseFloat(document.getElementById(`${symbol}-price`).innerHTML.slice(1)).toFixed(2)

      dispatch(onTradeClick(tradeInfo))
      dispatch(onValidInput(tradeInfo))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PortfolioContainer)


