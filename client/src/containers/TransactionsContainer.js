import React, {Component} from 'react'
import { connect } from 'react-redux'
import Transactions from '../components/Transactions'
import { handleTransactionsDatesSort, handleTransactionsSymbolsSort, setTransactionsFilterInput } from '../actions'

class TransactionsContainer extends Component {
  render() {
    const { transactions, handleDatesSortArrowClick, 
            transactionsDatesSortDirection, handleSymbolsSortArrowClick,
            transactionsSymbolsSortDirection, handleFilter, transactionsFilterInput } = this.props
    return (
      <Transactions 
        transactions={ transactions } 
        handleDatesSortArrowClick={ handleDatesSortArrowClick } 
        handleSymbolsSortArrowClick={ handleSymbolsSortArrowClick }
        transactionsDatesSortDirection={ transactionsDatesSortDirection }
        transactionsSymbolsSortDirection={ transactionsSymbolsSortDirection }
        handleFilter={ handleFilter }
        transactionsFilterInput={ transactionsFilterInput } 
      />
    )
  }
}

const mapStateToProps = state => {
  return {
    transactions: state.transactions,
    transactionsDatesSortDirection: state.transactionsDatesSortDirection,
    transactionsSymbolsSortDirection: state.transactionsSymbolsSortDirection,
    transactionsFilterInput: state.transactionsFilterInput
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleDatesSortArrowClick: () => {
      dispatch( handleTransactionsDatesSort() )
    },

    handleSymbolsSortArrowClick: () => {
      dispatch( handleTransactionsSymbolsSort() )
    },

    handleFilter: (e) => {
      let input = e.target.value
      console.log('filterInput ' + input)
      dispatch(setTransactionsFilterInput(input))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TransactionsContainer)