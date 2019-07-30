import { getNumberOfShares, getFilteredTransactions } from './Helpers/calculateCurrentShareValue'

export const GET_DATA_REQUEST = 'GET_DATA_REQUEST';
export const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS';
export const GET_DATA_FAILURE = 'GET_DATA_FAILURE';

export const ON_DATE_WIDGET_CHANGE = 'ON_DATE_WIDGET_CHANGE';
export const ON_TRADE_CLICK = 'ON_TRADE_CLICK';
export const UPDATE_COST = 'UPDATE_COST';
export const UPDATE_QUANTITY = 'UPDATE_QUANTITY'
export const ON_VALID_INPUT ='ON_VALID_INPUT';
export const ON_INVALID_INPUT ='ON_INVALID_INPUT'
export const RESET_FORM_VALUES = 'RESET_FORM_VALUES'
export const UPDATE_CASH_AVAILABLE = 'UPDATE_CASH_AVAILABLE'
export const UPDATE_PORTFOLIO = 'UPDATE_PORTFOLIO'
export const UPDATE_TRANSACTIONS ='UPDATE_TRANSACTIONS'
export const SET_HAS_FORM_DATA = 'SET_HAS_FORM_DATA'
export const CLEAR_TRADE_FORM = 'CLEAR_TRADE_FORM'
export const INVALID_TRADE =' INVALID_TRADE'
export const VALID_TRADE = 'VALID_TRADE'
export const CHANGE_TRANSACTIONS_DATES_SORT_DIRECTION = 'CHANGE_TRANSACTIONS_DATES_SORT_DIRECTION'
export const CHANGE_TRANSACTIONS_SYMBOLS_SORT_DIRECTION = 'CHANGE_TRANSACTIONS_SYMBOLS_SORT_DIRECTION'
export const SORT_TRANSACTIONS_DATES = 'SORT_TRANSACTIONS_DATES'
export const SET_FILTER_INPUT = 'SET_FILTER_INPUT'
export const SET_TRANSACTIONS_FILTER_INPUT = 'SET_TRANSACTIONS_FILTER_INPUT'

export function getDataRequest() {
  return {
    type: GET_DATA_REQUEST,
  }
}

export function getDataSuccess(stockData) {
  return {
    type: GET_DATA_SUCCESS,
    stockData
  }
}

export function getDataFailure(error) {
  return {
    type: GET_DATA_FAILURE,
    error
  }
}

export function onDateWidgetChange(date) {
  return {
    type: ON_DATE_WIDGET_CHANGE,
    date
  }
}

export function onTradeClick(selectedStock) {
  return {
    type: ON_TRADE_CLICK,
    selectedStock
  }
}

export function updateQuantity(quantity) {
  return {
    type: UPDATE_QUANTITY,
    quantity
  }
}

export function updateCost(quantity) {
  return {
    type: UPDATE_COST,
    quantity
  }
}

export function onValidInput(tradeInfo) {
  return {
    type: ON_VALID_INPUT,
    tradeInfo
  }
} 

export function onInvalidInput() {
  return {
    type: ON_INVALID_INPUT,
  }
} 

export function resetFormValues() {
  return{
    type: RESET_FORM_VALUES
  }
}

export function updateCashAvailable(trade) {
  return {
    type: UPDATE_CASH_AVAILABLE,
    trade
  }
}

export function updatePortfolio(trade) {
  return {
    type: UPDATE_PORTFOLIO,
    trade
  }
}

export function updateTransactions(trade) {
  return {
    type: UPDATE_TRANSACTIONS,
    trade
  }
}

export function setHasFormData() {
  return {
    type: SET_HAS_FORM_DATA,
  }
}

export function invalidTrade() {
  return {
    type: INVALID_TRADE,
  }
}

export function validTrade() {
  return {
    type: VALID_TRADE,
  }
}

export function changeTransactionsDatesSortDirection( sortDirection ) {
  return {
    type: CHANGE_TRANSACTIONS_DATES_SORT_DIRECTION,
    sortDirection,
  }
}

export function changeTransactionsSymbolsSortDirection( sortDirection ) {
  return {
    type: CHANGE_TRANSACTIONS_SYMBOLS_SORT_DIRECTION,
    sortDirection,
  }
}

