import React, {Component} from 'react'
import { connect } from 'react-redux'
import Transactions from '../components/Transactions'

class TransactionsContainer extends Component {
  render() {
    const { transactions } = this.props
    return (
      <Transactions transactions={ transactions } />
    )
  }
}

const mapStateToProps = state => {
  return {
    transactions: state.transactions,
  }
}

export default connect(
  mapStateToProps,
  null
)(TransactionsContainer)