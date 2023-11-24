import Cover from "../Shared/Cover/Cover";
import contactImg from'../..//assets/contact/contact.jpg'
import SectionTitle from "../../Components/SectionTitle/SectionTitle";

import LocationImg from '../../assets/home/location.jpeg'
import ContactImg from '../../assets/home/contact.webp'
import EmailImg from '../../assets/home/email.png'

import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
const ContactUs = () => {
    return (
        <div>
            <div>
                <Helmet prioritizeSeoTags>
                    <title>Q.M.R| ContactUs</title>
                </Helmet>
            </div>

            <Cover bg_img={contactImg} title={'CONTACT US'} about={'Thank you for considering Qick Made Restaurent for your dining experience. We value your feedback, inquiries, and reservations. Please feel free to reach out to us using the contact information below.'}></Cover>
            
            <div>
                <SectionTitle
                subHeading={'Visit Us'}
                heading={'OUR LOCATION'}
                ></SectionTitle>

                <div>
                    <div className="card  bg-base-100 shadow-xl w-1/2 ml-[325px]">
                        <figure className="px-10 pt-10">
                            <img src={LocationImg} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-4xl text-white">Address</h2>
                            <h1 className="text-2xl font-bold text-orange-600" >Quick Made Restaurent.</h1>
                            <p className="text-xl">Dhanmondi,Road-07,Dhaka,Bangladesh.</p>
                            <div className="card-actions">
                                <Link to='/'><button className="btn bg-orange-600 text-white">Visit Quick Made Restaurent</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <SectionTitle
                subHeading={'Send us a message'}
                heading={'Contact Form'}
                ></SectionTitle>

                <div className="flex justify-center items-center mb-10 gap-10">
                    <div className="card  bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img className="w-[300px] h-[200px]" src={ContactImg}/>
                        </figure>
                        <div className="card-body items-center text-center ">
                            <h2 className="card-title text-xl text-orange-600">Contact</h2>
                            <h1>Prosenjith: 01724-154911, Apurbo: 01724-154911</h1>
                            
                            <h1>Bilas: 01724-154911,Ananya: 01724-154911</h1>
                        
                            <div className="card-actions">
                                <Link to='/menu'><button className="btn bg-orange-600 text-white">Food Menu</button></Link>
                            </div>
                        </div>
                    </div>
                    <div className="card  bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img className="w-[300px] h-[200px]" src={EmailImg} />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-xl text-orange-600">Email</h2>
                            <h1>quickmaderestaurent@gmail.com</h1>
                            
                            <div className="card-actions">
                                <Link to='/menu'><button className="btn bg-orange-600 text-white">Food Menu</button></Link>
                            </div>
                        </div>
                    </div>
                </div>

               
            </div>
        </div>
    );
};

export default ContactUs;