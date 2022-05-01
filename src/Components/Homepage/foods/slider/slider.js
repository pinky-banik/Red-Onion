import React from 'react';
import { useNavigate } from 'react-router-dom';
// import Swiper core and required modules
import SwiperCore, {
    Keyboard, Navigation, Pagination
} from 'swiper';
import "swiper/css";
// Import Swiper styles
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import useFetch from '../../../../Hooks/useFetch';
import './slider.css';






// install Swiper modules
SwiperCore.use([Keyboard, Pagination, Navigation]);


const Slider = () => {
    const [foods] = useFetch()
    const navigate = useNavigate();
    return (
        <div className='p-10'>
            <Swiper slidesPerView={3} spaceBetween={30} keyboard={{
            "enabled": true
        }} pagination={{
            "clickable": true
        }} navigation={true} className="mySwiper">
            {foods.map(item => (
                <SwiperSlide>
                    <img className="w-36" src={item.image} alt={item.title} onClick={() => {
navigate(`/foods/${item.title}`)} }/>
                </SwiperSlide>
            ))}
        </Swiper>
        </div>
    )
}

export default Slider