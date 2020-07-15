import { configureStore, createSlice } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { combineReducers } from 'redux'

const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: (state) => state + 1
  }
})

const reducers = combineReducers({
  counter: counterSlice.reducer
})

export const store = configureStore({
  reducer: reducers,
  devTools: process.env.NODE_ENV === 'development'
})

export type AppState = ReturnType<typeof store.getState>
export type AppDispatchType = typeof store.dispatch

export const useStoreDispatch: () => AppDispatchType = () => useDispatch<AppDispatchType>()
export const useStoreSelector: TypedUseSelectorHook<AppState> = useSelector
