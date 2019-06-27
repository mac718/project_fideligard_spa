import React, {Component} from 'react'
import { connect } from 'react-redux'
import Portfolio from '../components/Portfolio'

class PortfolioContainer extends Component {
  render() {
    const { transactions, historicalStockData, dateString, date } = this.props
    return (
      <Portfolio 
        transactions={ transactions } 
        historicalStockData={ historicalStockData } 
        dateString={ dateString }
        date={ date }
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

export default connect(
  mapStateToProps,
  null
)(PortfolioContainer)


