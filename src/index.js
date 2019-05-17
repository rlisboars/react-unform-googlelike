import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import './config/ReactotronConfig'

import store from './store'
import App from './App'

import '@fortawesome/fontawesome-free/css/all.css'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
