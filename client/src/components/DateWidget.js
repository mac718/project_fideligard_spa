import React from 'react';
import {startDate, endDate, dayLength} from '../dateMillisecondValues';


const DateWidget = ({onChange, date}) => {
  //console.log(date)
  return (
    <div id='DateWidget' className='col-7'>
      <span id='start-date'>1/1/2017</span>
      <span id='end-date'>12/31/2017</span>
      <div id='DateWidget-container'>
        <input id='slider' type='range' min={startDate}  max={endDate} step={dayLength} onChange={onChange} />
      </div>
      <p>{date.toDateString()}</p>
    </div>
  )
}

//make constants file with millisecond values

export default DateWidget;