import React from 'react'
import { JAN_1_2017, DEC_31_2017, dayLength } from '../dateMillisecondValues'

const DateWidget = ({ onChange, date }) => {
  console.log(date)
  return (
    <div id="DateWidget" className="col-sm">
      <span id="start-date">1/1/2017</span>
      <span id="end-date">12/31/2017</span>
      <div id="DateWidget-container">
        <input
          name="slider"
          id="slider"
          type="range"
          min={JAN_1_2017}
          max={DEC_31_2017}
          step={dayLength}
          onChange={onChange}
        />
      </div>
      <div>{date.toDateString()}</div>
    </div>
  )
}

export default DateWidget
