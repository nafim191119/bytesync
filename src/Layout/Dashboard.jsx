import { Link, Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
        <div className="flex">
            <div className="w-64 min-h-full bg-blue-500">
                <ul className="menu">
                    <li> <Link to={'/dashboard/client'}>Client</Link> </li>
                </ul>
            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;