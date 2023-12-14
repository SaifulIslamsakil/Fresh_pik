

const Delivery = () => {
    return (
        <div className=" my-20 m-5  lg:h-[450px] bg-green-600 rounded-lg lg:flex px-5 justify-between items-center"> 
        <img className=" lg:w-[520px]  relative -top-16 " src="https://i.ibb.co/7jgYT0H/tastydaily-2805536912.webp" alt="" />
            <div className=" space-y-3 p-4">
            <h2 className=" text-5xl font-semibold text-white">We Delivery on Next Day from 10:00 AM to 08:00 PM</h2>
            <p className=" text-xl text-white font-semibold">For Orders starts from $100</p>
            <button className=" bg-white hover:bg-black text-green-500 font-bold hover:bg-opacity-70 hover:text-white rounded-full py-3 px-7 text-center">Read more</button>
            </div>
        </div>
    );
};

export default Delivery;