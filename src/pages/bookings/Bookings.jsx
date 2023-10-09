import BookingCard from "../../components/booking-card/BookingCard";
import { getFromLocal } from "../../components/manage-bookings/ManageBookings";

const Bookings = () => {
    const bookings = getFromLocal();
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-4 md:mx-12 mt-20">
            {
                bookings.length ?
                bookings?.map((booking, i) => <BookingCard key={i} booking={booking}></BookingCard>)
                : <div className="col-span-4 flex justify-center items-center"><h1 className="w-fit">No data to show</h1></div>
            }
        </div>
    );
};

export default Bookings;