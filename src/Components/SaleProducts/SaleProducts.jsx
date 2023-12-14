import { useEffect, useState } from "react";


const SaleProducts = () => {
    const [SaleProducts, setSaleProducts] = useState([])
    const [TopSelling, setTopSelling] = useState([])
    const [RecentlyAdded, setRecentlyAdded] = useState([])
    const [TopRated, setTopRated] = useState([])
    useEffect(() => {
        fetch("../../../public/SaleProducts.json")
            .then(res => res.json())
            .then(data => setSaleProducts(data))
    }, [])
    
    useEffect(() => {
        fetch("../../../public/TopSelling.json")
            .then(res => res.json())
            .then(data => setTopSelling(data))
    }, [])

    useEffect(() => {
        fetch("../../../public/RecentlyAdded.json")
            .then(res => res.json())
            .then(data => setRecentlyAdded(data))
    }, [])

    useEffect(() => {
        fetch("../../../public/TopRated.json")
            .then(res => res.json())
            .then(data => setTopRated(data))
    }, [])


    return (
        <div className="  grid md:grid-cols-2 lg:grid-cols-4 gap-3 text-gray-600   p-4">
            <div className=" col-span-1 space-y-3 ">
                <h2 className=" text-3xl font-bold">Sale Products</h2>
                {
                    SaleProducts?.map(product => <div key={product.id} className=" flex items-center gap-5   border-2 p-2 rounded-lg ">
                    <img className=" w-20" src={product.img} alt="" />
                    <div>
                        <h5 className=" text-xl font-bold">{product.title}</h5>
                        <p className=" font-bold text-green-500">${product.price}</p>
                    </div>

                </div>)
                }
            </div>
            <div className=" col-span-1 space-y-3 ">
                <h2 className=" text-3xl font-bold">Top Selling</h2>
                {
                    TopSelling?.map(Selling => <div key={Selling.id} className=" flex items-center gap-5   border-2 p-2 rounded-lg ">
                    <img className=" w-20" src={Selling.img} alt="" />
                    <div>
                        <h5 className=" text-xl font-bold">{Selling.title}</h5>
                        <p className=" font-bold text-green-500">${Selling.price}</p>
                    </div>

                </div>)
                }

            </div>
            <div className=" col-span-1 space-y-3 ">
                <h2 className=" text-3xl font-bold">Recently Added</h2>
                {
                   RecentlyAdded?.map( Recently => <div key={ Recently.id} className=" flex items-center gap-5   border-2 p-2 rounded-lg ">
                    <img className=" w-20" src={ Recently.img} alt="" />
                    <div>
                        <h5 className=" text-xl font-bold">{ Recently.title}</h5>
                        <p className=" font-bold text-green-500">${ Recently.price}</p>
                    </div>

                </div>)
                }
                
            </div>
            <div className=" col-span-1 space-y-3 ">
                <h2 className=" text-3xl font-bold">Top Rated</h2>
                {
                 TopRated?.map( Rated => <div key={ Rated.id} className=" flex items-center gap-5   border-2 p-2 rounded-lg ">
                    <img className=" w-20" src={ Rated.img} alt="" />
                    <div>
                        <h5 className=" text-xl font-bold">{ Rated.title}</h5>
                        <p className=" font-bold text-green-500">${ Rated.price}</p>
                    </div>

                </div>)
                }
            </div>
        </div>
    );
};

export default SaleProducts;