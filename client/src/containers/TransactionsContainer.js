import React, {Component} from 'react'
import { connect } from 'react-redux'
import Transactions from '../components/Transactions'
import { handleTransactionsDatesSort, handleTransactionsSymbolsSort, setFilterInput } from '../actions'

class TransactionsContainer extends Component {
  render() {
    const { transactions, handleDatesSortArrowClick, 
            transactionsDatesSortDirection, handleSymbolsSortArrowClick,
            transactionsSymbolsSortDirection, handleFilter, filterInput } = this.props
    return (
      <Transactions 
        transactions={ transactions } 
        handleDatesSortArrowClick={ handleDatesSortArrowClick } 
        handleSymbolsSortArrowClick={ handleSymbolsSortArrowClick }
        transactionsDatesSortDirection={ transactionsDatesSortDirection }
        transactionsSymbolsSortDirection={ transactionsSymbolsSortDirection }
        handleFilter={ handleFilter }
        filterInput={ filterInput } 
      />
    )
  }
}

const mapStateToProps = state => {
  return {
    transactions: state.transactions,
    transactionsDatesSortDirection: state.transactionsDatesSortDirection,
    transactionsSymbolsSortDirection: state.transactionsSymbolsSortDirection,
    filterInput: state.filterInput
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
      dispatch(setFilterInput(input))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TransactionsContainer)