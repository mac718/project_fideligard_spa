import React from 'react';
import InputGroup from './elements/InputGroup'
import TradeDropdown from './TradeDropdown'

const Trade = ({date, selectedStock}) => {
  console.log('selectedStock ' + JSON.stringify(selectedStock))
  return (
    <div className='Trade col-7'>
      <h2>Trade</h2>
      <form id='buySell'>
        <InputGroup>
          <label htmlFor='Symbol'>Symbol:</label>
          <input type='text' name='Symbol' value={selectedStock.symbol} />
        </InputGroup>
        <InputGroup>
          <label htmlFor='Buy/Sell'>Buy/Sell: $</label>
          <TradeDropdown />
        </InputGroup>
        <InputGroup>
          <label htmlFor='Quantity'>Quantity:</label>
          <input type='text' name='Quantity' />
        </InputGroup>
      </form>
    </div>
  )
}

export default Trade;