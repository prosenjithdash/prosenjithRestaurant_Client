import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'


const Testimonials = () => {
    const [review, setReview] = useState([]);

    useEffect(() => {
        fetch('https://prosenjith-restaurant-server.vercel.app/review')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])
    return (
        <div className="my-20">
            <SectionTitle
                subHeading={'What Our Clients Say'}
                heading={'Testimonials'}
            ></SectionTitle>

            <div data-aos="zoom-in-up"
                data-aos-duration="2000">
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    {
                        review.map(review => <SwiperSlide
                            key={review._id}
                        >
                            <div className="flex flex-col items-center my-16 mx-24">
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    readOnly
                                />
                                <p className="py-4">{review.details}</p>
                                <h2 className="text-2xl text-orange-400 text-center">{review.name}</h2>
                            </div>
                        </SwiperSlide>
                        )
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonials;