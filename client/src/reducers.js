import * as Actions from './actions';
import { makeDateString, makeUTCDate } from './Helpers/dateHelpers'

const initialState = {
  date: makeUTCDate(1483315200000), //new Date(1483315200000),
  dateString: '',
  historicalStockData: [],
  selectedStock: {},
  currentTradeCost: 0,
  currentTradeSymbol: '',
  currentTradePrice: 0,
  validSymbol: true,
  cashAvailable: 1000.00,
  transactions:[],
  portfolio: {},
  isFetchingHistoricalData: false,
  hasFormData: false,
  readOnly: false,
  submitDisabled: '',
  error: null
}

export function fideligard (state = initialState, action) {
  switch (action.type){
    case Actions.ON_DATE_WIDGET_CHANGE:
      console.log('dateWidget ' + action.date)
      return {
        ...state,
        date: action.date
      }
    case Actions.ON_TRADE_CLICK:
      return {
        ...state,
        selectedStock: action.selectedStock,
        currentTradeSymbol: action.selectedStock.symbol,
        dateString: makeDateString(state.date),
        readOnly: true
      }
    case Actions.UPDATE_COST:
      return {
        ...state,
        currentTradeCost: state.currentTradePrice * action.quantity
      }
    case Actions.ON_VALID_INPUT:
      return {
        ...state,
        validSymbol: true,
        currentTradeSymbol: action.tradeInfo.symbol,
        currentTradePrice: action.tradeInfo.price
      }
    case Actions.ON_INVALID_INPUT:
      return {
        ...state,
        validSymbol: false,
        currentTradeSymbol: ''
      }
    case Actions.RESET_FORM_VALUES: 
      return {
        ...state,
        readOnly: false,
        selectedStock: {...state.selectedStock, symbol: ''},
        currentTradeSymbol: '',
        currentTradePrice: '',
        currentTradeCost: 0 
      }
    case Actions.UPDATE_CASH_AVAILABLE:
      return {
        ...state,
        cashAvailable: state.cashAvailable + parseFloat(action.trade.Cost)
      }
    case Actions.UPDATE_TRANSACTIONS:
      return {
        ...state,
        transactions: [...state.transactions, action.trade]
      }
    case Actions.SET_HAS_FORM_DATA: 
      return {
        ...state,
        hasFormData: true
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