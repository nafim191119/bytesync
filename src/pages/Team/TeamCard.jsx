import { Link } from "react-router-dom";

const TeamCard = ({ item }) => {
    const { imageUrl, name, role } = item;

    return (
        <div className="mx-auto">
            <div className="flex flex-col items-center w-52 text-center p-6 bg-gray-300 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <img alt="" src={imageUrl} className="h-28 w-28 rounded-full mb-4" />
                <div>
                    <h3 className="text-xl font-bold text-gray-900">
                        <Link className="hover:underline">{name}</Link>
                    </h3>
                    <p className="text-sm font-semibold text-indigo-600">{role}</p>
                </div>
            </div>
        </div>
    );
};

export default TeamCard;
