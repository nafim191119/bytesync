import Navbar from "../../Components/Navbar/Navbar";
import Count from "../Count/Count";
import Footer from "../Footer/Footer";
import Hero from "../Hero/Hero";
import Sponsor from "../Sponsor/Sponsor";
import Team from "../Team/Team";
import Why from "../Why/Why";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Hero></Hero>
            <div className="divider"></div>
            <Why></Why>
            <div className="divider"></div>


            <Team></Team>
            <div className="divider"></div>
            <Count></Count>
            <div className="divider"></div>
            <Sponsor></Sponsor>
            <div className="divider"></div>
            <Footer></Footer>
        </div>
    );
};

export default Home;