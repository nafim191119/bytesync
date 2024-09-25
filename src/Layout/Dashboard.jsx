import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer"
import AdminNavbar from "../Components/AdminNavbar/AdminNavbar";


const Dashboard = () => {
    return (
        <div className="flex">
            <div className="w-72 min-h-full bg-gray-200 pt-6 text-center">
                <AdminNavbar></AdminNavbar>
            </div>
            <div className="flex-1">
                <div className="navbar bg-blue-600 text-3xl text-white font-semibold space-x-4 px-6">
                    <h1 className="text-yellow-300">★</h1>
                    <div>Welcome Admin...</div>
                </div>
                <Outlet></Outlet>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Dashboard;