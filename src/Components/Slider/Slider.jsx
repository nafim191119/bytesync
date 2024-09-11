import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Slider.css';
import { Pagination, Navigation } from 'swiper/modules';

const Slider = () => {
    return (
        <div>
            <Swiper
                pagination={{
                    type: 'fraction',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide className="slide-bg-1 bg-cover bg-center flex items-center justify-center">
                    <div className="text-center px-12 py-8 md:px-12 md:py-16 bg-black rounded-lg bg-opacity-60">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase text-white mb-6 leading-tight">
                            Welcome to <span className='text-secondary'>BYTE SYNC...</span>
                        </h1>
                        <h2 className="text-md md:text-2xl lg:text-3xl font-semibold text-white mb-4">
                            Your Trusted IT Solutions Partner
                        </h2>
                        <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                                Get Started
                            </span>
                        </button>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;
