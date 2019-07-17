import React from 'react'
import { 
  calculateCurrentShareValue, 
  getFilteredTransactions 
} from '../Helpers/calculateCurrentShareValue'
import { makeDateString } from '../Helpers/dateHelpers'
import { retrievedStocks } from '../retrievedStocks'

const Portfolio = ( { transactions, dateString, historicalStockData, date, onClick } ) => {

  let filteredTransactions = getFilteredTransactions( transactions, date )

  //console.log('filteredTransactions ' + JSON.stringify(filteredTransactions))

  let costs = filteredTransactions.map(transaction => {
    return -transaction.Cost
  })

  let reducer = (accumulator, currentValue) => parseFloat(accumulator) + parseFloat(currentValue);

  let allStocksCostBasis = 0;
  let currentStockValues = 0;
  let reducedValues = 0;
  let stockSummaries;

  if ( costs.length > 0 ) {
    allStocksCostBasis = costs.reduce(reducer)

    currentStockValues = retrievedStocks.map( (symbol, i) => {
      //console.log('transactions ' + JSON.stringify(transactions))
      return calculateCurrentShareValue( symbol, filteredTransactions, date, historicalStockData, i )
    })

    let individualStocksCostBasis = retrievedStocks.map( symbol => {
      let transactions = filteredTransactions.filter( transaction => { return transaction.Symbol === symbol})

      let stockCosts = transactions.map( transaction => { return transaction.Cost })

      if ( stockCosts.length > 0 ) {
        let individualStockCostBasis = stockCosts.reduce( reducer )
        return { symbol: individualStockCostBasis }
      } else {
        return { symbol: 0 }
      }
    })

    let stockQuantities = retrievedStocks.map( symbol => {
      let transactions = filteredTransactions.filter( transaction => { return transaction.Symbol === symbol})

      let stockQuantities = transactions.map( transaction => { return transaction.Quantity })

      return stockQuantities
    })

    stockSummaries = retrievedStocks.map( ( symbol, i ) => {
      let dateString = makeDateString(date)
      //console.log(historicalStockData[i])
      let currentPrice = historicalStockData[i].dataset_data.data.filter( entry => { return entry[0] === dateString })[0][1]
      //console.log(costBasis.symbol)
      if ( stockQuantities[i] != 0){
        return (
          <tr key={ i } >
            <td>{ symbol }</td>
            <td>{ stockQuantities[i] }</td>
            <td id={ `costBasis-${symbol}` }>{ -individualStocksCostBasis[i].symbol }</td>
            <td id={ `currentValue-${symbol}` }>{ currentStockValues[i] }</td>
            <td>{ (currentStockValues[i] - (-individualStocksCostBasis[i].symbol)).toFixed(2) }</td>
            <td>{ currentPrice }</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        )
      } else {
        return 0
      }
    })

    stockSummaries = stockSummaries.filter( summary => { return summary != '' })

    console.log('individualStocksCostBasis ' + individualStocksCostBasis)

    reducedValues = currentStockValues.filter(value => { return value != null }).reduce(reducer)
    
    console.log('reducedValues ' + reducedValues)

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
            <td>${ allStocksCostBasis.toFixed(2) }</td>
            <td>${ parseFloat(reducedValues).toFixed(2) }</td>
            <td>${ (reducedValues - allStocksCostBasis).toFixed(2) }</td>
          </tr>
        </tbody>
      </table>
      <table className='Portfolio-breakdown table table-striped'>
        <thead>
          <tr>
            <th>Symbol <span className='sort-arrow' onClick={ onClick }>&#x25B4;</span></th>
            <th>Quantity</th>
            <th>Cost Basis</th>
            <th>Current value</th>
            <th>Profit/Loss</th>
            <th>Current Price</th>
            <th>1d</th>
            <th>7d</th>
            <th>30d</th>
          </tr>
        </thead>
        <tbody>
          { stockSummaries }
        </tbody>
      </table>
    </div>
  )
}

export default Portfolio