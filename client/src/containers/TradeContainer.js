import React, {Component} from 'react'
import {connect} from 'react-redux'
import Trade from '../components/Trade'

class TradeContainer extends Component {
  render(){
    const {date, selectedStock} = this.props 
    return <Trade date={date} selectedStock={selectedStock} />
  }
}

const mapStateToProps = state => {
  return {
    date: state.date,
    selectedStock: state.selectedStock,
  }
}

export default connect (
  mapStateToProps,
)(TradeContainer)