import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { setToLocal } from "../../components/manage-bookings/ManageBookings";

const CategoryDetails = () => {
    const [event, setEvent] = useState({});
    const events = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    // console.log(events);
    useEffect(() => {
        const _ = events?.find(data => data.id === idInt);
        setEvent(_);
        // console.log(_);
    }, [])
    // console.log(event);
    const { img, title, details, price } = event;
    return (
        <div className="lg:w-2/3 mx-4 md:mx-12 lg:mx-auto shadow-2xl my-36 md:my-24 rounded-3xl space-y-6">
            <img className="rounded-t-3xl h-64 md:h-96 w-full" src={img} alt={`image of ${title}`} />
            <div className="p-4 md:p-8 space-y-6">
                <h1 className="text-5xl font-bold font-indie-flower">{title}</h1>
                <p className="text-justify">{details}</p>
                <p>{price}</p>
                <button onClick={() => setToLocal(event)} className=" bg-slate-700 bg-opacity-50 hover:bg-opacity-100 hover:bg-gradient-to-br from-orange-400 to-red-700 hover:text-white rounded-xl px-4 py-2 font-semibold">Book Now</button>
            </div>
        </div>
    );
};

export default CategoryDetails;