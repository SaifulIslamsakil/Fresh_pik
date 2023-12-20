import { Divider, TextField } from "@mui/material";
import SocalLogin from "../../Shred/SocalLogin";
import { useForm } from "react-hook-form";
import { AuthProvider } from "../../Provider/Provider";
import { useContext } from "react";


const Login = () => {
    const { loginUser } = useContext(AuthProvider)
    const {
        register,
        handleSubmit,
        // formState: { errors },
    } = useForm()

  
    return (
        <div>
            <div className=" w-full md:h-screen" style={{ backgroundImage: "url(https://i.ibb.co/LQm6nxy/intro-1681220544.jpg)", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}>
                <div className=" bg-black w-full h-full bg-opacity-30 flex md:justify-end  items-center " >
                    <div className=" bg-white mx-auto space-y-3  lg:w-[450px] rounded-lg p-10 md:mr-10">
                        <form action="" className="space-y-5"  >
                            <h1 className=" text-center text-3xl font-bold">Please Register</h1>

                            <div className=" grid grid-cols-1 space-y-5">
                                <div className="col-span-1">
                                    <TextField {...register("name")} className=" w-full" id="standard-basic" type="text" label="Name" variant="standard" name="name" />
                                </div>
                                <div className=" col-span-1">
                                    <TextField {...register("email")} className=" w-full" id="standard-basic" type="email" label="Email" variant="standard" name="email" />
                                </div>
                                <div className=" col-span-1">
                                    <TextField {...register("password")} className=" w-full" id="standard-basic" type="password" label="Password" variant="standard" name="password" />
                                </div>
                                <div>
                                    <p className=" text-lg">you have an account? <span className=" text-green-500 hover:underline">Please Login</span></p>
                                </div>
                                <input className=" w-full rounded-full bg-green-500 text-white p-3 hover:bg-green-700" type="submit" value="Register" />
                            </div>

                        </form>
                        <Divider className=" text-red-500 text-xl font-semibold">OR</Divider>

                        <div>
                            <SocalLogin></SocalLogin>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // https://docs.google.com/presentation/d/1C466--gfgbrO3V3lt5G89x4LgS1oOoPN/preview?slide=id.p1
    );
};

export default Login;