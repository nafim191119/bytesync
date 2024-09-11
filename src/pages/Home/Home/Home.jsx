import Inspired from "../../../Components/Inspired/Inspired";
import Slider from "../../../Components/Slider/Slider";
import Services from "../../Services/Services/Services";
import Stat from "../Stat/Stat";
import Why from "../Why/Why";

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Services></Services>
            <Stat></Stat>
            <Why></Why>
            <Inspired></Inspired>
        </div>
    );
};

export default Home;