import './cart-item.styles.css';

function CartItem({ item }) {
    const { imageUrl, name, price, quantity } = item;

    return (
        <div className="cart-item">
            <img src={imageUrl} alt={name} className="cart-item-image" />
            <div className="item-details">
                <span className="item-name">{name}</span>
                <span className="item-price">
                    {quantity} x ₹{price}
                </span>
            </div>
        </div>
    );
}

export default CartItem;