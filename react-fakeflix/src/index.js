import React from 'react'
import ReactDOM from 'react-dom'
import { ContextProvider } from './context'
import App from './App'

const rootElement = document.getElementById('root')
ReactDOM.render(
  <ContextProvider>
    <App />
  </ContextProvider>,
  rootElement
)
