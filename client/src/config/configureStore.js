import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
//import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'

import { fideligard } from '../reducers'

const persistConfig = {
  key: 'root',
  storage,
  //stateReconciler: autoMergeLevel2,
  blacklist: ['date'],
}

const persistedReducer = persistReducer(persistConfig, fideligard)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export let store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk)),
)
export let persistor = persistStore(store)
