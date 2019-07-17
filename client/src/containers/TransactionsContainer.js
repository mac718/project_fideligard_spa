import React, {Component} from 'react'
import { connect } from 'react-redux'
import Transactions from '../components/Transactions'
import { handleTransactionsDatesSort } from '../actions'

class TransactionsContainer extends Component {
  render() {
    const { transactions, handleSortArrowClick, transactionsDatesSortDirection } = this.props
    return (
      <Transactions transactions={ transactions } onClick={ handleSortArrowClick } />
    )
  }
}

const mapStateToProps = state => {
  return {
    transactions: state.transactions,
    transactionsDatesSortDirection: state.transactionsDatesSortDirection
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleSortArrowClick: () => {
      dispatch(handleTransactionsDatesSort())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TransactionsContainer)