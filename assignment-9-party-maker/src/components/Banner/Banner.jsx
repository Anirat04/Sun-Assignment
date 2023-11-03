import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { useEffect } from "react";

/* eslint-disable react/no-unescaped-entities */
const Banner = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            offset: 200,
            easing: 'linear',
            // Other options...
        });
    }, []); // Run once after the component mounts
    return (
        <div>
            <div className="hero place-items-start items-center " style={{ backgroundImage: 'url(https://i.ibb.co/FJ2fT0Z/banner.jpg)' }}>
                <div className="hero-overlay bg-opacity-40 max-h-screen min-h-screen "></div>
                {/* <div className="hero-overlay bg-opacity-60 "></div> */}
                <div className="max-w-[1200px] mx-auto text-center">

                    <div className="hero-content text-neutral-content">
                        <div className="max-w-full">
                            <h1
                                className="mb-[50px] text-5xl text-white"
                                // data-aos="fade"
                                data-aos="fade-left"
                                style={
                                    { fontFamily: "'Pacifico', cursive" }

                                }>
                                let's have a party!
                            </h1>
                            <h1
                                className="mb-8 text-[140px] font-bold leading-[140px] text-[#ffd909]"
                                data-aos="fade-right"
                                style={
                                    {
                                        fontFamily: "'Rubik', sans-serif"
                                    }
                                }>
                                We plan the <br /> best events
                            </h1>
                            <Link to="/register">
                                <button
                                    data-aos="fade-right"
                                    data-aos-anchor-placement="center-bottom"
                                    className="btn glass bg-white text-black border-none rounded-full px-[40px] text-[20px] font-bold">Register</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;