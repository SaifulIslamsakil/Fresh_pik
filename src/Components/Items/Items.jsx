import { useEffect, useState } from "react";


const Items = () => {
    const [items,setItems] = useState([])
    useEffect(()=>{
        fetch("../../../public/ItemsData.json")
       .then(res=> res.json())
       .then(data => setItems(data))
    },[])

    console.log(items)
    return (
        <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-5 p-5">
            {
                items?.map(item => <div key={item.id}  className=" relative">
                <img src={item?.img} alt="" />
                <button className="text-center text-xl font-semibold bg-black bg-opacity-80 rounded-lg w-full absolute bottom-4 text-white py-2 uppercase hover:bg-sky-500 btn">Shop now</button>
            </div>)
            }
        </div>
    );
};

export default Items;