export function sortTransactionsDates( transactions ) {
  return {
    type: SORT_TRANSACTIONS_DATES,
    transactions
  }
}

export function setFilterInput( input ) {
  return {
    type: SET_FILTER_INPUT,
    input
  }
}

export function setTransactionsFilterInput( input ) {
  return {
    type: SET_TRANSACTIONS_FILTER_INPUT,
    input
  }
}

export function getHistoricalStockData() {
  return dispatch => {
    dispatch(getDataRequest())

    fetch('/api/historical')
      .then(response => {
        if (!response.ok) {
          throw new Error (`${response.status} ${response.statusText}`)
        }

        return response.json()
      })
      .then(json => {
        dispatch(getDataSuccess(json))
      })
      .catch(error => {
        dispatch(getDataFailure(error))
      })
  }
}

export function tradeValidations(tradeInfo) {
  return (dispatch, getState) => {
    let state = getState();
    let symbol = tradeInfo.Symbol
    let buyOrSell = tradeInfo.TradeDropdown
    let filteredTransactions = []
    let numberOfShares;

    //console.log('state ' + JSON.stringify(state.transactions))
    console.log('buyOrSell ' + buyOrSell)

    if ( state.transactions.length > 0) {
      filteredTransactions = getFilteredTransactions( state.transactions, state.date )
    }

    //console.log('filtered transactions ' + filteredTransactions)
    if (buyOrSell === '/Sell') {
      if ( tradeInfo.Quantity === '' || tradeInfo.Quantity <= 0 ) {
        dispatch( invalidTrade() )
      } else if ( filteredTransactions.length > 0 ) {  
        numberOfShares = getNumberOfShares( filteredTransactions, symbol );
        if ( tradeInfo.Quantity > numberOfShares) {
          dispatch( invalidTrade() )
        } else {
          dispatch( validTrade() )
        }
      } else {
        dispatch( invalidTrade() )
      }
    } else if (buyOrSell === '/Buy') {
      if ( tradeInfo.Quantity === '' || tradeInfo.Quantity <= 0 ) {
        dispatch( invalidTrade() )
      } else if ( state.cashAvailable >= state.currentTradeCost ) {
        console.log('Cost & ' + tradeInfo.Quantity)
        dispatch( validTrade() )
      }  else {
        dispatch( invalidTrade() )
      }
    }
  }
}

export function handleTransactionsDatesSort() {
  return (dispatch, getState) => {
    let state = getState()
    let transactions = state.transactions
    let sortDirection = state.transactionsDatesSortDirection
    let sortedTransactions;

    if ( sortDirection === 'ascending' ) {
      sortedTransactions = transactions.sort( (a, b) => {
        return new Date(a.Date) - new Date(b.Date)
      } )
    } else {
      sortedTransactions = transactions.sort( (a, b) => {
        return new Date(b.Date) - new Date(a.Date)
      } )
    }

    sortDirection === 'ascending' ? sortDirection = 'descending' : sortDirection = 'ascending'

    console.log(sortedTransactions)
    Promise.resolve(dispatch(sortTransactionsDates( sortedTransactions )))
    .then(dispatch(changeTransactionsDatesSortDirection( sortDirection )))
  }
}

export function handleTransactionsSymbolsSort() {
  return (dispatch, getState) => {
    let state = getState()
    let transactions = state.transactions
    let sortDirection = state.transactionsSymbolsSortDirection
    let sortedTransactions;


    if ( sortDirection === 'ascending' ) {
      sortedTransactions = transactions.sort( (a, b) => {
        return a.Symbol > b.Symbol ? 1 : -1
      } )
    } else {
      sortedTransactions = transactions.sort( (a, b) => {
        return a.Symbol < b.Symbol ? 1 : -1
      } )
    }

    sortDirection === 'ascending' ? sortDirection = 'descending' : sortDirection = 'ascending'

    console.log(sortedTransactions)
    Promise.resolve( dispatch( sortTransactionsDates( sortedTransactions ) ) )
    .then( dispatch( changeTransactionsSymbolsSortDirection( sortDirection ) ) )
  }
}