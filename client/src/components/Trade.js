import React from 'react';
import InputGroup from './elements/InputGroup'
import TradeDropdown from './TradeDropdown'
import { makeDateString } from '../Helpers/dateHelpers'
import { Prompt } from 'react-router-dom'

const Trade = 
  ( { date, selectedStock, onBlur, handleSymbolChange, cost, validSymbol, onSubmit, 
      cashAvailable, dateString, stockData, price, hasFormData, readOnly, 
      submitDisabled } ) => {
  console.log('validSymbol' + validSymbol)
  console.log('selectedStock ' + JSON.stringify(selectedStock))
  console.log('date' + date)
  console.log('dateString' + dateString)
  console.log('price ' + price )
  return (
    <div id='Trade'>
      <h2>Trade</h2>
      <div className='TradeForm col-8'>
        
        <form id='buySell' onSubmit={ onSubmit }>
          <InputGroup>
            <label htmlFor='Symbol'>Symbol:</label>
            <input className={ validSymbol ? 'normal' : 'warning' }
              type='text' 
              name='Symbol' 
              value={ selectedStock.symbol } 
              onChange={ handleSymbolChange }
              readOnly={ readOnly }
            /> { validSymbol ?  '' : <p id='warning-message'>Invalid Symbol</p> }
          </InputGroup>
          <InputGroup>
            <label htmlFor='Buy/Sell'>Buy/Sell:</label>
            <TradeDropdown />
          </InputGroup>
          <InputGroup>
            <label htmlFor='Quantity'>Quantity:</label>
            <input type='text' name='Quantity' onBlur={ onBlur }/>
          </InputGroup>
          <InputGroup>
            <label htmlFor='Date'>Date:</label>
            <input 
              type='date' 
              name='Date' 
              id='Date' 
              min='2017-01-01' 
              max='2017-12-31' 
              value={ makeDateString(date) } 
              readOnly={true} 
            />
          </InputGroup>
          <InputGroup>
            <label htmlFor='Price'>Price: $</label>
            <input 
              type='text' 
              name='Price' 
              value={ selectedStock.stockPrice ? selectedStock.stockPrice : price} 
              id='Price' 
              readOnly={ true } 
            />
          </InputGroup>
          <InputGroup>
            <label htmlFor='Price'>Cost: $</label>
            <input type='text' name='Cost' value={ cost } id='Cost' readOnly={true} />
          </InputGroup>
          <input type='submit' disabled={ submitDisabled } />
          <Prompt
            when={hasFormData}
            message='Your form contains unsubmitted data. Are you sure you want to leave?'
          />
        </form>
        
      </div>
      <div className='cash col-4'>
        <h5>Cash Available:</h5>
        <p>${ cashAvailable.toFixed(2) }</p>
        <h5>Trade Status</h5>
        <p>{ submitDisabled ? <p id='InvalidTradeStatus'>INVALID</p> : <p id='ValidTradeStatus'>VALID</p>}</p>
      </div>
    </div>
  )
}

export default Trade;