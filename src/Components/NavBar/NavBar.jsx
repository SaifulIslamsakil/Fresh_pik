import { NavLink } from "react-router-dom";
import logo from "../../assets/home/logo-27.png"
import PersonIcon from '@mui/icons-material/Person';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import DehazeIcon from '@mui/icons-material/Dehaze';
import CloseIcon from '@mui/icons-material/Close';
import { Box, Button } from "@mui/material";
import { useState } from "react";

const NavBar = () => {
    const [toggel, setToggel] = useState(true)
    const manu = <>
        <li><NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-sky-500 border-b-2 border-sky-600 py-1" : ""
            }
        >
            Home
        </NavLink>
        </li>
        <li><NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-sky-500 border-b-2 border-sky-600 py-1" : ""
            }
        >
            Blog
        </NavLink>
        </li>
        <li><NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-sky-500 border-b-2 border-sky-600 py-1" : ""
            }
        >
            Contact
        </NavLink>
        </li>
        <li><NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-sky-500 border-b-2 border-sky-600 py-1" : ""
            }
        >
            About
        </NavLink>
        </li>
        <li><NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-sky-500 border-b-2 border-sky-600 py-1" : ""
            }
        >
            Register
        </NavLink>
        </li>

    </>

    return (
        <nav>
            <div className=" flex justify-between p-7 items-center bg-white shadow-lg relative ">
                <div className=" lg:hidden" onClick={() => setToggel(!toggel)}>
                    {toggel ? <DehazeIcon></DehazeIcon> :
                        <CloseIcon></CloseIcon>}
                </div>
                <div className="hidden lg:flex items-center">
                    <img className=" w-14" src={logo} alt="" />
                    <h2 className=" text-3xl font-bold text-sky-500 uppercase">fresh Pik</h2>
                </div>
                <div className=" hidden lg:block">
                    <ul className=" text-xl font-semibold flex gap-5">
                        {manu}
                    </ul>
                </div>
                <div className={` bg-white border-r-2  lg:hidden absolute w-52 h-screen left-0 top-24  shadow-2xl p-4 ${toggel ? "-left-96" : "duration-500 "}`}>
                    <ul  className=" text-xl font-semibold  space-y-2">
                        {manu}
                    </ul>
                </div>
                <Box className="flex gap-2 justify-between items-center text-xl" >
                    <SearchRoundedIcon ></SearchRoundedIcon>
                    <FavoriteBorderIcon></FavoriteBorderIcon>
                    <PersonIcon></PersonIcon>
                    <Button variant="outlined" >
                        <ShoppingCartSharpIcon></ShoppingCartSharpIcon>
                        <span className=" font-semibold">cart $0.00</span>
                    </Button>
                </Box>
            </div>
        </nav>
    );
};

export default NavBar;