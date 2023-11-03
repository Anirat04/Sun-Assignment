/* eslint-disable react/jsx-key */
import { useContext } from "react";
import { ProviderContext } from "../../provider/provider";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { useEffect } from "react";


const Services = () => {

    const providerInfo = useContext(ProviderContext)
    console.log(providerInfo.servicesData);
    const getServiceData = providerInfo.servicesData
    // const mapTheServiceData = getServiceData.map(service => service.id)
    useEffect(() => {
        AOS.init({
            duration: 800,
            offset: 200,
            easing: 'linear',
            // Other options...
        });
    }, []); // Run once after the component mounts
    return (
        <div className="mt-[100px] mb-[100px]">
            <div
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
                className="common-heading text-center">
                <h3
                    className="text-3xl text-black"
                    style={{ fontFamily: "'Pacifico', cursive" }}>
                    Our services
                </h3>
                <h2
                    className="text-[#ff5f6a] text-[60px] font-bold"
                    style={
                        {
                            fontFamily: "'Rubik', sans-serif"
                        }
                    }>
                    What We Offer
                </h2>
            </div>
            <div className="service-container max-w-[1200px] mx-auto grid grid-cols-3 gap-6 mt-12">
                {
                    getServiceData?.map(data => (
                        <div
                            data-aos="fade-right"
                            data-aos-anchor-placement="center-bottom"
                            key={data.id}
                            className="card card-compact w-96 bg-base-100 shadow-xl">
                            <figure><img className="max-h-[215px] min-w-full" src={`${data.image}`} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title font-bold">{data.title}</h2>
                                <p className="font-bold text-gray-400">{data.description}</p>
                                <p className="pl-[5px] font-bold">Price: ${data.price}</p>
                                <div className="card-actions">
                                    <Link to={`/details/${data.id}`}>
                                        <button className="btn btn-primary border-none text-white font-bold bg-[#ffd909] hover:bg-[#ff8a48] rounded-full px-[35px] mb-[10px]">Details</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Services;