import React from 'react'
import MainDropdown from './MainDropdown'

const ControlPanel = ({children, onChange}) => {
  return (
    <div className='ControlPanel col-7'>
      <MainDropdown options={['Trade', 'Transactions', 'Portfolio']} onChange={onChange} />
      {children}
    </div>
  )
}

export default ControlPanel;