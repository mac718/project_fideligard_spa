import React, {Component} from 'react'
import { connect } from 'react-redux'
import Transactions from '../components/Transactions'
import { handleTransactionsDatesSort, handleTransactionsSymbolsSort } from '../actions'

class TransactionsContainer extends Component {
  render() {
    const { transactions, handleDatesSortArrowClick, 
            transactionsDatesSortDirection, handleSymbolsSortArrowClick,
            transactionsSymbolsSortDirection } = this.props
    return (
      <Transactions 
        transactions={ transactions } 
        handleDatesSortArrowClick={ handleDatesSortArrowClick } 
        handleSymbolsSortArrowClick={ handleSymbolsSortArrowClick }
        transactionsDatesSortDirection={ transactionsDatesSortDirection }
        transactionsSymbolsSortDirection={ transactionsSymbolsSortDirection }
      />
    )
  }
}

const mapStateToProps = state => {
  return {
    transactions: state.transactions,
    transactionsDatesSortDirection: state.transactionsDatesSortDirection,
    transactionsSymbolsSortDirection: state.transactionsSymbolsSortDirection,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleDatesSortArrowClick: () => {
      dispatch( handleTransactionsDatesSort() )
    },

    handleSymbolsSortArrowClick: () => {
      dispatch( handleTransactionsSymbolsSort() )
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TransactionsContainer)