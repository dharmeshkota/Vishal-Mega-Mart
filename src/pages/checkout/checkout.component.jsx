import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import OrderSummary from '../../components/order-summary/order-summary.component';
import './checkout.styles.css';

function CheckoutPage() {

    const {cartItems, addItem, removeItem, reduceItem} = useContext(CartContext);

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
                                    onRemove={removeItem}
                                    onAdd={addItem}
                                    onReduce={reduceItem}
                                />
                            ))}
                        </div>

                        <OrderSummary cartItems={cartItems} />
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