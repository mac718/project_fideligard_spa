export const GET_DATA_REQUEST = 'GET_DATA_REQUEST';
export const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS';
export const GET_DATA_FAILURE = 'GET_DATA_FAILURE';

export const ON_DATE_WIDGET_CHANGE = 'ON_DATE_WIDGET_CHANGE';
export const ON_TRADE_CLICK = 'ON_TRADE_CLICK';
export const UPDATE_COST = 'UPDATE_COST';
export const ON_USER_INPUT ='ON_USER_INPUT';

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

export function onUserInput(symbol) {
  return {
    type: ON_USER_INPUT,
    symbol
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