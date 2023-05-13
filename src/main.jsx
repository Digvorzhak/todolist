import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { apiSlice } from './features/api/apiSlice.jsx'
import { ApiProvider } from '@reduxjs/toolkit/query/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ApiProvider api={apiSlice}>
    <App />
  </ApiProvider>
)
