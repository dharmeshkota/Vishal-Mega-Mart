import { useParams } from 'react-router-dom';
import { useContext } from 'react';

import { InventoryContext } from '../../context/inventory.context';

import './collection.styles.css';
import CollectionItem from '../../components/collection-item/collection-item.component';

function CollectionPage() {
  const { category } = useParams();
  const { inventory } = useContext(InventoryContext);
  const collection = inventory[category];

  if (!collection) {
    return (
      <div className="collection-page">
        <div className="not-found">
          <h2>Category Not Found</h2>
          <p>The category you're looking for doesn't exist.</p>
          <a href="/shop" className="back-link">← Back to Shop</a>
        </div>
      </div>
    );
  }

  const { title, items } = collection;

  return (
    <div className="collection-page">
      <div className="collection-header">
        <h1 className="collection-page-title">{title}</h1>
        <p className="collection-item-count">{items.length} Products</p>
      </div>
      <div className="collection-items-grid">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default CollectionPage;