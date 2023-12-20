import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Router from './Router/Router.jsx'
import Provider from './Provider/Provider.jsx'
import { Toaster } from 'react-hot-toast'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider>
      <Toaster/>
    <RouterProvider router={Router} />
    </Provider>
  </React.StrictMode>,
)
