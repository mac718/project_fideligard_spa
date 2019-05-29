import React from 'react';
import InputGroup from './elements/InputGroup'
import TradeDropdown from './TradeDropdown'

const Trade = () => {
  return (
    <div className='Trade col-7'>
      <h2>Trade</h2>
      <form id='buySell'>
        <InputGroup>
          <label for='Symbol'>Symbol:</label>
          <input type='text' name='Symbol' />
        </InputGroup>
        <InputGroup>
          <label for='Buy/Sell'>Buy/Sell:</label>
          <TradeDropdown />
        </InputGroup>
        <InputGroup>
          <label for='Quantity'>Quantity:</label>
          <input type='text' name='Quantity' />
        </InputGroup>
      </form>
    </div>
  )
}

export default Trade;