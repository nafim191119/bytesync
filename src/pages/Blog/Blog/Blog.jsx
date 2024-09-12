
const blogs = [
    {
        id: 1,
        title: "Web Development Trends in 2024",
        excerpt:
            "Stay ahead of the curve with the latest web development trends that will shape the industry in 2024.",
        image: "https://via.placeholder.com/400",
        date: "September 10, 2024",
        author: "John Doe",
    },
    {
        id: 2,
        title: "Mastering Mobile App Design",
        excerpt:
            "Explore the best practices for designing user-friendly and intuitive mobile apps.",
        image: "https://via.placeholder.com/400",
        date: "August 29, 2024",
        author: "Jane Smith",
    },
    {
        id: 3,
        title: "Cybersecurity Essentials for Startups",
        excerpt:
            "Learn how to protect your startup from cyber threats with essential cybersecurity practices.",
        image: "https://via.placeholder.com/400",
        date: "July 18, 2024",
        author: "David Brown",
    },
];

const Blog = () => {
    return (
        <div className="pt-2">
            <div className="min-h-screen bg-black py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
                    <h1 className="text-4xl font-bold text-center  mb-10">
                        Latest Blog Posts
                    </h1>
                    <div className="space-y-12">
                        {blogs.map((blog) => (
                            <div key={blog.id} className="space-y-6">
                                <img
                                    className="rounded-lg w-[400px]"
                                    src={blog.image}
                                    alt={blog.title}
                                />
                                <h2 className="text-3xl font-bold  hover:text-blue-600 transition duration-200">
                                    {blog.title}
                                </h2>
                                <div className=" flex items-center justify-between">
                                    <span>{blog.date}</span>
                                    <span>By {blog.author}</span>
                                </div>
                                <p className=" leading-relaxed">{blog.excerpt}</p>
                                <a
                                    href="#"
                                    className="text-blue-500 hover:text-blue-600 font-semibold"
                                >
                                    Read More →
                                </a>
                                <div className="w-1/2 h-1 mx-auto bg-white"></div>
                            </div>
                            
                        ))}
                        
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Blog;