import Navbar from "../../components/Navbar/Navbar";
import './Home.css'
import CustomBookingBox from "../../components/CustomBookingBox/CustomBookingBox";
const Homepage = () => {
    return (
        <div className="home-section"> 
            <Navbar />
            <div className="herosection">
                <div className="customBookingBoxContainer">
                    <CustomBookingBox />
                </div>
            </div>
        </div>
    );
}

export default Homepage;