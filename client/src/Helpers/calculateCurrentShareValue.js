export function getFilteredTransactions( transactions, date ) {
  transactions.filter(transaction => {
    let transactionDate = new Date(transaction.Date)
    console.log('transactionDate ' + transactionDate)
    console.log('date ' + date)

    return transactionDate <= date
  })
}

export function getNumberOfShares( symbol, transactions ) {
  let stockTransactions = transactions.filter( transaction => {
    return transaction.Symbol === symbol
  })

  if (stockTransactions.length === 0) {
    return 0
  }

  let transactionQuantities = stockTransactions.map( transaction => {
    return parseFloat(transaction.Quantity)
  })

  let reducer = (accumulator, currentValue) => accumulator + currentValue;

  let numberOfShares = transactionQuantities.reduce(reducer)

  return numberOfShares
}



export function calculateCurrentShareValue( symbol, transactions, date ) {
    let numberOfShares = getNumberOfShares( symbol, transactions, date )

    console.log('number FB ' + numberOfShares)

    let currentPrice = parseFloat(document.getElementById(`${symbol}-td`).innerHTML.slice(1))

    return (numberOfShares * currentPrice).toFixed(2)
  }

