import React from 'react';
import {cleanUp} from '../Helpers/ApiCleanup';

const Stocks = ({stockData, date, isFetchingHistoricalData}) => {

  //let cleanData;

  const data = stockData.map(stock => {
    
    let currentDateIndex = 0;

    let currentDateEntry = stock.filter((entry, i) => {
      let entryDate = new Date(entry[0].split('-').join(','))
      entryDate = `${entryDate.getFullYear()}-${entryDate.getDate()}-${entryDate.getMonth() + 1}`
      let dateString = `${date.getFullYear()}-${date.getDate()}-${date.getMonth() + 1}`
      currentDateIndex = i;
      return entryDate == dateString
    }) //return index insteaed of full entry

    //currentDateEntry = stock[currentDateIndex]
    console.log('currentDateIndex = ' + currentDateIndex)


    let lastWeekEntry = stock[currentDateIndex - 7];

    let lastMonthEntry = stock[currentDateIndex - 30];

    console.log([currentDateEntry, lastWeekEntry[1], lastMonthEntry[1]])

    return [currentDateEntry[0][1], lastWeekEntry[1], lastMonthEntry[1]]
  })

  const stockDivs = data.map((entry, i) => {

    if (entry[0]) { 
      return <tr>
        <td></td>
        <td>{'$' + entry[0].toFixed(2)}</td>
        <td>{'$' + entry[1].toFixed(2)}</td>
        <td>{'$' + entry[2].toFixed(2)}</td>
        <td>trade</td>
      </tr>
    } else {
      return <tr>
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
          {isFetchingHistoricalData ? <tr><td>loading...</td></tr> : stockDivs}
        </tbody>
      </table>
    </div>
  )
}

export default Stocks;