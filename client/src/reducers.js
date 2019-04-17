import * as Actions from './actions';

const initialState = {
  date: new Date(1519689600000),
  historicalStockData: [],
  isFetchingHistoricalData: false,
  error: null
}

export function fideligard (state = initialState, action) {
  switch (action.type){
    case Actions.ON_DATE_WIDGET_CHANGE:
      return {
        ...state,
        date: new Date(action.date)
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