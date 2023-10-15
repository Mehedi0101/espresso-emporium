const Banner = () => {
    return (
        <div className="hero min-h-[86vh]" style={{ backgroundImage: `url("/src/assets/banner-bg.png")` }}>
            <div className=""></div>
            <div className="hero-content text-neutral-content">
                <div className="md:w-1/2 ml-auto md:pr-5 pr-0 text-center md:text-left">
                    <h1 className="mb-5 lg:text-5xl text-4xl font-rancho">Would you like a Cup of Delicious Coffee?</h1>
                    <p className="mb-5 font-raleway leading-7 md:text-base text-sm">It&apos;s coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                    <button className="bg-[#E3B577] text-[#242222] font-rancho text-2xl py-2 px-5 rounded border-2 border-transparent hover:border-white hover:text-white hover:bg-transparent transition-all active:scale-95">Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;