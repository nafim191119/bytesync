import { useEffect, useState } from "react";

const DigitalMarProject = () => {
    const [digitalMarProjects, setDigitalMarProjects] = useState([]);

    // Fetch the JSON data
    useEffect(() => {
        fetch('../../../../public/DigitalMarproject.json') // The JSON file path in the public directory
            .then(response => response.json())
            .then(data => setDigitalMarProjects(data.digitalMarketingProjects))
            .catch(error => console.error('Error fetching project data:', error));
    }, []);
    return (
        <div className="mx-8">
            <div className="container mx-auto py-10">
                <h1 className="text-center text-4xl font-bold mb-10 text-white underline">Our Digital Marketing Projects</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {digitalMarProjects.map((project) => (
                        <a
                            key={project.id}
                            href={project.projectURL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gray-800 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl block"
                        >
                            <div className="overflow-hidden rounded-t-lg">
                                <img
                                    src={project.imageURL}
                                    alt={project.name}
                                    className="w-full h-48 object-cover transition duration-300 hover:opacity-90"
                                />
                            </div>
                            <div className="p-6">
                                <h2 className="font-bold text-2xl mb-3 text-white">{project.name}</h2>
                                <p className="text-gray-300 mb-4">{project.description}</p>
                                <p className="text-sm text-gray-400">
                                    <strong>Technologies:</strong> {project.technologies.join(', ')}
                                </p>
                                <p className="text-sm text-gray-400">
                                    <strong>Client:</strong> {project.client}
                                </p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DigitalMarProject;