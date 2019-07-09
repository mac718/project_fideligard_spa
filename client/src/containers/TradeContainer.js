import React, { Component } from 'react'
import { connect } from 'react-redux'
import Trade from '../components/Trade'
import {
        onValidInput, 
        onInvalidInput, 
        updateCost, 
        updateCashAvailable,
        tradeValidations,
        setHasFormData,
        updateTransactions,
        resetFormValues
      } from '../actions'
import { retrievedStocks } from '../retrievedStocks'
import serialize from 'form-serialize'

class TradeContainer extends Component {

  render(){
    const { date, selectedStock, cost, handleBlur, handleSymbolChange, validSymbol, 
           onSubmit, cashAvailable, dateString, stockData, price, hasFormData, readOnly,
           submitDisabled } = this.props 
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
              submitDisabled={ submitDisabled }
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
    readOnly: state.readOnly,
    submitDisabled: state.submitDisabled
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleBlur: (e) => {
      let quantity = e.target.value
      let form = document.getElementById('buySell')
      let tradeInfo = serialize( form, { hash: true } )

      dispatch(tradeValidations(tradeInfo))
      dispatch(updateCost(quantity))
    },

    handleSymbolChange: (e) => {
      let symbol = e.target.value

      console.log('e' + e.target.value)

      if (retrievedStocks.includes(symbol.toUpperCase())) {
        
        let price = parseFloat(document.getElementById(`${symbol}-price`).innerHTML.slice(1))
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

      //dispatch(tradeValidations(tradeInfo))
    dispatch(updateCashAvailable(tradeInfo))
    dispatch(updateTransactions(tradeInfo))
    //dispatch(updatePortfolio(tradeInfo))
    dispatch(resetFormValues())
    },
  }
}

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(TradeContainer)