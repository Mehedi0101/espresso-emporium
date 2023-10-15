import icon1 from "../../assets/1.png";
import icon2 from "../../assets/2.png";
import icon3 from "../../assets/3.png";
import icon4 from "../../assets/4.png";

const Features = () => {
    return (
        <div className="grid md:grid-cols-4 grid-cols-1 lg:gap-x-10 md:gap-x-5 gap-y-10 px-5 md:px-20 py-10 bg-[#ECEAE3] text-center md:text-left">
            <div>
                <img className="mx-auto md:mx-0" src={icon1} alt="" />
                <h2 className="font-rancho lg:text-3xl md:text-2xl text-3xl text-[#331A15] mt-3 mb-1">Awesome Aroma</h2>
                <p className="text-sm md:text-xs lg:text-sm text-[#1B1A1A]">You will definitely be a fan of the design & aroma of your coffee</p>
            </div>
            <div>
                <img className="mx-auto md:mx-0" src={icon2} alt="" />
                <h2 className="font-rancho lg:text-3xl md:text-2xl text-3xl text-[#331A15] mt-3 mb-1">High Quality</h2>
                <p className="text-sm md:text-xs lg:text-sm text-[#1B1A1A]">We served the coffee to you maintaining the best quality</p>
            </div>
            <div>
                <img className="mx-auto md:mx-0" src={icon3} alt="" />
                <h2 className="font-rancho lg:text-3xl md:text-2xl text-3xl text-[#331A15] mt-3 mb-1">Pure Grades</h2>
                <p className="text-sm md:text-xs lg:text-sm text-[#1B1A1A]">The coffee is made of the green coffee beans which you will love</p>
            </div>
            <div>
                <img className="mx-auto md:mx-0" src={icon4} alt="" />
                <h2 className="font-rancho lg:text-3xl md:text-2xl text-3xl text-[#331A15] mt-3 mb-1">Proper Roasting</h2>
                <p className="text-sm md:text-xs lg:text-sm text-[#1B1A1A]">Your coffee is brewed by first roasting the green coffee beans</p>
            </div>
        </div>
    );
};

export default Features;