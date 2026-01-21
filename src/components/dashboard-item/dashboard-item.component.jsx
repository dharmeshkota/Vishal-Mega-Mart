import { useNavigate, useLocation } from "react-router-dom";

import './dashboard-item.styles.css';

function DashboardItem({ category, isLarge }) {
    const { title, imageUrl, routeName } = category;

    const navigate = useNavigate();
    const location = useLocation();

    return (
        <div className={`menu-item ${isLarge ? 'large' : ''}`}>
            <div 
                className="background-image" 
                style={{ backgroundImage: `url(${imageUrl})` }}
            />
            <div className="content" onClick={() => navigate(`/shop/${routeName}`)}>
                <h1 className="title">{title}</h1>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>
    );
}

export default DashboardItem;