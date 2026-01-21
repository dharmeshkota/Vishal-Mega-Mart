import { Routes, Route } from 'react-router-dom';

import Shop from './pages/shop/shop.component.jsx'
import Checkout from './pages/checkout/checkout.component.jsx'
import Contact from './pages/contact/contact.component.jsx'
import Navbar from './components/navbar/navbar.component'
import Dashboard from './components/dashboard/dashboard.component'
import './VishalMegaMart.css'

function VishalMegaMart() {

  return (
    <div id="VishalMart">
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/shop/*" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
  )
}

export default VishalMegaMart
