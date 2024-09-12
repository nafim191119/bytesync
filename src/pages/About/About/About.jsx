import { Link } from "react-router-dom";

const About = () => {
    return (
        <div>
            <div className="min-h-screen bg-black py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold text-center text-white mb-8">
                        About Byte Sync
                    </h1>

                    <section className="mb-16">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <div className="space-y-6">
                                <h2 className="text-3xl font-bold text-white">Our Vision</h2>
                                <p className="text-gray-300 leading-relaxed">
                                    At Byte Sync, we aim to revolutionize the IT industry by delivering cutting-edge solutions in web development, mobile apps, cybersecurity, AI, blockchain, and IoT. Our team of experts is dedicated to helping businesses stay ahead in the digital age, empowering them with innovative tools and strategies to thrive in today’s fast-paced technology landscape.
                                </p>
                            </div>
                            <img
                                className="w-full h-auto rounded-lg shadow-lg"
                                src="https://via.placeholder.com/400"
                                alt="Byte Sync Vision"
                            />
                        </div>
                    </section>

                    <section className="mb-16">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <img
                                className="w-full h-auto rounded-lg shadow-lg"
                                src="https://via.placeholder.com/400"
                                alt="Byte Sync Team"
                            />
                            <div className="space-y-6">
                                <h2 className="text-3xl font-bold text-white">Meet the Team</h2>
                                <p className="text-gray-300 leading-relaxed">
                                    Byte Sync is composed of a diverse group of professionals, from web developers to AI specialists, blockchain innovators to IoT engineers. Our 10-member team brings together a wealth of experience and a passion for creating forward-thinking solutions. Together, we’re pushing boundaries and delivering exceptional results.
                                </p>
                                <Link
                                    to="/team"
                                    className="btn btn-md btn-primary bg-white text-blue-600 font-semibold hover:bg-gray-100 transition"
                                >
                                    Explore Our Team
                                </Link>
                            </div>
                        </div>
                    </section>

                    <section className="mb-16">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <div className="space-y-6">
                                <h2 className="text-3xl font-bold text-white">Our Core Values</h2>
                                <ul className="list-disc list-inside text-gray-300 space-y-2">
                                    <li>
                                        <strong>Innovation</strong>: We believe in constantly pushing the envelope and staying ahead of the curve.
                                    </li>
                                    <li>
                                        <strong>Client Satisfaction</strong>: Our clients' success is our success, and we strive for excellence in every project.
                                    </li>
                                    <li>
                                        <strong>Integrity</strong>: Transparency and trust are at the core of everything we do.
                                    </li>
                                    <li>
                                        <strong>Collaboration</strong>: We foster a collaborative environment to bring out the best ideas and solutions.
                                    </li>
                                </ul>
                            </div>
                            <img
                                className="w-full h-auto rounded-lg shadow-lg"
                                src="https://via.placeholder.com/400"
                                alt="Byte Sync Values"
                            />
                        </div>
                    </section>

                    <section className="text-center py-12 bg-blue-600 text-white rounded-lg shadow-lg">
                        <h2 className="text-3xl font-bold mb-4">Ready to Work with Us?</h2>
                        <p className="text-lg mb-6">
                            Let's build something amazing together. Reach out to Byte Sync to kickstart your next big project.
                        </p>
                        <Link
                            to="/contact"
                            className="btn btn-md btn-primary bg-white text-blue-600 font-semibold hover:bg-gray-100 transition"
                        >
                            Contact Us
                        </Link>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default About;