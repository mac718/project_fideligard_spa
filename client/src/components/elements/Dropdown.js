import React from 'react'

const Dropdown = ({options, className, onChange, name}) => {
  
  let dropdownOptions = options.map((option, i) => {
    return <option key={i} name={option} value={`/${option}`}>{option}</option>
  })
  
  return (
    <select className={`Dropdown ${className}`}  onChange={onChange} name={name} >
      {dropdownOptions}
    </select>
  )
}

export default Dropdown;