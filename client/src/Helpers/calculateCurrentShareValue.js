export function calculateCurrentShareValue( symbol, transactions ) {
    let stockTransactions = transactions.filter( transaction => {
      return transaction.Symbol === symbol
    })

    if (stockTransactions.length == 0) {
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