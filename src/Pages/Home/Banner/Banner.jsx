//awesome react website --> carousel --> choice poper slider name then copy and import

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import slider_1 from '../../../assets/home/01.jpg'
import slider_2 from '../../../assets/home/02.jpg'
import slider_3 from '../../../assets/home/03.png'
import slider_4 from '../../../assets/home/04.jpg'
import slider_5 from '../../../assets/home/05.png'
import slider_6 from '../../../assets/home/06.png'


const Banner = () => {
    return (
        <div data-aos="feed-up "
        data-aos-duration="5000" >
            <Carousel className=''>
                <div>
                    <img src={slider_1} />
                </div>
                <div>
                    <img src={slider_2} />
                </div>
                <div>
                    <img src={slider_3} />
                </div>
                <div>
                    <img src={slider_4} />
                </div>
                <div>
                    <img src={slider_5} />
                </div>
                <div>
                    <img src={slider_6} />
                </div>
            </Carousel>
            
        </div>
    );
};

export default Banner;