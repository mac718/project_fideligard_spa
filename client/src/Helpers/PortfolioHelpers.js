import { makeDateString, makeUTCDate } from '../Helpers/dateHelpers'

export function getFilteredTransactions( transactions, date ) {
  let fliteredTransactions = transactions.filter(transaction => {
    console.log('transaction_date ' + transaction.Date)
    console.log('parsed ' + Date.parse(transaction.Date))
    let transactionDate = new Date(Date.parse(transaction.Date))  //not cooperating
    transactionDate = makeUTCDate(transactionDate)
    console.log('transactionDate ' + transactionDate)
    console.log('date ' + date)
    console.log('bool ' + !(transactionDate > date))

    return !(transactionDate > date)
  })
  return fliteredTransactions
}

export function getNumberOfShares( transactions, symbol ) {
  let stockTransactions = transactions.filter( transaction => {
    return transaction.Symbol === symbol
  })

  if (stockTransactions.length === 0) {
    return 0
  }

  let transactionQuantities = stockTransactions.map( transaction => {
    return parseInt(transaction.Quantity)
  })

  let reducer = (accumulator, currentValue) => accumulator + currentValue;

  let numberOfShares = transactionQuantities.reduce(reducer)

  return numberOfShares
}



export function calculateCurrentShareValue( symbol, transactions, date, historicalStockData, index ) {
  let numberOfShares = getNumberOfShares( transactions, symbol )

  let dateString = makeDateString(date)

  //let currentPrice = parseFloat(document.getElementById(`${symbol}-price`).innerHTML.slice(1))
  let currentPrice = historicalStockData[index].dataset_data.data.filter( entry => { return entry[0] === dateString })[0][1]


  return (numberOfShares * currentPrice).toFixed(2)
}

export function getCostBasis( symbol, transactions ) {
  let costs = transactions.map( transaction => {
    return transaction.Cost
  })

 let reducer = (accumulator, currentValue) => accumulator + currentValue;

 let costBasis = costs.reduce( reducer )

 return costBasis
}

