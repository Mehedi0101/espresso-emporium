import { BiArrowBack } from "react-icons/bi";
import { Link, useLoaderData } from "react-router-dom";

const CoffeeDetails = () => {
    const CoffeeDetails = useLoaderData();
    const { category, chef, details, name, photo, supplier, taste } = CoffeeDetails;
    return (
        <div className="md:px-20 px-5 font-raleway">
            <Link to="/"><button className="flex items-center text-3xl font-rancho text-[#374151] gap-2 my-5"><BiArrowBack className="text-xl"></BiArrowBack> to home</button></Link>
            <div className="flex justify-center items-center gap-x-20 gap-y-10 mt-20">
                <img className="w-80 h-80 object-cover rounded" src={photo} alt="" />
                <div className="text-[#5C5B5B] space-y-2">
                    <h2 className="text-[#331A15] font-rancho md:text-4xl text-3xl mb-10">{name}</h2>
                    <p><span className="text-[#1B1A1A] font-semibold">Chef: </span>{chef}</p>
                    <p><span className="text-[#1B1A1A] font-semibold">Supplier: </span>{supplier}</p>
                    <p><span className="text-[#1B1A1A] font-semibold">Taste: </span>{taste}</p>
                    <p><span className="text-[#1B1A1A] font-semibold">Category: </span>{category}</p>
                    <p><span className="text-[#1B1A1A] font-semibold">Details: </span>{details}</p>
                </div>
            </div>
        </div>
    );
};

export default CoffeeDetails;