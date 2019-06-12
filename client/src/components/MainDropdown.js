import React from 'react'
import Dropdown from './elements/Dropdown'

const MainDropdown = ({onChange}) => {
  return (
    <Dropdown options={['Trade', 'Transactions', 'Portfolio']} className='MainDropdown' onChange={onChange} />
  )
}

export default MainDropdown;