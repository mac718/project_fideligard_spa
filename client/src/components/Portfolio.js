import React from 'react'
import { calculateCurrentShareValue } from '../Helpers/calculateCurrentShareValue'
import { retrievedStocks } from '../retrievedStocks'

const Portfolio = ({transactions, dateString, historicalStockData}) => {

  let costs = transactions.map(transaction => {
    return -transaction.Cost
  })

  let reducer = (accumulator, currentValue) => parseFloat(accumulator) + parseFloat(currentValue);

  let costBasis = 0;
  let currentStockValues = 0;
  let reducedValues = 0;

  if ( costs.length > 0 ) {
    costBasis = costs.reduce(reducer)

    currentStockValues = retrievedStocks.map( symbol => {
      console.log('transactions ' + JSON.stringify(transactions))
      return calculateCurrentShareValue( symbol, transactions )
    }).filter(value => { return value != null })

    reducedValues = currentStockValues.reduce(reducer)
  }

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
            <td>${ costBasis.toFixed(2) }</td>
            <td>${ reducedValues.toFixed(2) }</td>
            <td>${ (reducedValues - costBasis).toFixed(2) }</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Portfolio