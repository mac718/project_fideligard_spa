import React, {Component} from 'react'
import {connect} from 'react-redux'
import MainDropdown from '../components/MainDropdown'
import history from '../history'
import {resetSymbol} from '../actions'

class MainDropdownContainer extends Component {
  
  render() {
    const {onChange} = this.props 

    return <MainDropdown onChange={onChange} />
  }

}

const mapDispatchToProps = dispatch => {
  return {
    onChange: (e) => {
      console.log(e.target.value)
      console.log(history)
      history.push(`${e.target.value}`)
      dispatch(resetSymbol())
    }
  }
}

export default connect(
  null,
  mapDispatchToProps
)(MainDropdownContainer)

//export default MainDropdownContainer