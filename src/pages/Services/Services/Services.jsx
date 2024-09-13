import { useEffect, useState } from "react";
import Card from "../../../Components/Card/Card";
import { Link } from "react-router-dom";


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
            <section className="text-center py-10 bg-blue-600 text-white rounded-lg shadow-lg px-4 md:mx-8">
                <h2 className="text-xl md:text-3xl font-bold mb-4">Ready to Work with Us?</h2>
                <p className="text-sm md:text-lg mb-6">
                    Let's build something amazing together. Reach out to Byte Sync to kickstart your next big project.
                </p>
                <Link to="/contact" className="btn btn-md btn-primary bg-white text-blue-600 font-semibold hover:bg-gray-100 transition">
                    Contact Us
                </Link>
            </section>
        </div>
    );
};

export default Services;