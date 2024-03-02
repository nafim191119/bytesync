import Navbar from "../../Components/Navbar/Navbar";
import Count from "../Count/Count";
import Footer from "../Footer/Footer";
import Hero from "../Hero/Hero";
import Sponsor from "../Sponsor/Sponsor";

const Home = () => {
    return (
        <div>
            {/* Navbar */}
            <Navbar></Navbar>
            <Hero></Hero>

            {/* Slider */}
            <Count></Count>
            <div className="divider"></div>
            <Sponsor></Sponsor>
            <div className="divider"></div>
            <Footer></Footer>
            {/* Footer */}
        </div>
    );
};

export default Home;