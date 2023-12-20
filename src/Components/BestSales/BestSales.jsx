import SectionTitle from "../../Shred/SectionTitle";




// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './style.css';

// import required modules
import { Pagination } from 'swiper/modules';
const BestSales = () => {
    return (
        <div className=" p-5 space-y-20">
            <SectionTitle hadding="Best sellers in September " />

            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                <img   src="https://i.ibb.co/LNHDxCk/images-3.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                <img  src="https://i.ibb.co/j45b4Vp/images-4.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                <img  src="https://i.ibb.co/pbFk8sR/juices-shutterstock-121270552.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                <img  src="https://i.ibb.co/16yjRwg/download-4.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                <img  src="https://i.ibb.co/cDTjjNZ/97778960.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                <img   src="https://i.ibb.co/LNHDxCk/images-3.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                <img  src="https://i.ibb.co/j45b4Vp/images-4.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                <img  src="https://i.ibb.co/pbFk8sR/juices-shutterstock-121270552.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                <img  src="https://i.ibb.co/16yjRwg/download-4.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                <img  src="https://i.ibb.co/cDTjjNZ/97778960.jpg" alt="" />
                </SwiperSlide>
                
            </Swiper>

        </div>
    );
};

export default BestSales;