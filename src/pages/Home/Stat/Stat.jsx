const stats = [
    { id: 1, name: 'Years of Experience', value: '2+' },
    { id: 2, name: 'Happy Client', value: '7' },
    { id: 3, name: 'Project Finished', value: '10+' },
    { id: 4, name: 'Team Members', value: '18+' }
]

const Stat = () => {
    return (
        <div>
            <div className="bg-white py-16 sm:py-16 rounded-md mx-16">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4">
                        {stats.map((stat) => (
                            <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4 text-start">
                                <dt className="text-black font-semibold text-xl">{stat.name}</dt>
                                <dd className="order-first text-2xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                                    {stat.value}
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    );
};

export default Stat;