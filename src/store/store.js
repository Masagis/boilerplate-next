import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducers from './reducers/index'

const initState = {}

export const initStore = (initialState = initState) =>
  createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(thunk)),
  )
