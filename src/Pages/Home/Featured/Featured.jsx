import { Link } from "react-router-dom";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

import FeaturedImg from '../../../assets/home/featured.jpg'
import './Featured.css'
const Featured = () => {
    return (
        <div data-aos="zoom-in-up"
        data-aos-duration="2000" className="featured-item bg-fixed pt-8 my-20">
            <SectionTitle subHeading={'Check it out'} heading={'Featured Item'}></SectionTitle>

            <div className="md:flex justify-center items-center pb-20 pt-12 px-36 gap-8 bg-black bg-opacity-30 bg-h-full">
                <div>
                    <img src={FeaturedImg} alt="" />
                </div>

                <div className="md:ml-10 text-white">
                    <p>Novembar 23 2023</p>
                    {/* <p className="uppercase">Where can i get some?</p> */}
                    <p>People are the core of every business. Businesses are based on relationships, and relationships are based on people. I would go to an average restaurant run by amazing people over an outstanding restaurant run by awful people.</p>
                    <Link to='/menu'><button className="btn btn-outline border-0 border-b-4 text-white">Oder Now</button></Link>
                    

                </div>

            </div>
        </div>
    );
};

export default Featured;