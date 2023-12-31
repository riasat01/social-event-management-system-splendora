import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import MainRoute from './routes/main-route/MainRoute.jsx'
import AuthProvider from './components/auth-provider/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={MainRoute}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
