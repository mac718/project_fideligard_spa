import React from 'react'

const Transactions = ({ transactions, onClick }) => {
  const transactionRows = transactions.map( (transaction, i) => {
    return (
      <tr className='transaction-row' key={ i }>
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
            <th>Date <span className='sort-arrow' onClick={ onClick }>&#x25B4;</span></th>
            <th>Symbol <span className='sort-arrow' onClick={ onClick }>&#x25B4;</span></th>
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