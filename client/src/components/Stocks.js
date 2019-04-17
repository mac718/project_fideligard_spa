import React from 'react';

const Stocks = ({stockData, date, isFetchingHistoricalData}) => {

  const data = stockData.map(stock => {
    return stock.dataset_data.data.filter(entry => {
      let entryDate = new Date(entry[0].split('-').join(','))
      entryDate = `${entryDate.getFullYear()}-${entryDate.getDate()}-${entryDate.getMonth()}`
      let dateString = `${date.getFullYear()}-${date.getDate()}-${date.getMonth()}`
      console.log(entryDate)
      console.log(dateString)
      return entryDate == dateString
    })
  })
  console.log(data)

  const stockDivs = data.map(entry => (
    <div>{entry[0]}</div>
  ))
  return (
    <div className='Stocks col-4'>
      <h1>Stocks</h1>
      {isFetchingHistoricalData ? <p>loading...</p> : stockDivs}
    </div>
  )
}

export default Stocks;