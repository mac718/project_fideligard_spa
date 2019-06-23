import React from 'react'

const Portfolio = () => {
  return (
    <div className='Portfolio col-8'>
      <h1>Portfolio</h1>
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

export default Portfolio