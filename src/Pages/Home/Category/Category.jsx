import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';

import slide_1 from '../../../assets/home/slide1.jpg'
import slide_2 from '../../../assets/home/slide2.jpg'
import slide_3 from '../../../assets/home/slide3.jpg'
import slide_4 from '../../../assets/home/slide4.jpg'
import slide_5 from '../../../assets/home/slide5.jpg'


import 'swiper/css';
import 'swiper/css/pagination';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

const Category = () => {
    return (
        <div className=''>

            <SectionTitle
            subHeading={'From 11:00am to 10:00pm'}
            heading={'Order Online'}>
            </SectionTitle>

            <div 
                data-aos="zoom-in-up"
                data-aos-duration="2000">
                <Swiper
                    slidesPerView={4.5}
                    spaceBetween={30}
                    freeMode={true}
                    pagination={{
                    clickable: true,
                    }}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper mb-16"
                >
                    <SwiperSlide> <img src={slide_1} alt="" />
                    <h3 className='text-4xl text-center -mt-20 text-shadow uppercase text-white'>Salads</h3>
                    </SwiperSlide>

                    <SwiperSlide> <img src={slide_2} alt="" /> <h3 className='text-4xl text-center -mt-20 text-shadow uppercase text-white'>Pizzas</h3>
                    </SwiperSlide>

                    <SwiperSlide> <img src={slide_3} alt="" /> <h3 className='text-4xl text-center -mt-20 text-shadow uppercase text-white'>Soups</h3>
                    </SwiperSlide>

                    <SwiperSlide> <img src={slide_4} alt="" /> <h3 className='text-4xl text-center -mt-20 text-shadow uppercase text-white'>Desserts</h3>
                    </SwiperSlide>

                    <SwiperSlide> <img src={slide_5} alt="" /> <h3 className='text-4xl text-center -mt-20 text-shadow uppercase text-white'>Salads</h3>
                    </SwiperSlide>
                    
                </Swiper>
            </div>
             
        </div>
    );
};

export default Category;