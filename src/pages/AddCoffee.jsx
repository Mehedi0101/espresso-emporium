import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AddCoffee = () => {
    const handleAddCoffee = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const price = form.price.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee = { name, chef, price, supplier, taste, category, details, photo }

        fetch("https://espresso-emporium-server-six-kohl.vercel.app/coffees", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Success',
                        text: 'Coffee Added Successfully',
                    })
                }
            })
    }
    return (
        <div className="md:px-20 px-5 font-raleway">
            <Link to="/"><button className="flex items-center text-3xl font-rancho text-[#374151] gap-2 my-5"><BiArrowBack className="text-xl"></BiArrowBack> to home</button></Link>
            <h2 className="text-center text-[#374151] font-rancho md:text-4xl text-3xl">Add New Coffee</h2>
            <p className="text-center lg:w-2/3 w-full mx-auto lg:text-base text-sm my-4 text-[#1b1a1ab3]">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            <form onSubmit={handleAddCoffee}>
                <div className="mt-20 grid grid-cols-2 gap-x-5 gap-y-10">
                    <div>
                        <label className="text-[#1b1a1acc] text-lg font-semibold" htmlFor="name">Name</label>
                        <input className="w-full px-3 py-2 outline-none mt-2" type="text" name="name" placeholder="Enter coffee name" required />
                    </div>
                    <div>
                        <label className="text-[#1b1a1acc] text-lg font-semibold" htmlFor="chef">Chef</label>
                        <input className="w-full px-3 py-2 outline-none mt-2" type="text" name="chef" placeholder="Enter coffee chef" required />
                    </div>
                    <div>
                        <label className="text-[#1b1a1acc] text-lg font-semibold" htmlFor="price">Price</label>
                        <input className="w-full px-3 py-2 outline-none mt-2" type="text" name="price" placeholder="Enter price" required />
                    </div>
                    <div>
                        <label className="text-[#1b1a1acc] text-lg font-semibold" htmlFor="supplier">Supplier</label>
                        <input className="w-full px-3 py-2 outline-none mt-2" type="text" name="supplier" placeholder="Enter coffee supplier" required />
                    </div>
                    <div>
                        <label className="text-[#1b1a1acc] text-lg font-semibold" htmlFor="taste">Taste</label>
                        <input className="w-full px-3 py-2 outline-none mt-2" type="text" name="taste" placeholder="Enter coffee taste" required />
                    </div>
                    <div>
                        <label className="text-[#1b1a1acc] text-lg font-semibold" htmlFor="category">Category</label>
                        <input className="w-full px-3 py-2 outline-none mt-2" type="text" name="category" placeholder="Enter coffee category" required />
                    </div>
                    <div>
                        <label className="text-[#1b1a1acc] text-lg font-semibold" htmlFor="details">Details</label>
                        <input className="w-full px-3 py-2 outline-none mt-2" type="text" name="details" placeholder="Enter coffee details" required />
                    </div>
                    <div>
                        <label className="text-[#1b1a1acc] text-lg font-semibold" htmlFor="photo">Photo</label>
                        <input className="w-full px-3 py-2 outline-none mt-2" type="text" name="photo" placeholder="Enter photo URL" required />
                    </div>
                </div>
                <input className="bg-[#D2B48C] text-[#242222] font-rancho text-2xl py-2 px-5 rounded border-2 border-[#331A15] hover:text-[#331A15] hover:bg-transparent transition-all active:scale-95 flex gap-2 items-center mx-auto mt-4 w-full cursor-pointer" type="submit" value="Add Coffee" />
            </form>
        </div>
    );
};

export default AddCoffee;