/* eslint-disable react/jsx-key */
// import { useContext } from "react";
// import { ProviderContext } from "../../provider/provider";

import { Link, useLoaderData, useParams } from "react-router-dom";

const Details = () => {
    // const getDetailsData = useContext(ProviderContext)
    const takeDetailsData = useLoaderData()
    const currentID = useParams()
    console.log(takeDetailsData)
    console.log(currentID)
    const eventDetails = takeDetailsData?.find(details => details.id == currentID.id)
    console.log(eventDetails)

    return (
        <div className="w-full bg-base-200 min-h-screen">
            <div className="max-w-[1200px] mx-auto pt-[150px] flex justify-between">
                <div className="asidebar-category min-w-[270px]">
                    <div className="c-h text-center font-bold text-[20px] bg-gray-300 inline-block min-w-full p-[20px]">
                        <h2>Services</h2>
                    </div>
                    <div className="items flex flex-col pt-[40px] gap-6">
                        {
                            takeDetailsData.map(data => (
                                <>
                                    <Link className="text-[25px] font-bold text-gray-500 hover:text-[#ffd909]" 
                                    to={`/details/${data.id}`}>{`${data.title}`}</Link>
                                    <div className="min-w-full min-h-[2px] bg-slate-400"></div>
                                </>
                            ))
                        }
                    </div>
                </div>
                <div className="details-container">
                    <div className="detail-img mb-[60px]">
                        <img className="max-w-[870px]" src={`${eventDetails.image}`} alt="" />
                    </div>
                    <div className="details-text max-w-[870px] mb-[100px]">
                        <h className="text-[30px] font-bold">{`${eventDetails.title}`}</h>
                        <p className="font-bold text-gray-400 mt-[30px]">{`${eventDetails.details}`}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;