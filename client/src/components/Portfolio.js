import React from 'react'
import { calculateCurrentShareValue } from '../Helpers/calculateCurrentShareValue'
import { retrievedStocks } from '../retrievedStocks'

const Portfolio = ({transactions, dateSting, historicalStockData}) => {
  let costs = transactions.map(transaction => {
    return -transaction.Cost
  })

  let reducer = (accumulator, currentValue) => accumulator + currentValue;

  let costBasis = costs.reduce(reducer)

  let currentStockValues = retrievedStocks.map( symbol => {
    console.log('transactions ' + JSON.stringify(transactions))
    return calculateCurrentShareValue( symbol, transactions )
  })

  console.log( 'currentStockValues ' + currentStockValues)
  
  

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
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Portfolio