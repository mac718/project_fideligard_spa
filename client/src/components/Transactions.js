import React from 'react'

const Transactions = ({ transactions, handleDatesSortArrowClick, handleSymbolsSortArrowClick, transactionsDatesSortDirection, transactionsSymbolsSortDirection }) => {
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
            <th>
              Date 
              { transactionsDatesSortDirection === 'ascending' ? 
                <span className='sort-arrow' onClick={ handleDatesSortArrowClick }>&#x25B4;</span> :
                <span className='sort-arrow' onClick={ handleDatesSortArrowClick }>&#x25BE;</span>
              }
            </th>
            <th>
              Symbol 
              { transactionsSymbolsSortDirection === 'ascending' ?
                <span className='sort-arrow' onClick={ handleSymbolsSortArrowClick }>&#x25B4;</span> :
                <span className='sort-arrow' onClick={ handleSymbolsSortArrowClick }>&#x25BE;</span>
              }
            </th>
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