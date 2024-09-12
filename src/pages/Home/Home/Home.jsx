import Inspired from "../../../Components/Inspired/Inspired";
import Slider from "../../../Components/Slider/Slider";
import Services from "../../Services/Services/Services";
import Stat from "../Stat/Stat";
import Testimonial from "../Testimonial/Testimonial";
import Why from "../Why/Why";

const Home = () => {
    return (
        <div className="pt-2">
            <Slider></Slider>
            <Services></Services>
            <Stat></Stat>
            <Why></Why>
            <Testimonial></Testimonial>
            <Inspired></Inspired>
        </div>
    );
};

export default Home;