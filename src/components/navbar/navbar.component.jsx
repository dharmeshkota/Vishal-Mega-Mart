import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './navbar.style.css';
import logo from '../../assets/logo1.png';
import cartIcon from '../../assets/cart.svg';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

const cartItems = [
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
];

function Navbar() {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const cartRef = useRef(null);

    useEffect(() => {
        if (!isCartOpen) return;

        const handleClickOutside = (event) => {
            if (cartRef.current && !cartRef.current.contains(event.target)) {
                setIsCartOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isCartOpen]);

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
    };

    return (
        <nav className="navbar">
            <div className="nav-logo">
                <Link to="/">
                    <img src={logo} alt="E-Commerce Logo" className="logo-img" />
                </Link>
            </div>
            <ul className="nav-links">
                <li><Link to="/shop">Shop</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li className="cart-container" ref={cartRef}>
                    <div onClick={toggleCart} className="cart-icon-wrapper">
                        <img src={cartIcon} alt="Cart" className="cart-icon" />
                        {cartItems && cartItems.length > 0 && (
                            <span className="cart-count">{cartItems.length}</span>
                        )}
                    </div>
                    {isCartOpen && <CartDropdown cartItems={cartItems} toggleCart={toggleCart} />}
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;