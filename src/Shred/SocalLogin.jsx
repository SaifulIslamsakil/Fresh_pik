
import { Facebook, Google } from "@mui/icons-material";
import { useContext } from "react";
import { AuthProvider } from "../Provider/Provider";

const SocalLogin = () => {
    const {singInWithGoole,} =useContext(AuthProvider)
    const handelLoginwithGoogle=()=>{
        singInWithGoole()
        .then(res=>{
            console.log(res)
        })
        .cetch(error=>{
            console.log(error)
        })
    }
    return (
        <div className=" flex justify-around">
           <span onClick={handelLoginwithGoogle} className=" w-10 h-10 rounded-full bg-green-500 hover:bg-green-700 text-white flex justify-center items-center"> <Google></Google></span>
            <span className=" w-10 h-10 rounded-full bg-green-500 hover:bg-green-700 text-white flex justify-center items-center"><Facebook></Facebook></span>
        </div>
    );
};

export default SocalLogin;