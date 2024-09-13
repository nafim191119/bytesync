import { Link } from "react-router-dom";

const Card = ({ service }) => {
    const { id, name, description, icon, developer, additional_info, image } = service;
    return (
        <div className="mx-auto my-8 px-8">
            <div className="card bg-gradient-to-r from-gray-800 to-gray-900 shadow-lg rounded-lg transition-all duration-500 ease-in-out hover:shadow-[0_0_15px_5px_rgba(255,105,180,0.7),0_0_25px_10px_rgba(0,255,255,0.7)]">
                <figure className="overflow-hidden rounded-t-lg">
                    <img
                        src={image}
                        alt="services"
                        className="w-full h-56 object-cover"
                    />
                </figure>
                <div className="card-body text-white p-4">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-2xl font-bold">
                            <Link className="hover:underline">{name}</Link>
                        </h2>
                    </div>
                    <p className="text-gray-300">{additional_info}</p>
                </div>
            </div>
        </div>

    );
};

export default Card;
