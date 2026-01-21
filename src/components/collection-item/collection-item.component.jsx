import './collection-item.styles.css';

function CollectionItem({ item }) {
    const { name, price, imageUrl } = item;

    return (
        <div className="collection-item">
            <div className="item-image-container">
                <img src={imageUrl} alt={name} className="item-image" />
                <button className="add-to-cart-btn">ADD TO CART</button>
            </div>
            <div className="item-footer">
                <span className="item-name">{name}</span>
                <span className="item-price">₹{price}</span>
            </div>
        </div>
    );
}

export default CollectionItem;
