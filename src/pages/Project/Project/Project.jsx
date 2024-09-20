import AppProject from "../AppProject/AppProject";
// import DigitalMarProject from "../DigitalMarProject/DigitalMarProject";
import WebProject from "../WebProject/WebProject";
import Inspired from "../../../Components/Inspired/Inspired"

const Project = () => {
    return (
        <div>
            <div>
                <WebProject></WebProject>
                <AppProject></AppProject>
                {/* <DigitalMarProject></DigitalMarProject> */}
                <Inspired></Inspired>
            </div>
        </div>
    );
};

export default Project;