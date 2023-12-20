import logo from "../../assets/home/logo-27.png"
import { IoSearchSharp } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";
import { GrFavorite } from "react-icons/gr";
import { IoMdClose } from "react-icons/io";
import { FaAlignJustify } from "react-icons/fa";
import { useState } from "react";
import Categories from "./Categories";
const NavBar = () => {
    const [toggel, setToggel] = useState(true)
    const handelToggel = () => {
        setToggel(!toggel)
    }
    return (
        <nav className=" fixed bg-white z-30 p-5 max-w-7xl mx-auto shadow-lg">
            <div className=' flex items-center gap-3 justify-center'>
                <div className=" flex  items-center cursor-pointer">
                    <img className=" w-16" src={logo} alt="" />
                    <p className=" uppercase text-3xl text-blue-400 font-semibold">fresh pik</p>
                </div>
                <div className=" flex gap-3 items-center">
                    <div onClick={handelToggel} className=' hover:bg-sky-600 flex items-center gap-3 bg-sky-500 text-white p-3 rounded-lg cursor-pointer'>
                        <div className=" text-2xl">
                            {toggel ? <FaAlignJustify /> :
                                <IoMdClose />}
                        </div>
                        <p className=' text-2xl'>Categories</p>
                    </div>
                    <div className={` absolute top-24 left-20 ${toggel? "hidden":"block"}`}>
                            <Categories></Categories>
                    </div>
                    <div className=' flex justify-center space-x-2  py-2 px-6 rounded-lg border-2 border-gray-400'>
                        <input type="search" placeholder='Search... ' name="" id="" className='border-none outline-none w-[379px]  text-xl' />
                        <span className=' text-3xl'><IoSearchSharp /></span>
                    </div >
                    <div className=' flex gap-5'>
                        <select name="" id="" className=' text-lg p-2 bg-gray-100 rounded-lg'>
                            <option value="Lenguse">Lenguse</option>
                            <option value="Bangla">Bangla</option>
                            <option value="English">English</option>
                        </select>
                        <select name="" id="" className=' text-lg p-2 bg-gray-100 rounded-lg'>
                            <option value="Lenguse">Currency</option>
                            <option value="Bangla">TAKA</option>
                            <option value="English">USDT</option>
                            <option value="English">URO</option>
                        </select>
                    </div>
                    <div className=' text-2xl flex gap-5'>
                        <IoSearchSharp />
                        <GrFavorite />
                        <FaUserAlt />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;