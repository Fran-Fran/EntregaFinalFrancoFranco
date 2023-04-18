import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import ScrollToTop from './components/ScrollToTop'
import CartProvider from './contexts/CartContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <CartProvider>
    <BrowserRouter>
      <ScrollToTop />
      <App />  
    </BrowserRouter>
  </ CartProvider>
)