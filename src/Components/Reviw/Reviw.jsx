
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import './styles.css';

// import required modules
import { EffectCards } from 'swiper/modules';
import { Rating } from '@mui/material';


const Reviw = () => {
    return (
        <div className=' p-10 bg-green-500 m-5' >
            <div className=' text-center md:m-10 text-white'>
                <h3 className=' text-4xl font-bold'>Our Client Say</h3>
                <p className=' text-xl'>Tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras</p>
            </div>
            <div className=' mx-auto md:w-2/3'>
                <Swiper
                    effect={'cards'}
                    grabCursor={true}
                    modules={[EffectCards]}
                    className="mySwiper w-96"
                    
                >
                    <SwiperSlide>
                        <div className=' p-4'>
                            <div>
                                <div className=' space-y-2'>
                                    <img className=' silder-img mx-auto rounded-full' src="https://i.ibb.co/WPnztQd/team-2.webp" alt="" />
                                    <p className=' text-2xl font-semibold'>Emmy Rizaaa</p>
                                    <p>Bangladesh</p>
                                </div>

                            </div>
                            <div className='space-y-3' style={{ backgroundImage: "url(https://i.ibb.co/XbHqDn2/Untitled-3.webp)", backgroundRepeat: "no-repeat" }}>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id culpa esse deserunt suscipit ducimus quisquam, fugiat temporibus harum quibusdam aut minus. Veritatis illo impedit optio dolorem, ipsa quidem perspiciatis ad cumque, </p>
                                <Rating name="size-medium" defaultValue={2} />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=' p-4'>
                            <div>
                                <div className=' space-y-2'>
                                    <img className=' silder-img mx-auto rounded-full' src="https://i.ibb.co/WPnztQd/team-2.webp" alt="" />
                                    <p className=' text-2xl font-semibold'>Emmy Rizaaa</p>
                                    <p>Bangladesh</p>
                                </div>

                            </div>
                            <div className='space-y-3' style={{ backgroundImage: "url(https://i.ibb.co/XbHqDn2/Untitled-3.webp)", backgroundRepeat: "no-repeat" }}>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id culpa esse deserunt suscipit ducimus quisquam, fugiat temporibus harum quibusdam aut minus. Veritatis illo impedit optio dolorem, ipsa quidem perspiciatis ad cumque, </p>
                                <Rating name="size-medium" defaultValue={5} />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=' p-4'>
                            <div>
                                <div className=' space-y-2'>
                                    <img className=' silder-img mx-auto rounded-full' src="https://i.ibb.co/WPnztQd/team-2.webp" alt="" />
                                    <p className=' text-2xl font-semibold'>Emmy Rizaaa</p>
                                    <p>Bangladesh</p>
                                </div>

                            </div>
                            <div className='space-y-3' style={{ backgroundImage: "url(https://i.ibb.co/XbHqDn2/Untitled-3.webp)", backgroundRepeat: "no-repeat" }}>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id culpa esse deserunt suscipit ducimus quisquam, fugiat temporibus harum quibusdam aut minus. Veritatis illo impedit optio dolorem, ipsa quidem perspiciatis ad cumque, </p>
                                <Rating name="size-medium" defaultValue={5} />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=' p-4'>
                            <div>
                                <div className=' space-y-2'>
                                    <img className=' silder-img mx-auto rounded-full' src="https://i.ibb.co/WPnztQd/team-2.webp" alt="" />
                                    <p className=' text-2xl font-semibold'>Emmy Rizaaa</p>
                                    <p>Bangladesh</p>
                                </div>

                            </div>
                            <div className='space-y-3' style={{ backgroundImage: "url(https://i.ibb.co/XbHqDn2/Untitled-3.webp)", backgroundRepeat: "no-repeat" }}>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id culpa esse deserunt suscipit ducimus quisquam, fugiat temporibus harum quibusdam aut minus. Veritatis illo impedit optio dolorem, ipsa quidem perspiciatis ad cumque, </p>
                                <Rating name="size-medium" defaultValue={4} />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=' p-4'>
                            <div>
                                <div className=' space-y-2'>
                                    <img className=' silder-img mx-auto rounded-full' src="https://i.ibb.co/WPnztQd/team-2.webp" alt="" />
                                    <p className=' text-2xl font-semibold'>Emmy Rizaaa</p>
                                    <p>Bangladesh</p>
                                </div>

                            </div>
                            <div className='space-y-3' style={{ backgroundImage: "url(https://i.ibb.co/XbHqDn2/Untitled-3.webp)", backgroundRepeat: "no-repeat" }}>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id culpa esse deserunt suscipit ducimus quisquam, fugiat temporibus harum quibusdam aut minus. Veritatis illo impedit optio dolorem, ipsa quidem perspiciatis ad cumque, </p>
                                <Rating name="size-medium" defaultValue={3} />
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Reviw;
