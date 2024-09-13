const TestimonialCard = ({ review }) => {
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
        <figure className="bg-gray-800 text-white px-4 py-6 rounded-lg shadow-lg">
            <img
                alt={review.name}
                src={review.imageUrl}
                className="mx-auto h-24 w-24 rounded-full"
            />
            <figcaption className="mt-4 text-center">
                <div className="font-bold text-blue-400">{review.name}</div>
                <div className="mt-4 text-center">
                    <div className="flex justify-center">
                        {renderStars(review.rating)}
                    </div>
                </div>
                <div className="text-gray-400 text-sm">{review.role}</div>
            </figcaption>
            <blockquote className="mt-4 text-start font-semibold">
                <p>{review.review}</p>
            </blockquote>
        </figure>
    );
};

export default TestimonialCard;
