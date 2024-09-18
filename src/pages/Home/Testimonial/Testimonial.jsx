import { useEffect, useState } from "react";
import TestimonialCard from "./TestimonialCard";

const Testimonial = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        // Fetch data from the JSON file
        fetch("https://bytesync-server-phi.vercel.app/reviews")
            .then((response) => response.json())
            .then((data) => setReviews(data))
            .catch((error) => console.error("Error fetching reviews:", error));
    }, []);

    const renderStars = (rating) => {
        const totalStars = 5;
        const stars = [];

        for (let i = 1; i <= totalStars; i++) {
            if (i <= rating) {
                stars.push(<span key={i} className="text-yellow-400">★</span>);
            } else {
                stars.push(<span key={i} className="text-gray-400">★</span>);
            }
        }

        return stars;
    };

    return (
        <div>
            <div className="divider"></div>
            <section className="relative isolate overflow-hidden bg-black px-6 py-12 sm:py-26 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-white mb-4 uppercase">Our Client Reviews</h2>
                    <p className="text-gray-300 leading-relaxed text-xl">
                        Which peoples loves us a lot, please check out what about says about us
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (<TestimonialCard key={index} review={review} />))}
                </div>
            </section>
            <div className="divider"></div>
        </div>
    );
};

export default Testimonial;
