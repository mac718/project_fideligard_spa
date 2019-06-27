import React from 'react'

const Transactions = ({transactions}) => {
  const transactionRows = transactions.map(transaction => {
    return (
      <tr className='transaction-row'>
        <td>{ transaction.Date }</td>
        <td>{ transaction.Symbol }</td>
        <td>{ transaction.TradeDropdown.slice(1) }</td>
        <td>{ transaction.Quantity }</td>
        <td>{ transaction.Price }</td>
      </tr>
    )
  })
  return (
    <div className='Transactions col-8'>
      <h1>Transactions</h1>
      <table className='table table-striped'>
        <thead>
          <tr>
            <th>Date</th>
            <th>Symbol</th>
            <th>Type</th>
            <th>Quantity</th>  
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          { transactionRows }
        </tbody>
      </table>
    </div>
  )
}

export default Transactions