import { StrictMode } from 'react'
import { BrowserRouter } from "react-router-dom";
import { createRoot } from 'react-dom/client'
import './index.css'
import VishalMegaMart from './VishalMegaMart.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <VishalMegaMart />
    </BrowserRouter>
  </StrictMode>,
)
