const posts = [
    {
        id: 1,
        title: 'What Sets Us Apart:',
        des1: 'Innovation First',
        des2: 'Client-Centric Approach',
        des3: 'Expertise Beyond Boundaries', 
    },
    {
        id: 2,
        title: 'Explore Our Services',
        des1: 'IT Consulting',
        des2: 'Software Development',
        des3: 'Managed IT Services',
        des4: 'Cybersecurity',
    },
    {
        id: 3,
        title: 'Unparalleled Support',
        des1: 'Customer-Centric Excellence',
        des2: 'Continuous Innovation',
        des3: 'Future-Ready Solutions',
    },
]

const Why = () => {
    return (
        <div>
            <div className="bg-black py-10 sm:py-20">
                <div className="mx-auto max-w-7xl px-4 lg:px-8">
                    <div className="mx-auto lg:mx-0 text-center">
                        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-4xl">Why <span className="text-secondary">BYTE SYNC</span> ?</h2>
                        <p className="mt-2 text-sm sm:text-xl text-white">
                            In a tech-driven world, BYTE SYNC is your partner in progress, delivering transformative experiences.
                        </p>
                    </div>
                    <div className="mx-auto mt-6 grid max-w-2xl md:grid-cols-3 gap-x-8 gap-y-10 border-t border-white pt-10 sm:mt-10 sm:pt-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        {posts.map((post) => (
                            <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                                <div className="group relative mx-auto">
                                    <h3 className="mt-3 text-2xl font-bold leading-6 text-white">
                                        <div className="mb-4  ">{post.title}</div>
                                    </h3>
                                    <div className="flex">
                                        <p className="mt-2 line-clamp-3 text-sm leading-6 text-white">{post.des1}</p>
                                        <span className="indicator-item badge badge-secondary">new</span>
                                    </div>
                                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-white">{post.des2}</p>
                                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-white">{post.des3}</p>
                                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-white">{post.des4}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Why;