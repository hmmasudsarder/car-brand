import { Navigation, Pagination, Scrollbar,  Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay'
const Advertising = () => {
    return (
        <div>
            
            <Swiper
       modules={[Navigation, Pagination, Scrollbar,  Autoplay]}
       spaceBetween={50}
       slidesPerView={1}
       navigation
        autoplay={true}
       pagination={{ clickable: true }}
       className="swiper-slide" data-swiper-autoplay="2000"
       
      >
         <SwiperSlide>
            <img src={'https://i.ibb.co/9hH9SjT/bmw-m8-competition-individual-rosso-corsa-stage-teaser-02.png'} alt="" style={{width: "100%", height: "100vh"}} />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://i.ibb.co/gvnGQxp/20220525124948-bmw-jahre-front-with-gold-wheels.jpg" alt="" style={{width: "100%", height: "100vh"}}/>
        </SwiperSlide>
        <SwiperSlide>
            <img src={'https://i.ibb.co/0JXKhtX/81ae56354cedeff9c8a528ac419af4d8.jpg'} alt="" style={{width: "100%", height: "100vh"}}/>
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://i.ibb.co/KFWFsbk/47eb7001aa5a69cf56e22798fd7da9aa.png" alt="" style={{width: "100%", height: "100vh"}}/>
        </SwiperSlide>
        
        ...
      </Swiper>
    </div>
    );
};

export default Advertising;