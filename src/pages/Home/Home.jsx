import Banner from "../../Components/Banner/Banner";
import BestOffer from "../../Components/BestOffer/BigSales ";
import Delivery from "../../Components/Delivery/Delivery";
import Items from "../../Components/Items/Items";

const Home = () => {
    return (
        <div >
            <Banner></Banner>
            <Items></Items>
            <BestOffer></BestOffer>
            <Delivery></Delivery>
        </div>
    );
};

export default Home;