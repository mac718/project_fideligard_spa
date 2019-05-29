import React from 'react'
import Dropdown from './elements/Dropdown'

const MainDropdown = ({onChange}) => {
  return (
    <Dropdown options={['Trade', 'Transactions', 'Portfolio']} onChange={onChange} />
  )
}

export default MainDropdown;