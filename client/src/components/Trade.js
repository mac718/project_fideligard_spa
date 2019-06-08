import React from 'react';
import InputGroup from './elements/InputGroup'
import TradeDropdown from './TradeDropdown'

const Trade = ({date, selectedStock, onKeyPress, onKeyUp, cost}) => {
  console.log('selectedStock ' + JSON.stringify(selectedStock))
  return (
    <div className='Trade col-7'>
      <h2>Trade</h2>
      <form id='buySell'>
        <InputGroup>
          <label htmlFor='Symbol'>Symbol:</label>
          <input 
            type='text' 
            name='Symbol' 
            value={selectedStock.symbol} 
            onKeyUp={onKeyUp}
          /> //add handler for user input
        </InputGroup>
        <InputGroup>
          <label htmlFor='Buy/Sell'>Buy/Sell:</label>
          <TradeDropdown />
        </InputGroup>
        <InputGroup>
          <label htmlFor='Quantity'>Quantity:</label>
          <input type='text' name='Quantity' onKeyPress={onKeyPress}/>
        </InputGroup>
      </form>
      <p>Price: ${selectedStock.stockPrice}</p>
      <p>Cost: ${cost}</p>
    </div>
  )
}

export default Trade;