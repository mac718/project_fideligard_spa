import React from 'react'
import InputGroup from './elements/InputGroup'

const FilterField = ({ onChange }) => {
  return (
    <div className='FilterField'>
      <InputGroup name='FilterField' labelText='Fliter: '>
        <input type='text' onChange={ onChange } />
      </InputGroup>
    </div>
  )
} 

export default FilterField;