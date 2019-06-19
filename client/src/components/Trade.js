import React from 'react';
import InputGroup from './elements/InputGroup'
import TradeDropdown from './TradeDropdown'
import { makeDateString } from '../Helpers/dateHelpers'

const Trade = 
  ( { date, selectedStock, onBlur, onChange, cost, validSymbol, onSubmit, cashAvailable, dateString, stockData, price } ) => {
  console.log('validSymbol' + validSymbol)
  console.log('selectedStock ' + JSON.stringify(selectedStock))
  console.log('date' + date)
  console.log('dateString' + dateString)
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
              onChange={ onChange }
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
            <input type='date' name='Date' min='2017-01-01' max='2017-12-31' value={ dateString } />
          </InputGroup>
          <InputGroup>
            <label htmlFor='Price'>Price: $</label>
            <input 
              type='text' 
              name='Price' 
              value={ selectedStock.stockPrice } 
              id='Price' 
              readOnly={ true } 
            />
          </InputGroup>
          <InputGroup>
            <label htmlFor='Price'>Cost: $</label>
            <input type='text' name='Cost' value={ cost } id='Cost' readOnly={true} />
          </InputGroup>
          <input type='submit' />
        </form>
      </div>
      <div className='cash col-4'>
        <h5>Cash Available:</h5>
        <p>${ cashAvailable.toFixed(2) }</p>
      </div>
    </div>
  )
}

export default Trade;