import React from 'react';
import { 
  calculateCurrentShareValue, 
  getFilteredTransactions 
} from '../Helpers/calculateCurrentShareValue'
import { retrievedStocks } from '../retrievedStocks'

const PortfolioSummary = ( { transactions, date } ) => {
  return (
    <table className='PortfolioSummary table table-striped'>
      <thead>
        <tr>
          <th>Cost Basis</th>
          <th>Current Value</th>
          <th>Profit/Loss</th>
          <th>td</th>  
          <th>7d</th>
          <th>30d</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>${ allStocksCostBasis.toFixed(2) }</td>
          <td>${ parseFloat(reducedValues).toFixed(2) }</td>
          <td>${ (reducedValues - allStocksCostBasis).toFixed(2) }</td>
        </tr>
      </tbody>
    </table>
  )
}

export default PortfolioSummary;