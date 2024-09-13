import Inspired from "../../../Components/Inspired/Inspired";
import Slider from "../../../Components/Slider/Slider";
import Services from "../../Services/Services/Services";
import Faq from "../FAQ/Faq";
import Stat from "../Stat/Stat";
import Testimonial from "../Testimonial/Testimonial";
import Why from "../Why/Why";

const Home = () => {
    return (
        <div className="pt-2">
            <Slider></Slider>
            <Services></Services>
            <Why></Why>
            <Stat></Stat>
            <Testimonial></Testimonial>
            <Faq></Faq>
            <Inspired></Inspired>
        </div>
    );
};

export default Home;