
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { useEffect } from "react";

const Testimonial = () => {
    const gradientStyle = {
        background: 'linear-gradient(135deg, rgba(255, 105, 0, 0.6) 0%, rgba(207, 46, 46, 0.6) 100%)',
        // You can add other styles here as needed
        width: '100%',
        height: '100vh', // Adjust height as needed
    };
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
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/FJ2fT0Z/banner.jpg)' }}>
                <div className="hero-overlay" style={
                    gradientStyle
                }></div>
                <div className="hero-content text-center text-neutral-content">
                    <div>
                        <div className="common-heading text-center mb-[40px]">
                            <h3
                                data-aos="fade-right"
                                data-aos-anchor-placement="center-bottom"
                                className="text-3xl text-white"
                                style={{ fontFamily: "'Pacifico', cursive" }}>
                                Testimonial
                            </h3>
                            <h2
                                data-aos="fade-left"
                                data-aos-anchor-placement="center-bottom"
                                className="text-[#ffd909] text-[60px] font-bold"
                                style={
                                    {
                                        fontFamily: "'Rubik', sans-serif"
                                    }
                                }>
                                Satisfied Clients About Us
                            </h2>
                        </div>
                        <div className="card shadow-xl flex-row gap-6">

                            <div
                                data-aos="fade-right"
                                data-aos-anchor-placement="center-bottom"
                                className="card-body items-center text-center bg-white">
                                <p className="text-gray-500 font-bold">I’ve hired this company for my son’s tenth birthday, and, honestly, it turned out to be the best decision I could have made! If you’re still on the fence, I strongly suggest you give these guys a chance – you won’t regret it.”</p>
                                <figure className="px-10 pt-10">
                                    <img src="https://i.ibb.co/gdHsWLC/testi-1.png" alt="Shoes" className="rounded-xl" />
                                </figure>
                                <h2 className="card-title text-black">Julia Willams</h2>
                            </div>
                            <div
                                data-aos="fade-up"
                                data-aos-anchor-placement="center-bottom"
                                className="card-body items-center text-center bg-white">
                                <p className="text-gray-500 font-bold">I’ve hired this company for my son’s tenth birthday, and, honestly, it turned out to be the best decision I could have made! If you’re still on the fence, I strongly suggest you give these guys a chance – you won’t regret it.”</p>
                                <figure className="px-10 pt-10">
                                    <img src="https://i.ibb.co/JH444bs/testi-2.png" alt="Shoes" className="rounded-xl" />
                                </figure>
                                <h2 className="card-title text-black">Elizabeth Growth</h2>
                            </div>
                            <div
                                data-aos="fade-left"
                                data-aos-anchor-placement="center-bottom"
                                className="card-body items-center text-center bg-white">
                                <p className="text-gray-500 font-bold">I’ve hired this company for my son’s tenth birthday, and, honestly, it turned out to be the best decision I could have made! If you’re still on the fence, I strongly suggest you give these guys a chance – you won’t regret it.”</p>
                                <figure className="px-10 pt-10">
                                    <img src="https://i.ibb.co/84bVbwR/testi-4.jpg" alt="Shoes" className="rounded-xl" />
                                </figure>
                                <h2 className="card-title text-black">John Snow</h2>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Testimonial;