import pic from '../../assets/pic2.png';

const Hero = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-gray-900 px-auto">
                <div className="hero-content flex-col lg:flex-row-reverse mx-auto lg:mx-8">
                    <img width={350} src={pic} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold text-white">Welcome to <span className='text-primary'>BYTE SYNC !</span><br /> <span className='text-3xl'>Empowering Tomorrow's Technology.</span> </h1>
                        <p className="py-8 text-white">In the dynamic realm of Information Technology, BYTE SYNC shines as a beacon of innovation and expertise. Committed to guiding our clients into the future, we seamlessly integrate cutting-edge solutions into every aspect of their business.</p>
                        <button className="btn btn-primary text-white">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;