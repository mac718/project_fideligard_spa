import React from 'react';
import {widgetStartDate, endDate, dayLength} from '../dateMillisecondValues';


const DateWidget = ({onChange, date}) => {
  return (
    <div id='DateWidget' className='col-7'>
      <span id='start-date'>1/1/2017</span>
      <span id='end-date'>12/31/2017</span>
      <div id='DateWidget-container'>
        <input id='slider' type='range' min={widgetStartDate}  max={endDate} step={dayLength} onChange={onChange} />
      </div>
      <p>{date.toDateString()}</p>
    </div>
  )
}

export default DateWidget;