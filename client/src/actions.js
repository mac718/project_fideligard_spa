import { getNumberOfShares, getFilteredTransactions } from './Helpers/calculateCurrentShareValue'

export const GET_DATA_REQUEST = 'GET_DATA_REQUEST';
export const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS';
export const GET_DATA_FAILURE = 'GET_DATA_FAILURE';

export const ON_DATE_WIDGET_CHANGE = 'ON_DATE_WIDGET_CHANGE';
export const ON_TRADE_CLICK = 'ON_TRADE_CLICK';
export const UPDATE_COST = 'UPDATE_COST';
export const ON_VALID_INPUT ='ON_VALID_INPUT';
export const ON_INVALID_INPUT ='ON_INVALID_INPUT'
export const RESET_FORM_VALUES = 'RESET_FORM_VALUES'
export const UPDATE_CASH_AVAILABLE = 'UPDATE_CASH_AVAILABLE'
export const UPDATE_PORTFOLIO = 'UPDATE_PORTFOLIO'
export const UPDATE_TRANSACTIONS ='UPDATE_TRANSACTIONS'
export const SET_HAS_FORM_DATA = 'SET_HAS_FORM_DATA'
export const CLEAR_TRADE_FORM = 'CLEAR_TRADE_FORM'
export const INVALID_TRADE =' INVALID_TRADE'

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

    console.log('state ' + JSON.stringify(state.transactions))

    if ( state.transactions.length > 0) {
      filteredTransactions = getFilteredTransactions( state.transactions, state.date )
    }

    //console.log('filtered transactions ' + filteredTransactions)
    if (buyOrSell === '/Sell' && filteredTransactions.length > 0) {
      numberOfShares = getNumberOfShares( filteredTransactions, symbol );
      //console.log('shares ' + numberOfShares)
    } else {
      dispatch(invalidTrade())
    }

    // if ( tradeInfo.Quantity > state.portfolio.symbol.shares ) {
    //   //dispatch(error)
    // }

    // if ( tradeInfo.Cost > state.cashAvailable ) {
    //   //dispatch(error)
    // }

    // dispatch(updateCashAvailable(tradeInfo))
    // dispatch(updateTransactions(tradeInfo))
    // dispatch(updatePortfolio(tradeInfo))
    // dispatch(resetFormValues())
  }
}