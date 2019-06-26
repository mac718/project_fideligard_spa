import React, {Component} from 'react'
import { connect } from 'react-redux'
import Portfolio from '../components/Portfolio'

class PortfolioContainer extends Component {
  render() {
    const { transactions, historicalStockData, dateString } = this.props
    return (
      <Portfolio 
        transactions={ transactions } 
        historicalStockData={ historicalStockData } 
        dateString={ dateString }
      />
    )
  }
}

const mapStateToProps = state => {
  return {
    transactions: state.transactions,
    historicalStockData: state.historicalStockData,
    dateString: state.dateString,
  }
}

export default connect(
  mapStateToProps,
  null
)(PortfolioContainer)


