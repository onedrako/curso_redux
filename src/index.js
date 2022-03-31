import React from 'react'
import ReactDOM from 'react-dom'
import App from './containers/App'

import thunk from 'redux-thunk'

import { createStore, compose, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import './index.css'

import pokemonReducer from './redux/reducers/pokemonReducer'
import { logActions, reportError } from './redux/middlewares'

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const composedEnhancers = composeAlt(applyMiddleware(thunk, logActions, reportError))

const store = createStore(pokemonReducer, composedEnhancers)

ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>, document.getElementById('root'))
