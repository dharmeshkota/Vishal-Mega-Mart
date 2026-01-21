import { useContext } from 'react';
import { InventoryContext } from '../../context/inventory.context'

import './collections-overview.styles.css';
import CollectionPreview from '../collections-preview/collections-preview.component';

function CollectionsOverview() {
  const { inventory } = useContext(InventoryContext);
  const collectionsArray = Object.values(inventory);

  return (
    <div className="collections-overview">
      {collectionsArray.map((collection) => (
        <CollectionPreview
          key={collection.id}
          collection={collection}
        />
      ))}
    </div>
  );
}

export default CollectionsOverview;