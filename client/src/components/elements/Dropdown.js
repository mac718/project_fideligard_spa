import React from 'react'

const Dropdown = ({options, onChange}) => {
  
  let dropdownOptions = options.map((option, i) => {
    return <option key={i} name={option}>{option}</option>
  })
  
  return (
    <select className='Dropdown' onChange={onChange}>
      {dropdownOptions}
    </select>
  )
}

export default Dropdown;