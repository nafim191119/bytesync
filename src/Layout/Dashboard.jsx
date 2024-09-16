import { Link, Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer"


const Dashboard = () => {
    return (
        <div className="flex">
            <div className="w-72 min-h-full bg-gray-200 pt-6 text-center">
                <div className="px-1 bg-red-900 rounded-lg mx-4 py-6 shadow-[0_0_15px_5px_rgba(255,0,0,0.5),0_0_15px_5px_rgba(255,255,0,0.5),0_0_15px_5px_rgba(0,255,255,0.5),0_0_15px_5px_rgba(0,255,0,0.5)] hover:shadow-[0_0_20px_8px_rgba(255,0,0,0.7),0_0_20px_8px_rgba(255,255,0,0.7),0_0_20px_8px_rgba(0,255,255,0.7),0_0_20px_8px_rgba(0,255,0,0.7)] transition-all duration-300 ease-in-out">
                    <h1 className="text-yellow-300 text-4xl">★★★</h1>
                    <Link to='/' className="btn btn-ghost text-4xl font-bold text-white">
                        BYTE SYNC
                    </Link>
                </div>


                <ul className="menu p-4 space-y-1 text-white pt-12 font-bold text-xl">
                    <li className="bg-blue-600 rounded-lg shadow-md transition-all duration-300 ease-in-out transform hover:bg-black hover:shadow-xl hover:scale-105">
                        <Link to={'/'} className="block px-6 py-3 text-white font-semibold">
                            Home
                        </Link>
                    </li>
                    <li className="bg-blue-600 rounded-lg shadow-md transition-all duration-300 ease-in-out transform hover:bg-black hover:shadow-xl hover:scale-105">
                        <Link to={'/dashboard/client'} className="block px-6 py-3 text-white font-semibold">
                            Clients
                        </Link>
                    </li>
                    <li className="bg-blue-600 rounded-lg shadow-md transition-all duration-300 ease-in-out transform hover:bg-black hover:shadow-xl hover:scale-105">
                        <Link to={'/dashboard/addteam'} className="block px-6 py-3 text-white font-semibold">
                            Add Team
                        </Link>
                    </li>
                    <li className="bg-blue-600 rounded-lg shadow-md transition-all duration-300 ease-in-out transform hover:bg-black hover:shadow-xl hover:scale-105">
                        <Link to={'/dashboard/addservice'} className="block px-6 py-3 text-white font-semibold">
                            Add Service
                        </Link>
                    </li>



                </ul>
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