import React, {Component} from 'react'
import {connect} from 'react-redux'
import Trade from '../components/Trade'
import {updateCost} from '../actions'

class TradeContainer extends Component {

  render(){
    const {date, selectedStock, cost, handleKeyPress} = this.props 
    return <Trade date={date} selectedStock={selectedStock} onKeyPress={handleKeyPress} cost={cost} />
  }
}

const mapStateToProps = state => {
  return {
    date: state.date,
    selectedStock: state.selectedStock,
    cost: state.currentTradeCost
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleKeyPress: (e) => {
      let quantity;
      console.log(e)
      if (e.key == 'Enter' || e.key == 'Tab') {
        quantity = e.target.value
      }
      dispatch(updateCost(quantity))
    }
  }
}

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(TradeContainer)