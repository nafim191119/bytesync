import { FaCalendarAlt, FaSmile, FaTasks, FaUsers } from 'react-icons/fa'; // Import desired icons

const stats = [
    { id: 1, name: 'Years of Experience', value: '2+', icon: <FaCalendarAlt className="text-blue-500 text-4xl" /> },
    { id: 2, name: 'Happy Clients', value: '8', icon: <FaSmile className="text-yellow-500 text-4xl" /> },
    { id: 3, name: 'Projects Finished', value: '10', icon: <FaTasks className="text-green-500 text-4xl" /> },
    { id: 4, name: 'Team Members', value: '17+', icon: <FaUsers className="text-red-500 text-4xl" /> }
];

const Stat = () => {
    return (
        <div className="bg-white py-16 sm:py-24 rounded-md mx-4 sm:mx-8 lg:mx-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <dl className="grid grid-cols-1 gap-y-16 sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-4 lg:gap-x-12">
                    {stats.map((stat) => (
                        <div
                            key={stat.id}
                            className="flex flex-col items-center text-center gap-y-4"
                        >
                            <div className='flex justify-center items-center gap-6'>
                                <div className="flex items-center justify-center">
                                    {stat.icon}
                                </div>
                                <div className='text-start'>
                                    <dd className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                                        {stat.value}
                                    </dd>
                                    <dt className="text-gray-600 font-semibold sm:text-xl lg:text-xl">
                                        {stat.name}
                                    </dt>
                                </div>
                            </div>
                        </div>
                    ))}
                </dl>
            </div>
        </div>
    );
};

export default Stat;
