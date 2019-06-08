import React, {Component} from 'react'
import {connect} from 'react-redux'
import Trade from '../components/Trade'
import {updateCost} from '../actions'
import {onUserInput} from '../actions'
import {retrievedStocks} from '../retrievedStocks'

class TradeContainer extends Component {

  render(){
    const {date, selectedStock, cost, handleKeyPress, handleKeyUp} = this.props 
    return <Trade 
              date={date} 
              selectedStock={selectedStock} 
              onKeyPress={handleKeyPress} 
              onKeyUp={handleKeyUp}
              cost={cost} 
            />
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
    },

    handleKeyUp: (e) => {
      let symbol = e.target.value

      if (retrievedStocks.includes(symbol.toUpperCase())) {
        dispatch(onUserInput(symbol))
      } else {
        console.log('nope') //add class to input using state
      }
      
    }
  }
}

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(TradeContainer)