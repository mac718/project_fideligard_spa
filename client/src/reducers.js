import * as Actions from './actions';
import { makeDateString, makeUTCDate } from './Helpers/dateHelpers'
import { JAN_1_2017 } from './dateMillisecondValues'

const initialState = {
  date: makeUTCDate(JAN_1_2017), //1483315200000
  dateString: '',
  historicalStockData: [],
  selectedStock: {},
  currentTradeCost: 0,
  currentTradeSymbol: '',
  currentTradeQuantity: 0,
  currentTradePrice: 0,
  validSymbol: true,
  cashAvailable: 1000.00,
  transactions:[],
  portfolio: {},
  isFetchingHistoricalData: false,
  hasFormData: false,
  readOnly: false,
  submitDisabled: true,
  transactionsDatesSortDirection: 'ascending',
  transactionsSymbolsSortDirection: 'ascending',
  filterInput: '',
  stocksFilterInput: '',
  transactionsFilterInput: '',
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
    case Actions.UPDATE_QUANTITY:
      return {
        ...state,
        currentTradeQuantity: action.quantity
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
        currentTradeCost: 0,
        currentTradeQuantity: '' 
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
    case Actions.INVALID_TRADE:
      return {
        ...state,
        submitDisabled: true,
      }
    case Actions.VALID_TRADE:
      return {
        ...state,
        submitDisabled: false,
      }
    case Actions.CHANGE_TRANSACTIONS_DATES_SORT_DIRECTION:
      return {
        ...state,
        transactionsDatesSortDirection: action.sortDirection,
      }
    case Actions.CHANGE_TRANSACTIONS_SYMBOLS_SORT_DIRECTION:
      return {
        ...state,
        transactionsSymbolsSortDirection: action.sortDirection,
      }
    case Actions.SORT_TRANSACTIONS_DATES:
      return {
        ...state,
        transactions: action.transactions
      }
    case Actions.SET_FILTER_INPUT:
      return {
        ...state,
        filterInput: action.input
      }
    case Actions.SET_TRANSACTIONS_FILTER_INPUT:
      return {
        ...state,
        transactionsFilterInput: action.input
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