import React, {Component} from 'react'
import {connect} from 'react-redux';
import MainDropdown from '../components/MainDropdown'

class MainDropdown extends Component {

}

const mapDispatchToProps = dispatch => {
  return {
    onChange: () => {
      dispatch(setPath());
    }
  }
}