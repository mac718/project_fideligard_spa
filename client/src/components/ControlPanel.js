import React from 'react'

const ControlPanel = ({children, onChange}) => {
  return (
    <div className='ControlPanel col-sm'>
      {children}
    </div>
  )
}

export default ControlPanel;