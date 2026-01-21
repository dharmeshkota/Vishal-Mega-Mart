import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import Shop from './pages/shop/shop.component.jsx'
import Checkout from './pages/checkout/checkout.component.jsx'
import Contact from './pages/contact/contact.component.jsx'
import Navbar from './components/navbar/navbar.component'
import Dashboard from './components/dashboard/dashboard.component'
import './VishalMegaMart.css'

function VishalMegaMart() {

  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Aashirvaad Whole Wheat Atta (5kg)',
      imageUrl: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&q=80',
      quantity: 2,
      price: 240
    },
    {
      id: 2,
      name: 'Tata Salt (1kg)',
      imageUrl: 'https://www.bbassets.com/media/uploads/p/l/241600_9-tata-salt-iodized.jpg',
      quantity: 1,
      price: 25
    },
    {
      id: 3,
      name: 'Daawat Basmati Rice (1kg)',
      imageUrl: 'https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?w=400&q=80',
      quantity: 4,
      price: 150
    },
    {
      id: 4,
      name: 'Tata Sampann Toor Dal (1kg)',
      imageUrl: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=400&q=80',
      quantity: 1,
      price: 130
    },
    {
      id: 5,
      name: 'Fortune Sunlite Refined Oil (1L)',
      imageUrl: 'https://www.bigbasket.com/media/uploads/p/l/274145_14-fortune-sun-lite-sunflower-refined-oil.jpg',
      quantity: 1,
      price: 165
    }
  ]);

  // Function to completely remove an item from cart
  const onRemoveItem = (itemId) => {
    setCartItems(cartItems.filter(item => item.id !== itemId));
  };

  // Function to add one more quantity of an item
  const onAddItem = (itemId) => {
    setCartItems(
      cartItems.map(item =>
        item.id === itemId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // Function to reduce quantity by 1 (removes item if quantity becomes 0)
  const onReduceItem = (itemId) => {
    const existingItem = cartItems.find(item => item.id === itemId);

    if (existingItem.quantity === 1) {
      // Remove item if quantity is 1
      setCartItems(cartItems.filter(item => item.id !== itemId));
    } else {
      // Decrease quantity
      setCartItems(
        cartItems.map(item =>
          item.id === itemId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
    }
  };

  return (
    <div id="VishalMart">
      <Navbar />

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/shop/*" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/checkout" element={<Checkout cartItems={cartItems} onReduceItem={onReduceItem} onAddItem={onAddItem} onRemoveItem={onRemoveItem} />} />
      </Routes>
    </div>
  )
}

export default VishalMegaMart
