import React from 'react';
import InputGroup from './elements/InputGroup'
import TradeDropdown from './TradeDropdown'

const Trade = ({date, selectedStock, onKeyPress, onChange, cost, validSymbol, onSubmit}) => {
  console.log('validSymbol' + validSymbol)
  console.log('selectedStock ' + JSON.stringify(selectedStock))
  return (
    <div className='Trade col-7'>
      <h2>Trade</h2>
      <form id='buySell' onSubmit={onSubmit}>
        <InputGroup>
          <label htmlFor='Symbol'>Symbol:</label>
          <input className={validSymbol ? 'normal' : 'warning'}
            type='text' 
            name='Symbol' 
            value={selectedStock.symbol} 
            onChange={onChange}
          /> {validSymbol ?  '' : <p id='warning-message'>Invalid Symbol</p>}
        </InputGroup>
        <InputGroup>
          <label htmlFor='Buy/Sell'>Buy/Sell:</label>
          <TradeDropdown />
        </InputGroup>
        <InputGroup>
          <label htmlFor='Quantity'>Quantity:</label>
          <input type='text' name='Quantity' onKeyPress={onKeyPress}/>
        </InputGroup>
        <InputGroup>
          <label htmlFor='Date'>Date:</label>
          <input type='date' name='Date' />
        </InputGroup>
        <InputGroup>
          <label htmlFor='Price'>Price: $</label>
          <input 
            type='text' 
            name='Price' 
            value={selectedStock.stockPrice} 
            id='Price' 
            readOnly={true} 
          />
        </InputGroup>
        <InputGroup>
          <label htmlFor='Price'>Cost: $</label>
          <input type='text' name='Cost' value={cost} id='Cost' readOnly={true} />
        </InputGroup>
        <input type='submit' />
      </form>
      
    </div>
  )
}

export default Trade;