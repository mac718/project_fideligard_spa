import React from 'react'

const Transactions = ({transactions}) => {
  console.log('transactions ' + transactions)
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
          <tr>
            <td>{JSON.stringify(transactions)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Transactions