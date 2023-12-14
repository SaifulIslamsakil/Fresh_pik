
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
    return (
        <Carousel autoPlay="true" infiniteLoop="true" interval={5000}>
        <div>
            
            <img src="https://i.ibb.co/zfB4Xn7/1651835804-sell-gro-copy.jpg" />
        </div>
        <div>
            <img src="https://i.ibb.co/7NG6hnz/image.jpg" />
        </div>
        <div>
            <img src="https://i.ibb.co/QDNhtQH/good-supermarket-horizontal-banner-vector.jpg" />
           
        </div>
    </Carousel>
    );
};

export default Banner;