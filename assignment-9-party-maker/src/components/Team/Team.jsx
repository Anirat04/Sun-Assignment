import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { useEffect } from "react";
const Team = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            offset: 200,
            easing: 'linear',
            // Other options...
        });
    }, []); // Run once after the component mounts
    return (
        <div className="my-[150px]">
            <div className="common-heading text-center mb-[100px]">
                <h3
                    data-aos="fade-right"
                    data-aos-anchor-placement="center-bottom"
                    className="text-3xl text-black"
                    style={{ fontFamily: "'Pacifico', cursive" }}>
                    Our best team
                </h3>
                <h2
                    className="text-[#ff5f6a] text-[60px] font-bold"
                    style={
                        {
                            fontFamily: "'Rubik', sans-serif"
                        }
                    }>
                    Our Team of Professionals
                </h2>
            </div>
            <div className="team-container flex justify-center gap-8">
                <div
                    data-aos="fade-right"
                    data-aos-anchor-placement="center-bottom" 
                    className="card w-96 bg-base-100 shadow-xl rounded-none">
                    <figure><img className="min-w-full" src="https://i.ibb.co/LJbpLJn/team1-370x370.jpg" alt="Shoes" /></figure>

                    <div className="card-body flex items-center text-center bg-[#f4f3f0]">
                        <h2 className="card-title text-black font-bold text-[26px]">Julia Mann</h2>
                        <p className="font-bold text-gray-400 text-[18px]">Co-Founder</p>
                    </div>
                </div>
                <div
                    data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom" 
                    className="card w-96 bg-base-100 shadow-xl rounded-none">
                    <figure><img className="min-w-full" src="https://i.ibb.co/xqj4TBW/team2-370x370.jpg" alt="Shoes" /></figure>

                    <div className="card-body flex items-center text-center bg-[#f4f3f0]">
                        <h2 className="card-title text-black font-bold text-[26px]">Sofie Gilmor</h2>
                        <p className="font-bold text-gray-400 text-[18px]">Co-Founder</p>
                    </div>
                </div>
                <div
                    data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom" 
                    className="card w-96 bg-base-100 shadow-xl rounded-none">
                    <figure><img className="min-w-full" src="https://i.ibb.co/0YbmYfG/team3-370x370.jpg" alt="Shoes" /></figure>

                    <div className="card-body flex items-center text-center bg-[#f4f3f0]">
                        <h2 className="card-title text-black font-bold text-[26px]">Jessica Smith</h2>
                        <p className="font-bold text-gray-400 text-[18px]">Designer</p>
                    </div>
                </div>
                <div
                    data-aos="fade-left"
                    data-aos-anchor-placement="center-bottom" 
                    className="card w-96 bg-base-100 shadow-xl rounded-none">
                    <figure><img className="min-w-full" src="https://i.ibb.co/C0q8ktj/team4-370x370.jpg" alt="Shoes" /></figure>

                    <div className="card-body flex items-center text-center bg-[#f4f3f0]">
                        <h2 className="card-title text-black font-bold text-[26px]">Ann Wagner</h2>
                        <p className="font-bold text-gray-400 text-[18px]">Designer</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;