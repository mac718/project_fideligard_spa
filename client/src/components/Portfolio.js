import React from 'react'
import { 
  calculateCurrentShareValue, 
  getFilteredTransactions 
} from '../Helpers/PortfolioHelpers'
import { makeDateString } from '../Helpers/dateHelpers'
import { retrievedStocks } from '../retrievedStocks'
import { Link } from 'react-router-dom'

const Portfolio = ( { transactions, 
                      dateString, 
                      historicalStockData, 
                      date, 
                      handleSortArrowClick, 
                      handleTradeClick } ) => {

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

      let stockQuantities = transactions.map( transaction => { return parseInt(transaction.Quantity) })
    
      let reducedQuantities;

      if(stockQuantities.length > 0){
        reducedQuantities = stockQuantities.reduce(reducer)
      } else {
        reducedQuantities = null
      }
      
      return reducedQuantities
    })

    stockSummaries = retrievedStocks.map( ( symbol, i ) => {
      let dateString = makeDateString(date)
      //console.log(historicalStockData[i])
      let currentPrice = historicalStockData[i].dataset_data.data.filter( entry => { return entry[0] === dateString })[0][1]
      //console.log(costBasis.symbol)
      if ( stockQuantities[i] != null){
        return (
          <tr key={ i } >
            <td id={`${symbol}-Portfolio`}>{ symbol }</td>
            <td>{ stockQuantities[i] }</td>
            <td id={ `costBasis-${symbol}` }>${ -individualStocksCostBasis[i].symbol.toFixed(2) }</td>
            <td id={ `currentValue-${symbol}` }>${ currentStockValues[i] }</td>
            <td>${ (currentStockValues[i] - (-individualStocksCostBasis[i].symbol)).toFixed(2) }</td>
            <td>${ currentPrice.toFixed(2) }</td>
            <td></td>
            <td></td>
            <td></td>
            <td><Link to='/Trade' onClick={ handleTradeClick(symbol) }>trade</Link></td>
          </tr>
        )
      }
    })

    stockSummaries = stockSummaries.filter( summary => { return summary !== '' })

    console.log('individualStocksCostBasis ' + individualStocksCostBasis)

    reducedValues = currentStockValues.filter(value => { return value !== null }).reduce(reducer)
    
    console.log('reducedValues ' + reducedValues)

  }

  console.log( 'currentStockValues ' + currentStockValues)


  
  return (
    <div className='Portfolio table-responsive'>
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
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <table className='Portfolio-breakdown table table-striped'>
        <thead>
          <tr>
            <th>Symbol <span className='sort-arrow' onClick={ handleSortArrowClick }>&#x25B4;</span></th>
            <th>Quantity</th>
            <th>Cost Basis</th>
            <th>Current value</th>
            <th>Profit/Loss</th>
            <th>Current Price</th>
            <th>1d</th>
            <th>7d</th>
            <th>30d</th>
            <th>Trade?</th>
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