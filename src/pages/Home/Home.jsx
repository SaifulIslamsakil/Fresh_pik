import Banner from "../../Components/Banner/Banner";
import BestOffer from "../../Components/BestOffer/BigSales ";
import BestSales from "../../Components/BestSales/BestSales";
import Delivery from "../../Components/Delivery/Delivery";
import Items from "../../Components/Items/Items";
import Reviw from "../../Components/Reviw/Reviw";

const Home = () => {
    return (
        <div >
            <Banner></Banner>
            <Items></Items>
            <BestSales></BestSales>
            <Delivery></Delivery>
            <BestOffer></BestOffer>
            <Reviw></Reviw>
        </div>
    );
};

export default Home;