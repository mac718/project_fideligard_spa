import React, {Component} from 'react'
import MainDropdown from '../components/MainDropdown'

class MainDropdownContainer extends Component {
  onChange = (e) => {
    console.log(e.target.value)
    this.props.history.push(`${e.target.value}`)
  }
  render() {
    return <MainDropdown onChange={this.onChange} />
  }

}

export default MainDropdownContainer