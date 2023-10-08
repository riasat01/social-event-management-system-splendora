const getFromLocal = () => {
    const bookings = JSON.parse(localStorage.getItem(`bookings`));
    return bookings ? bookings : [];
}

const setToLocal = (item) => {
    const bookings = getFromLocal();
    console.log(bookings, item);
    const exists = bookings?.find(booking => booking.id === item.id)
    if(exists){
        alert(`duplicates not allowed`);
    }else{
        bookings.push(item);
        alert(`Successfully added`);
    }
    localStorage.setItem('bookings', JSON.stringify(bookings));
}

export {setToLocal, getFromLocal};