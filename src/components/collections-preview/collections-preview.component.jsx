import { Link } from 'react-router-dom';

import './collections-preview.styles.css';
import CollectionItem from '../collection-item/collection-item.component';

function CollectionPreview({ collection }) {
    const { title, items, routeName } = collection;

    return (
        <div className="collection-preview">
            <div className="title-container">
                <h2 className="collection-title">{title}</h2>
                <Link to={`/shop/${routeName}`} className="view-all-link">
                    View All →
                </Link>
            </div>
            <div className="preview-items">
                {items
                    .filter((item, idx) => idx < 4)
                    .map((item) => (
                        <CollectionItem key={item.id} item={item} />
                    ))}
            </div>
        </div>
    );
}

export default CollectionPreview;