import SectionTitle from "../../Shred/SectionTitle"
import { useEffect, useState } from "react";
import SaleProducts from "../SaleProducts/SaleProducts";


const BigSales = () => {
    const [BigSalesDatas, setBigSleasDatas ] = useState([])
    useEffect(()=>{
        fetch("../../../public/BigSales.json")
        .then(res=>res.json())
        .then(data => setBigSleasDatas(data))
    },[])
     
    return (
        <div className="my-10 p-5">
            <SectionTitle
                hadding="Big Sales Today"
            ></SectionTitle>
           <div className=" my-20 gap-3 grid md:grid-cols-3 lg:grid-cols-5">
                   {
                    BigSalesDatas?.map(data =>  <div key={data.id} className=" shadow-lg border-2 relative border-sky-500 p-3">
                    <img src={data.img} alt="" />
                    <p className=" bg-green-500 text-white  px-4 left-5 rounded-full  absolute top-4 text-xl">-{data.discount}</p>
                        <div className=" space-y-1" >
                            <h3 className=" text-xl font-semibold">{data.title}</h3>
                        
                                <p>{data.product_name}</p>
                                <h4 className=" text-xl line-through ">${data.price}</h4>
                                <h4 className=" text-2xl font-bold text-green-500 ">$120</h4>
                                <button className=" w-full bg-green-500 py-2 rounded-lg  text-white font-semibold hover:bg-green-700 ">Add to card</button>
                           
                        </div>
                </div>)
                   }
                    
                </div>

               <div>
                <SaleProducts></SaleProducts>
                </div> 
        </div>
    );
};

export default BigSales;