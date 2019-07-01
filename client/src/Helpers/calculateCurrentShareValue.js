export function getFilteredTransactions( transactions, date ) {
    transactions.filter(transaction => {
      let transactionDate = new Date(transaction.Date)
      console.log('transactionDate ' + transactionDate)
      console.log('date ' + date)

      return transactionDate <= date
    })
  }

export function calculateCurrentShareValue( symbol, transactions, date ) {
    let stockTransactions = transactions.filter( transaction => {
      return transaction.Symbol === symbol
    })

    if (stockTransactions.length === 0) {
      return
    }

    let transactionQuantities = stockTransactions.map( transaction => {
      return parseFloat(transaction.Quantity)
    })

    let reducer = (accumulator, currentValue) => accumulator + currentValue;

    let numberOfShares = transactionQuantities.reduce(reducer)

    console.log('number FB ' + numberOfShares)

    let currentPrice = parseFloat(document.getElementById(`${symbol}-td`).innerHTML.slice(1))

    return (numberOfShares * currentPrice).toFixed(2)
  }

