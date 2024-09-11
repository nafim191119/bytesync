
import { Link } from "react-router-dom";
import Clock from "../Clock";

const Navbar = () => {
    const currentDate = new Date().getUTCDate();
    const currentMonth = new Date().getUTCMonth();
    const currentYear = new Date().getFullYear();
    return (
        <div>
            <p className="flex h-8 items-center justify-center bg-blue-600 px-2 text-sm font-bold text-white sm:px-6 lg:px-8">
                Welcome to Byte Sync...!!!<span className="mx-12"><Clock></Clock></span>Date: {currentDate}/{currentMonth + 1}/{currentYear}
            </p>
            <div className="navbar bg-black text-white font-bold text-xl h-20 shadow-md border-b border-gray-200 shadow-blue-600/80">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to={"/services"}>Services</Link></li>
                            <li><Link to={"/services"}>Projects</Link></li>
                            <li><Link to={"/career"}>Career</Link></li>
                            <li><Link to={"/blog"}>Blog</Link></li>
                            <li><Link to={"/team"}>Team</Link></li>
                            <li><Link to={"/contact"}>Contact</Link></li>
                            <li><Link to={"/about"}>About</Link></li>
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost text-4xl font-bold">BYTE SYNC</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to={"/services"}>Services</Link></li>
                        <li><Link to={"/services"}>Projects</Link></li>
                        <li><Link to={"/career"}>Career</Link></li>
                        <li><Link to={"/blog"}>Blog</Link></li>
                        <li><Link to={"/team"}>Team</Link></li>
                        <li><Link to={"/contact"}>Contact</Link></li>
                        <li><Link to={"/about"}>About</Link></li>
                    </ul>
                </div>
                <div className="navbar-end mx-4">
                    Login
                </div>
            </div>
        </div>
    );
};

export default Navbar;