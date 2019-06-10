import React, {Component} from 'react'
import {connect} from 'react-redux'
import Trade from '../components/Trade'
import {updateCost} from '../actions'
import {onValidInput, onInvalidInput} from '../actions'
import {retrievedStocks} from '../retrievedStocks'

class TradeContainer extends Component {

  render(){
    const {date, selectedStock, cost, handleKeyPress, handleKeyUp, validSymbol} = this.props 
    return <Trade 
              date={date} 
              selectedStock={selectedStock} 
              onKeyPress={handleKeyPress} 
              onChange={handleKeyUp}
              cost={cost} 
              validSymbol={validSymbol}
            />
  }
}

const mapStateToProps = state => {
  return {
    date: state.date,
    selectedStock: state.selectedStock,
    cost: state.currentTradeCost,
    validSymbol: state.validSymbol
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

      console.log('e' + e.target.value)

      if (retrievedStocks.includes(symbol.toUpperCase()) || symbol == '') {
        dispatch(onValidInput(symbol))
      } else {
        dispatch(onInvalidInput())
        console.log('nope') //add class to input using state
      }
      
    }
  }
}

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(TradeContainer)