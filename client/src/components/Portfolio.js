import React from 'react'

const Portfolio = ({transactions, dateSting, historicalStockData}) => {
  let costs = transactions.map(transaction => {
    return transaction.Cost
  })

  let reducer = (accumulator, currentValue) => accumulator + currentValue;

  let costBasis = costs.reduce(reducer)

  return (
    <div className='Portfolio'>
      <h1>Portfolio</h1>
      <table className='Portfolio-summary table table-striped'>
        <thead>
          <tr>
            <th>Cost Basis</th>
            <th>Current Value</th>
            <th>Profit/Loss</th>
            <th>td</th>  
            <th>7d</th>
            <th>30d</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{ costBasis }</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Portfolio