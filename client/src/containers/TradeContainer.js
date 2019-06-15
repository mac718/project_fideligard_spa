import React, {Component} from 'react'
import {connect} from 'react-redux'
import Trade from '../components/Trade'
import {
        onValidInput, 
        onInvalidInput, 
        updateCost, 
        updateCashAvailable
      } from '../actions'
import {retrievedStocks} from '../retrievedStocks'
import serialize from 'form-serialize'

class TradeContainer extends Component {

  render(){
    const {date, selectedStock, cost, handleKeyPress, handleKeyUp, validSymbol, onSubmit} = this.props 
    return <Trade 
              date={date} 
              selectedStock={selectedStock} 
              onKeyPress={handleKeyPress} 
              onChange={handleKeyUp}
              cost={cost} 
              validSymbol={validSymbol}
              onSubmit={onSubmit}
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
      
    },

    onSubmit: (e) => {
      e.preventDefault();

      let form = e.target
      let data = serialize(form, { hash: true })

      if (data.TradeDropdown === '/Buy') {
        data.Cost = data.Cost * -1
      }

      console.log(data)

      dispatch(updateCashAvailable(data))
    }
  }
}

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(TradeContainer)