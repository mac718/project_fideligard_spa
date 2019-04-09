import * as Actions from './actions';

const initialState = {
  date: new Date(1517443200000)
}

export function fideligard (state = initialState, action) {
  switch (action.type){
    case Actions.ON_DATE_WIDGET_CHANGE:
      return {
        ...state,
        date: new Date(action.date)
      }
    default: 
      return state
  }
}