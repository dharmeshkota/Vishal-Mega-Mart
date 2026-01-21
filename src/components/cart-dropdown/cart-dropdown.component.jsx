import { Link } from 'react-router-dom';

import './cart-dropdown.styles.css';
import CartItem from '../cart-item/cart-item.component';

function CartDropdown({ cartItems, toggleCart }) {
    const total = cartItems?.reduce((acc, item) => acc + (item.price * item.quantity), 0) || 0;

    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {cartItems && cartItems.length > 0 ? (
                    cartItems.map((item) => (
                        <CartItem key={item.id} item={item} />
                    ))
                ) : (
                    <span className="empty-message">Your cart is empty</span>
                )}
            </div>
            {cartItems && cartItems.length > 0 && (
                <div className="cart-footer">
                    <div className="total">
                        <span>Total:</span>
                        <span className="total-price">₹{total.toFixed(2)}</span>
                    </div>
                    <Link to={"/checkout"} className="checkout-button" onClick={() => toggleCart()}>
                        GO TO CHECKOUT
                    </Link>
                </div>
            )}
        </div>
    );
}

export default CartDropdown;