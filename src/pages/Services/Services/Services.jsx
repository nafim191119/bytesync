import { useEffect, useState } from "react";
import Card from "../../../Components/Card/Card";

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("../../../../public/services.json")
            .then(data => data.json())
            .then(res => setServices(res))
    }, [])

    return (
        <div className="py-12 px-8">
            <div className="py-8 text-center text-white">
                <h1 className="text-4xl uppercase font-bold pb-3">Our Services</h1>
                <h1 className="text-xl text-semibold">Empowering Your Business with Quality Services</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 space-x-2">
                {
                    services.map(service => <Card key={service.id} service={service}></Card>)
                }
            </div>
        </div>
    );
};

export default Services;