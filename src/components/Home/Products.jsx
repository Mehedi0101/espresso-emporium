import { Link, useLoaderData } from "react-router-dom";
import icon from "../../assets/1.png";
import { useState } from "react";
import Coffee from "./Coffee";

const Products = () => {
    const bgImg = {
        backgroundImage: `url("/src/assets/ProductsBg.png")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
    }

    const [coffees, setCoffees] = useState(useLoaderData());

    console.log(coffees);

    return (
        <div  style={bgImg} className="mt-20 min-h-[100vh] md:px-20 px-5 font-raleway">
            <h3 className="text-lg text-center text-[#1B1A1A] mb-1">--- Sip & Savor ---</h3>
            <h2 className="font-rancho text-5xl text-center text-[#331A15]">Our Popular Products</h2>
            <Link to='/add-coffee'><button className="bg-[#E3B577] text-[#242222] font-rancho text-2xl py-2 px-5 rounded border-2 border-[#331A15] hover:text-[#331A15] hover:bg-transparent transition-all active:scale-95 flex gap-2 items-center mx-auto mt-4">Add Coffee <img className="w-7" src={icon} alt="" /></button></Link>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-20">
                {
                    coffees.map(coffee => <Coffee key={coffee._id} coffee={coffee}></Coffee>)
                }
            </div>
        </div>
    );
};

export default Products;