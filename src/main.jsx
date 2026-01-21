import { StrictMode } from 'react'
import { BrowserRouter } from "react-router-dom";
import { createRoot } from 'react-dom/client'

import { CartProvider } from './context/cart.context.jsx';
import VishalMegaMart from './VishalMegaMart.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <CartProvider>
        <VishalMegaMart />
      </CartProvider>
    </BrowserRouter>
  </StrictMode>
);