import reducers from '../reducers/index'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'persist-key',
  storage
}

const persistedReducers = persistReducer(persistConfig, reducers);

const store = createStore(persistedReducers, applyMiddleware(ReduxThunk))

const persistor = persistStore(store);

export default store;
export {persistor}