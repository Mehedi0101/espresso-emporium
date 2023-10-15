import logo from '../../assets/logo1.png';

const Header = () => {
    const bgImg = {
        backgroundImage: `url("/src/assets/15.jpg")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
    }

    return (
        <div style={bgImg} className='flex items-center justify-center gap-2 p-4'>
            <img className='lg:w-14 w-10' src={logo} alt="" />
            <h1 className="font-rancho 2xl:text-5xl lg:text-4xl sm:text-3xl text-2xl text-white">Espresso Emporium</h1>
        </div>
    );
};

export default Header;