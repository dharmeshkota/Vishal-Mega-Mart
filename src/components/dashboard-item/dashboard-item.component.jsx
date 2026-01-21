import './dashboard-item.styles.css';

function DashboardItem({ category, isLarge }) {
    const { title, imageUrl, routeName } = category;

    return (
        <div className={`menu-item ${isLarge ? 'large' : ''}`}>
            <div 
                className="background-image" 
                style={{ backgroundImage: `url(${imageUrl})` }}
            />
            <div className="content">
                <h1 className="title">{title}</h1>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>
    );
}

export default DashboardItem;