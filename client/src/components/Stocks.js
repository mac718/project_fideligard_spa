import React from 'react';
import {cleanUp} from '../Helpers/ApiCleanup';

const Stocks = ({stockData, date, isFetchingHistoricalData}) => {

  const data = stockData.map(stock => {
    
    let cleanData = cleanUp(stock.dataset_data.data)

    console.log(cleanData)
    return stock.dataset_data.data.filter(entry => {
      let entryDate = new Date(entry[0].split('-').join(','))
      entryDate = `${entryDate.getFullYear()}-${entryDate.getDate()}-${entryDate.getMonth() + 1}`
      let dateString = `${date.getFullYear()}-${date.getDate()}-${date.getMonth() + 1}`
      return entryDate == dateString
    })
  })

  const stockDivs = data.map(entry => {
    if (entry[0]) { 
      return <tr>
        <td></td>
        <td>{'$' + entry[0][1].toFixed(2)}</td>
        <td></td>
        <td></td>
        <td></td>
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