import DASHBOARD_DATA from "../../dashboard-data";
import DashboardItem from '../dashboard-item/dashboard-item.component';
import './dashboard.styles.css';

function Dashboard() {
    const categories = Object.values(DASHBOARD_DATA);

    return (
        <div className="directory-menu">
            {categories.map((category, index) => (
                <DashboardItem 
                    key={category.id} 
                    category={category}
                    size={index === 2 ? 'large' : ''}
                />
            ))}
        </div>
    );
}

export default Dashboard;