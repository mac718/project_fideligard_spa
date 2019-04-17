import React from 'react';


const DateWidget = ({onChange, date}) => {
  console.log(date)
  return (
    <div id='DateWidget' className='col-7'>
      <span id='start-date'>1/1/2018</span>
      <span id='end-date'>12/31/2018</span>
      <div id='DateWidget-container'>
        <input id='slider' type='range' min='1514851200000'  max='1546300800000' step='86400000' onChange={onChange} />
      </div>
      <p>{date.toDateString()}</p>
    </div>
  )
}

export default DateWidget;