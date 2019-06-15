import React from 'react';
import { retrievedStocks } from '../retrievedStocks'
import { getCurrentDateEntryIndex } from '../Helpers/dateHelpers';
import { Link } from 'react-router-dom'

const Stocks = ( { stockData, date, isFetchingHistoricalData, onClick } ) => {

  const data = stockData.map( stock => {
    
    let currentDateEntryIndex = getCurrentDateEntryIndex(stock, date);

    let currentDateEntry = stock[currentDateEntryIndex]

    let lastWeekEntry = stock[currentDateEntryIndex - 7];

    let lastMonthEntry = stock[currentDateEntryIndex - 30];

    return [currentDateEntry[1], lastWeekEntry[1], lastMonthEntry[1]]
  })

  const stockDivs = data.map(( entry, i ) => {

    if ( entry[0] ) { 
      return <tr key={i}>
        <td>{ retrievedStocks[i] }</td>
        <td>{ '$' + entry[0].toFixed(2) }</td>
        <td>{ '$' + entry[1].toFixed(2) }</td>
        <td>{ '$' + entry[2].toFixed(2) }</td>
        <td><Link to='/Trade' onClick={ onClick }>trade</Link></td>
      </tr>
    } else {
      return <tr key={ i }>
        <td></td>
        <td>N/A</td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    }
  })
  return (
    <div className='Stocks col-4'>
      <h1>Stocks</h1>
      <table className='table table-striped'>
        <thead>
          <tr>
            <th>Symbol</th>
            <th>td</th>
            <th>7 day</th>
            <th>30 day</th>
            <th>Trade</th>
          </tr>
        </thead>
        <tbody>
          { isFetchingHistoricalData ? <tr><td>loading...</td></tr> : stockDivs }
        </tbody>
      </table>
    </div>
  )
}

export default Stocks;