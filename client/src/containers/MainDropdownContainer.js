import React, {Component} from 'react'
import {connect} from 'react-redux';
import MainDropdown from '../components/MainDropdown'

class MainDropdownContainer extends Component {
  onChange = (e) => {
    this.props.history.push(`/${e.target.value}`)
  }
  render() {
    return <MainDropdown onChange={this.onChange} />
  }

}

// const mapDispatchToProps = dispatch => {
//   return {
//     onChange: (e) => {
      
//     }
//   }
// }

export default MainDropdownContainer