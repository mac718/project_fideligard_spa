import React from 'react';


const DateWidget = ({onChange, date}) => {
  console.log(date)
  return (
    <div>
      <input id='butt' type='range' min='1517443200000'  max='1548892800000' step='86400000' onChange={onChange} />
      <p>{date.toDateString()}</p>
    </div>
  )
}

export default DateWidget;