import React from 'react'
import PropTypes from 'prop-types';

const InputGroup = ({name, labelText, children}) => (
  <div className="form-group">
    <label htmlFor={name}>{labelText}</label>
    {children}
  </div>
)

InputGroup.propTypes = {
  name: PropTypes.string,
  labelText: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default InputGroup;