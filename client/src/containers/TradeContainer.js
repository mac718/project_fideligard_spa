import React, { Component } from 'react'
import { connect } from 'react-redux'
import Trade from '../components/Trade'
import {
        onValidInput, 
        onInvalidInput, 
        updateCost, 
        updateCashAvailable,
        tradeValidations,
        setHasFormData
      } from '../actions'
import { retrievedStocks } from '../retrievedStocks'
import serialize from 'form-serialize'

class TradeContainer extends Component {

  render(){
    const { date, selectedStock, cost, handleBlur, handleSymbolChange, validSymbol, 
           onSubmit, cashAvailable, dateString, stockData, price, hasFormData, readOnly } = this.props 
    return <Trade 
              date={ date } 
              selectedStock={ selectedStock } 
              onBlur={ handleBlur } 
              handleSymbolChange={ handleSymbolChange }
              cost={ cost } 
              validSymbol={ validSymbol }
              onSubmit={ onSubmit }
              cashAvailable={ cashAvailable }
              dateString={ dateString }
              stockData={ stockData }
              price={ price }
              hasFormData={hasFormData}
              readOnly={ readOnly }
            />
  }
}

const mapStateToProps = state => {
  return {
    date: state.date,
    selectedStock: state.selectedStock,
    cost: state.currentTradeCost,
    validSymbol: state.validSymbol,
    cashAvailable: state.cashAvailable,
    dateString: state.dateString,
    stockData: state.historicalStockData,
    price: state.currentTradePrice,
    hasFormData: state.hasFormData,
    readOnly: state.readOnly
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleBlur: (e) => {
      let quantity;
      // console.log(e)
      // if (e.key == 'Enter' || e.key == 'Tab') {
      //   quantity = e.target.value
      // }
      quantity = e.target.value
      dispatch(updateCost(quantity))
    },

    handleSymbolChange: (e) => {
      let symbol = e.target.value

      console.log('e' + e.target.value)

      if (retrievedStocks.includes(symbol.toUpperCase())) {
        
        let price = parseFloat(document.getElementById(`${symbol}-td`).innerHTML.slice(1))
        let tradeInfo = { symbol: symbol, price: price }
    
        dispatch(onValidInput(tradeInfo))
        dispatch(setHasFormData())
      } else if ( symbol == '' ) {
        
        let tradeInfo = { symbol: symbol, price: '' }
        dispatch(onValidInput(tradeInfo))
        dispatch(setHasFormData())
      
      } else {
        dispatch(onInvalidInput())
        console.log('nope')
      }
      
    },

    onSubmit: (e) => {
      e.preventDefault();

      let form = e.target
      let tradeInfo = serialize(form, { hash: true })

      if (tradeInfo.TradeDropdown === '/Buy') {
        tradeInfo.Cost = tradeInfo.Cost * -1
      }

      //console.log(tradeInfo)

      dispatch(tradeValidations(tradeInfo))
    },
  }
}

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(TradeContainer)