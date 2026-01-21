import { Link } from 'react-router-dom';
import './order-summary.styles.css'

const OrderSummary = ({ cartItems }) => {
    const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const tax = subtotal * 0.18;
    const shipping = cartItems.length > 0 ? 50 : 0;
    const total = subtotal + tax + shipping;

    return (
        <div className="checkout-summary">
            <div className="summary-card">
                <h2 className="summary-title">Order Summary</h2>

                <div className="summary-row">
                    <span className="summary-label">Subtotal</span>
                    <span className="summary-value price-tag">₹{subtotal.toFixed(2)}</span>
                </div>

                <div className="summary-row">
                    <span className="summary-label">GST (18%)</span>
                    <span className="summary-value price-tag">₹{tax.toFixed(2)}</span>
                </div>

                <div className="summary-row">
                    <span className="summary-label">Shipping</span>
                    <span className="summary-value price-tag">₹{shipping.toFixed(2)}</span>
                </div>

                <div className="summary-divider"></div>

                <div className="summary-row total-row">
                    <span className="summary-label total-label">Total</span>
                    <span className="summary-value total-value price-tag">₹{total.toFixed(2)}</span>
                </div>

                <button className="checkout-button">
                    PROCEED TO CHECKOUT
                </button>

                <Link to={"/shop"} className="continue-shopping">
                    ← Continue Shopping
                </Link>
            </div>
        </div>
    );
};

export default OrderSummary;