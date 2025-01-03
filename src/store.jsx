import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import favouriteSlice from './redux/favouriteSlice'

const persistConfig = {
  key: 'favouriteMovies',
  storage,
}

const persistedReducer = persistReducer(persistConfig, favouriteSlice)

const store = configureStore({
  reducer: persistedReducer
  
})

export const persistor = persistStore(store)

export default store
