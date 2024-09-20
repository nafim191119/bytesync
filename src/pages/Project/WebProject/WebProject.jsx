import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const WebProject = () => {
    const [webprojects, setWebProjects] = useState([]);

    // Fetch the JSON data
    useEffect(() => {
        fetch('../../../../public/WebProject.json')
            .then(response => response.json())
            .then(data => setWebProjects(data.webDevelopmentProjects))
    }, []);
    return (
        <div className="mx-8">
            <div className="container mx-auto py-10">
                <h1 className="text-center text-4xl font-bold mb-10 text-white underline">Our Web Development Projects</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {webprojects.map((project) => (
                        <div
                            key={project.id}
                            className="bg-gray-800 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl"
                        >
                            <div className="overflow-hidden rounded-t-lg">
                                <img
                                    src={project.imageURL}
                                    alt={project.name}
                                    className="w-full h-48 object-cover transition duration-300 hover:opacity-90"
                                />
                            </div>
                            <div className="p-6">
                                <h2 className="font-bold text-2xl mb-3 text-white"><Link to={project.link} className="hover:text-blue-400 hover:underline" target="_blank">{project.name}</Link></h2>
                                <p className="text-gray-300 mb-4">{project.description}</p>
                                <p className="text-sm text-gray-400">
                                    <strong>Technologies:</strong> {project.technologies.join(', ')}
                                </p>
                                <p className="text-sm text-gray-400">
                                    <strong>Client:</strong> {project.client}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WebProject;