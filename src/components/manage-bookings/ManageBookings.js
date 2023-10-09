import swal from 'sweetalert';

const getFromLocal = () => {
    const bookings = JSON.parse(localStorage.getItem(`bookings`));
    return bookings ? bookings : [];
}

const setToLocal = (item) => {
    const bookings = getFromLocal();
    console.log(bookings, item);
    const exists = bookings?.find(booking => booking.id === item.id)
    if(exists){
        swal(`Error`, `duplicates not allowed`, `error`);
    }else{
        bookings.push(item);
        swal(`Error`, `Successfully added`, `error`);
    }
    localStorage.setItem('bookings', JSON.stringify(bookings));
}

export {setToLocal, getFromLocal};