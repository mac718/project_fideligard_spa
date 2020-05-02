import React from 'react'
import {
  calculateCurrentShareValue,
  getFilteredTransactions,
} from '../Helpers/PortfolioHelpers'
import { makeDateString } from '../Helpers/dateHelpers'
import { retrievedStocks } from '../retrievedStocks'
import { Link } from 'react-router-dom'

const Portfolio = ({
  transactions,
  dateString,
  historicalStockData,
  date,
  handleSortArrowClick,
  handleTradeClick,
}) => {
  let filteredTransactions = getFilteredTransactions(transactions, date)

  let costs = filteredTransactions.map((transaction) => {
    return -transaction.Cost
  })

  let reducer = (accumulator, currentValue) =>
    parseFloat(accumulator) + parseFloat(currentValue)

  let allStocksCostBasis = 0
  let currentStockValues = 0
  let reducedValues = 0
  let stockSummaries

  if (costs.length > 0) {
    allStocksCostBasis = costs.reduce(reducer)

    currentStockValues = retrievedStocks.map((symbol, i) => {
      return calculateCurrentShareValue(
        symbol,
        filteredTransactions,
        date,
        historicalStockData,
        i,
      )
    })

    let individualStocksCostBasis = retrievedStocks.map((symbol) => {
      let transactions = filteredTransactions.filter((transaction) => {
        return transaction.Symbol === symbol
      })

      let stockCosts = transactions.map((transaction) => {
        return transaction.Cost
      })

      if (stockCosts.length > 0) {
        let individualStockCostBasis = stockCosts.reduce(reducer)
        return { symbol: individualStockCostBasis }
      } else {
        return { symbol: 0 }
      }
    })

    let stockQuantities = retrievedStocks.map((symbol) => {
      let transactions = filteredTransactions.filter((transaction) => {
        return transaction.Symbol === symbol
      })

      let stockQuantities = transactions.map((transaction) => {
        return parseInt(transaction.Quantity)
      })

      let reducedQuantities

      //what happens with empty list?
      if (stockQuantities.length > 0) {
        reducedQuantities = stockQuantities.reduce(reducer)
      } else {
        reducedQuantities = null
      }

      return reducedQuantities
    })

    stockSummaries = retrievedStocks.map((symbol, i) => {
      let dateString = makeDateString(date)

      let currentPrice = historicalStockData[i].dataset_data.data.filter(
        (entry) => {
          return entry[0] === dateString
        },
      )[0][1]

      if (stockQuantities[i] != null) {
        return (
          <tr key={symbol}>
            <td id={`${symbol}-Portfolio`}>{symbol}</td>
            <td>{stockQuantities[i]}</td>
            <td id={`costBasis-${symbol}`}>
              ${-individualStocksCostBasis[i].symbol.toFixed(2)}
            </td>
            <td id={`currentValue-${symbol}`}>${currentStockValues[i]}</td>
            <td>
              $
              {(
                currentStockValues[i] - -individualStocksCostBasis[i].symbol
              ).toFixed(2)}
            </td>
            <td>${currentPrice.toFixed(2)}</td>
            <td>
              <Link to="/Trade" onClick={handleTradeClick(symbol)}>
                trade
              </Link>
            </td>
          </tr>
        )
      } else {
        return null
      }
    })

    stockSummaries = stockSummaries.filter((summary) => {
      return summary !== ''
    })

    reducedValues = currentStockValues
      .filter((value) => {
        return value !== null
      })
      .reduce(reducer)
  }

  return (
    <div className="Portfolio table-responsive">
      <h1>Portfolio</h1>
      <table className="Portfolio-summary table table-striped">
        <thead>
          <tr>
            <th>Cost Basis</th>
            <th>Current Value</th>
            <th>Profit/Loss</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>${allStocksCostBasis.toFixed(2)}</td>
            <td>${parseFloat(reducedValues).toFixed(2)}</td>
            <td>${(reducedValues - allStocksCostBasis).toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
      <table className="Portfolio-breakdown table table-striped">
        <thead>
          <tr>
            <th>
              Symbol{' '}
              <span className="sort-arrow" onClick={handleSortArrowClick}>
                &#x25B4;
              </span>
            </th>
            <th>Quantity</th>
            <th>Cost Basis</th>
            <th>Current value</th>
            <th>Profit/Loss</th>
            <th>Current Price</th>
            <th>Trade?</th>
          </tr>
        </thead>
        <tbody>{stockSummaries}</tbody>
      </table>
    </div>
  )
}

export default Portfolio
