import { useRef, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

import { CartContext } from '../../context/cart.context';

import './navbar.style.css';
import logo from '../../assets/logo1.png';
import cartIcon from '../../assets/cart.svg';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

function Navbar() {
    const { isHidden, cartItems, toggleHidden } = useContext(CartContext);
    const cartRef = useRef(null);

    useEffect(() => {
        if (isHidden) return;

        const handleClickOutside = (event) => {
            if (cartRef.current && !cartRef.current.contains(event.target)) {
                toggleHidden();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isHidden]);

    const toggleCart = () => {
        toggleHidden(!isHidden);
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
                    {!isHidden && <CartDropdown cartItems={cartItems} toggleCart={toggleCart} />}
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;