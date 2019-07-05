import React, {Component} from 'react';
import {connect} from 'react-redux';
import {onDateWidgetChange, getHistoricalStockData} from '../actions'
import DateWidget from '../components/DateWidget';

class DateWidgetContainer extends Component {
  componentDidMount() {
    this.props.getHistoricalStockData()
  }
  render() {
    const {date, onChange} = this.props
    //console.log(date)
    return <DateWidget onChange={onChange} date={date} />
  }
}

const mapStateToProps = state => {
  return {
    date: state.date
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onChange: e => {
      //console.log('milliseconds ' + e.target.value)
      let date = new Date(parseInt(e.target.value))
      let dateYear = date.getFullYear();
      let dateMonth = date.getMonth();
      let dateDay = date.getDate();
      //date = new Date(dateYear, dateMonth, dateDay);
      //let dateString = date.toLocaleString('en-GB', {timezone: 'GMT'})
      console.log('dateString2 ' + date)

      dispatch(onDateWidgetChange(date));
    }, 

    getHistoricalStockData: () => {
      dispatch(getHistoricalStockData())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DateWidgetContainer)