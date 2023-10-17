import Proptypes from "prop-types";
import { AiOutlineEye } from "react-icons/ai";
import { BsFillPencilFill, BsTrash } from "react-icons/bs";
import { Link } from "react-router-dom";

const Coffee = ({ coffee }) => {
    const { _id, chef, name, photo, price } = coffee;

    return (
        <div className="flex items-center justify-between">
            <img className="w-2/5 object-cover max-h-60 max-w-60 rounded" src={photo} alt="" />
            <div className="text-lg text-[#5C5B5B] w-2/5">
                <p><span className="font-semibold text-[#1B1A1A]">Name: </span>{name}</p>
                <p><span className="font-semibold text-[#1B1A1A]">Chef: </span>{chef}</p>
                <p><span className="font-semibold text-[#1B1A1A]">Price: </span>{price}</p>
            </div>
            <div className="flex flex-col gap-4">
                <Link to={`/coffee-details/${_id}`}><button className="p-3 bg-[#D2B48C] active:scale-95 transition-transform rounded"><AiOutlineEye className="text-xl text-white" /></button></Link>
                <button className="p-3 bg-[#3C393B] active:scale-95 transition-transform rounded"><BsFillPencilFill className="text-xl text-white" /></button>
                <button className="p-3 bg-[#EA4744] active:scale-95 transition-transform rounded"><BsTrash className="text-xl text-white" /></button>
            </div>
        </div>
    );
};

Coffee.propTypes = {
    coffee: Proptypes.object.isRequired
}

export default Coffee;