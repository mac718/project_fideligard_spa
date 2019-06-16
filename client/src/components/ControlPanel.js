import React from 'react'
import MainDropdownContainer from '../containers/MainDropdownContainer'

const ControlPanel = ({children, onChange}) => {
  return (
    <div className='ControlPanel col-sm'>
      {children}
    </div>
  )
}

export default ControlPanel;