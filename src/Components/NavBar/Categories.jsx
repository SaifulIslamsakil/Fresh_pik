import { useEffect, useState } from "react";
import { FaBasketShopping } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { AiOutlineShop } from "react-icons/ai";
import { GiFruitBowl } from "react-icons/gi";
import { TbMeat } from "react-icons/tb";
import { PiFishSimpleFill } from "react-icons/pi";
import { TbBandage } from "react-icons/tb";
import { BiDrink } from "react-icons/bi";
import { PiDotsNineFill } from "react-icons/pi";
const Categories = () => {
    const [categoriesDatas, SetCategogiresData] = useState([])
    useEffect(() => {
        fetch("../../../public/Categoris.json")
            .then(res => res.json())
            .then(data => SetCategogiresData(data))
    }, [])
    console.log(categoriesDatas)
    return (
        <div className="  w-80  bg-white shadow-2xl rounded-lg p-5 space-y-3 overflow-y-auto">
            {
                categoriesDatas?.map(categorie => <div key={categorie.id} className=" flex items-center justify-between  border-b-2 border-green-300 p-2  hover:bg-green-100">
                    <div className="  flex gap-3 items-center">
                        <div  className="text-green-500 text-3xl">
                            {categorie.categoris === "Shop" ? <AiOutlineShop  /> : categorie.categoris === "Vegetables" ? <FaBasketShopping  /> : categorie.categoris === "Fresh fruit" ? <GiFruitBowl  /> : categorie.categoris === "Meat" ? <TbMeat  /> : categorie.categoris === "SeaFoods" ? <PiFishSimpleFill  /> : categorie.categoris === "Baking" ? <TbBandage  /> : categorie.categoris === "Drinks" ? <BiDrink  /> : <PiDotsNineFill  />}
                        </div>

                        <p className=" text-xl">{categorie.categoris}</p>
                    </div>
                    <IoIosArrowForward />

                </div>)
            }
        </div>
    );
};

export default Categories;