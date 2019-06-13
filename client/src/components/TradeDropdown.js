import React from 'react';
import Dropdown from './elements/Dropdown'

const TradeDropdown = ({options}) => {
  return (
    <Dropdown options={['Buy', 'Sell']} name='TradeDropdown' />
  )
}

export default TradeDropdown;