import { Link } from "react-router-dom";

const Inspired = () => {
    return (
        <div>
            <div className="bg-white rounded-md md:mx-16 mx-8 my-14 md:py-20 px-3 py-8 text-center">
                <p className="text-black text-xl md:text-4xl font-bold mb-4 ">Let’s Turn Your Ideas into Reality</p>
                <Link to={"/contact"} className="px-3 py-2 md:px-8 md:py-2 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white focus:ring-4 focus:ring-pink-300 hover:shadow-2xl hover:scale-105 transition duration-300 ease-in-out transform">
                    Contact Us
                </Link>

            </div>
        </div>
    );
};

export default Inspired;