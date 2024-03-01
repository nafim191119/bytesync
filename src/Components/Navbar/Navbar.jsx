
import { Link } from "react-router-dom";
import Clock from "../Clock";

const Navbar = () => {
    const currentDate = new Date().getUTCDate();
    const currentMonth = new Date().getUTCMonth();
    const currentYear = new Date().getFullYear();
    return (
        <div>
            <p className="flex h-10 items-center justify-center bg-indigo-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8 font-bold">
                Welcome to Byte Sync!  <span className="mx-12"><Clock></Clock></span>Date:{currentDate}/{currentMonth+1}/{currentYear}
            </p>
            <div className="navbar bg-{black} text-white font-bold text-xl">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Item 1</a></li>
                            <li>
                                <a>Parent</a>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost text-2xl font-bold">BYTE SYNC</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <a>Item 1</a>
                        </li>
                        <li>
                            <a>Item 1</a>
                        </li>
                        <li>
                            <a>Item 3</a>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end mx-4">
                    <button className="btn btn-outline text-white w-28">Log In</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;