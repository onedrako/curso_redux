import React from 'react'
import ReactDOM from 'react-dom'
import App from './containers/App'
import { createStore, compose, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import './index.css'

import pokemonReducer from './redux/reducers/pokemonReducer'
import { logActions } from './redux/middlewares'

const composedEnhacers = compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(logActions))

const store = createStore(pokemonReducer, composedEnhacers)

ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>, document.getElementById('root'))
