import { Routes, Route } from 'react-router-dom'

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";

const ShopPage = () => {
    return (
        <div>
            <Routes>
                <Route path={"/"} element={<CollectionsOverview />} />
                <Route path={":category"} element={<CollectionPage />} />
            </Routes>
        </div>
    )
};

export default ShopPage;