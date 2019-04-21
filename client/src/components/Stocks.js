import React from 'react';

const Stocks = ({stockData, date, isFetchingHistoricalData}) => {

  const data = stockData.map(stock => {
    return stock.dataset_data.data.filter(entry => {
      let entryDate = new Date(entry[0].split('-').join(','))
      entryDate = `${entryDate.getFullYear()}-${entryDate.getDate()}-${entryDate.getMonth()}`
      let dateString = `${date.getFullYear()}-${date.getDate()}-${date.getMonth() + 1}`
      console.log(entryDate)
      console.log(dateString)
      return entryDate == dateString
    })
  })
  console.log(data)

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
        <tr>
          <th>Symbol</th>
          <th>td</th>
          <th>7 day</th>
          <th>30 day</th>
          <th>Trade</th>
        </tr>
        {isFetchingHistoricalData ? <p>loading...</p> : stockDivs}
      </table>
    </div>
  )
}

export default Stocks;