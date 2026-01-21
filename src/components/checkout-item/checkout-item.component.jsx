import './checkout-item.styles.css';

function CheckoutItem({ item, onRemove, onAdd, onReduce }) {
    const { id, name, imageUrl, price, quantity } = item;

    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt={name} className="checkout-item-image" />
            </div>
            <span className="item-name">{name}</span>
            <div className="quantity-container">
                <button 
                    className="quantity-btn" 
                    onClick={() => onReduce(item)}
                >
                    -
                </button>
                <span className="quantity-value price-tag">{quantity}</span>
                <button 
                    className="quantity-btn" 
                    onClick={() => onAdd(item)}
                >
                    +
                </button>
            </div>
            <span className="item-price price-tag">₹{price * quantity}</span>
            <button 
                className="remove-button" 
                onClick={() => onRemove(item)}
            >
                ✕
            </button>
        </div>
    );
}

export default CheckoutItem;