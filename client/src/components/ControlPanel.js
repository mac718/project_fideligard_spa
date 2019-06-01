import React from 'react'
import MainDropdownContainer from '../containers/MainDropdownContainer'

const ControlPanel = ({children, onChange}) => {
  return (
    <div className='ControlPanel col-7'>
      <MainDropdownContainer options={['Trade', 'Transactions', 'Portfolio']} onChange={onChange} />
      {children}
    </div>
  )
}

export default ControlPanel;