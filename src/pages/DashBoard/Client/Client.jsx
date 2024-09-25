import { useEffect, useState } from "react";

const Client = () => {
    const [client, setClient] = useState([]);

    useEffect(() => {
        fetch('https://bytesync-server-9t3y.onrender.com/client')
            .then((res) => res.json())
            .then((data) => {
                const sortedData = data.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
                setClient(sortedData);
            })
            .catch((error) => console.error('Error fetching client data:', error));
    }, []);

    return (
        <div className="px-8 py-10">
            <h1 className="text-3xl pb-4 font-bold text-white uppercase">
                Total Client Request: <span className="text-secondary text-5xl">{client.length}</span>
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                {client.map((c, index) => (
                    <div key={index._id} className="card bg-white shadow-xl">
                        <div className="card-body">
                            <div className="flex justify-center items-center">
                                <p className="card-title text-black text-4xl font-bold">{c.name}</p>
                                <p className="text-black text-sm mt-2 text-end">Submitted on: {new Date(c.timestamp).toLocaleString()}</p>
                            </div>
                            <p className="text-black font-semibold">{c.email}</p>
                            <p className="bg-gray-200 p-4 rounded-lg text-sm text-black">
                                {c.message}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Client;
