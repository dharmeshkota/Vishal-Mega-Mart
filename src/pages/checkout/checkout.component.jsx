import { Link } from 'react-router-dom';

import './checkout.styles.css';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

function CheckoutPage({ cartItems, onRemoveItem, onAddItem, onReduceItem }) {
    const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const tax = subtotal * 0.18;
    const shipping = cartItems.length > 0 ? 50 : 0;
    const total = subtotal + tax + shipping;

    return (
        <div className="checkout-page">
            <div className="checkout-container">
                <div className="checkout-header">
                    <h1 className="checkout-title">Shopping Cart</h1>
                    <p className="items-count">{cartItems.length} {cartItems.length === 1 ? 'Item' : 'Items'}</p>
                </div>

                {cartItems.length > 0 ? (
                    <>
                        <div className="checkout-table-header">
                            <span className="header-block product-header">Product</span>
                            <span className="header-block">Description</span>
                            <span className="header-block">Quantity</span>
                            <span className="header-block">Price</span>
                            <span className="header-block">Remove</span>
                        </div>

                        <div className="checkout-items">
                            {cartItems.map((item) => (
                                <CheckoutItem
                                    key={item.id}
                                    item={item}
                                    onRemove={onRemoveItem}
                                    onAdd={onAddItem}
                                    onReduce={onReduceItem}
                                />
                            ))}
                        </div>

                        <div className="checkout-summary">
                            <div className="summary-card">
                                <h2 className="summary-title">Order Summary</h2>

                                <div className="summary-row">
                                    <span className="summary-label">Subtotal</span>
                                    <span className="summary-value">₹{subtotal.toFixed(2)}</span>
                                </div>

                                <div className="summary-row">
                                    <span className="summary-label">GST (18%)</span>
                                    <span className="summary-value">₹{tax.toFixed(2)}</span>
                                </div>

                                <div className="summary-row">
                                    <span className="summary-label">Shipping</span>
                                    <span className="summary-value">₹{shipping.toFixed(2)}</span>
                                </div>

                                <div className="summary-divider"></div>

                                <div className="summary-row total-row">
                                    <span className="summary-label total-label">Total</span>
                                    <span className="summary-value total-value">₹{total.toFixed(2)}</span>
                                </div>

                                <button className="checkout-button">
                                    PROCEED TO CHECKOUT
                                </button>

                                <Link to={"/shop"} className="continue-shopping">
                                    ← Continue Shopping
                                </Link>
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="empty-cart">
                        <div className="empty-cart-icon">🛒</div>
                        <h2>Your Cart is Empty</h2>
                        <p>Add some products to get started!</p>
                        <Link to={"/shop"} className="continue-shopping">
                            Start Shopping
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}

export default CheckoutPage;