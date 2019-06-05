import * as Actions from './actions';

const initialState = {
  date: new Date(1483315200000),
  historicalStockData: [],
  selectedStock: {},
  currentTradeCost: 0,
  isFetchingHistoricalData: false,
  error: null
}

export function fideligard (state = initialState, action) {
  switch (action.type){
    case Actions.ON_DATE_WIDGET_CHANGE:
      console.log(action.date.toDateString())
      return {
        ...state,
        date: action.date
      }
    case Actions.ON_TRADE_CLICK:
      return {
        ...state,
        selectedStock: action.selectedStock
      }
    case Actions.UPDATE_COST:
      return {
        ...state,
        currentTradeCost: state.selectedStock.stockPrice * action.quantity
      }
    case Actions.GET_DATA_REQUEST:
      return {
        ...state,
        isFetchingHistoricalData: true,
      }
    case Actions.GET_DATA_SUCCESS:
      return {
        ...state,
        historicalStockData: action.stockData,
        isFetchingHistoricalData: false,
      }
    case Actions.GET_DATA_FAILURE:
      return {
        ...state,
        isFetchingHistoricalData: false,
        error: action.error,
      }
    default: 
      return state
  }
}