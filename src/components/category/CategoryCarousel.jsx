import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CategoryCarousel = ({ events }) => {

    const card0 = {
    
        backgroundImage: `url(${events[0]?.img}), linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))`,
        backgroundBlendMode: `overlay`,
        backgroundSize: `cover`
    }
    const card1 = {
    
        backgroundImage: `url(${events[1]?.img}), linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))`,
        backgroundBlendMode: `overlay`,
        backgroundSize: `cover`
    }
    const card2 = {
    
        backgroundImage: `url(${events[2]?.img}), linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))`,
        backgroundBlendMode: `overlay`,
        backgroundSize: `cover`
    }
    const card3 = {
    
        backgroundImage: `url(${events[3]?.img}), linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))`,
        backgroundBlendMode: `overlay`,
        backgroundSize: `cover`
    }
    return (
        <div className="carousel w-full">

            
            <div id="item1" className="carousel-item w-full h-48 flex justify-center items-center flex-col" style={card0}>
                <h1 className='mb-4 text-3xl text-transparent font-semibold font-indie-flower bg-gradient-to-br from-orange-300 to-red-700 bg-clip-text'>{events[0]?.title}</h1>
                <p className="text-slate-300">{events[0]?.description}</p>
                <p className="text-slate-300">{events[0]?.price}</p>
                <Link to={`/category/${events[0]?.id}`}><button className="w-full bg-slate-700 bg-opacity-50 hover:bg-opacity-100 rounded-xl px-4 py-2 text-lg font-semibold">View Details</button></Link>
            </div>


            <div id="item2" className="carousel-item w-full h-48 flex justify-center items-center flex-col" style={card1}>
                <h1 className='mb-4 text-3xl text-transparent font-semibold font-indie-flower bg-gradient-to-br from-orange-300 to-red-700 bg-clip-text'>{events[1]?.title}</h1>
                <p className="text-slate-300">{events[0]?.description}</p>
                <p className="text-slate-300">{events[0]?.price}</p>
                <Link to={`/category/${events[1]?.id}`}><button className="w-full bg-slate-700 bg-opacity-50 hover:bg-opacity-100 rounded-xl px-4 py-2 text-lg font-semibold">View Details</button></Link>
            </div>


            <div id="item3" className="carousel-item w-full h-48 flex justify-center items-center flex-col" style={card2}>
                <h1 className='mb-4 text-3xl text-transparent font-semibold font-indie-flower bg-gradient-to-br from-orange-300 to-red-700 bg-clip-text'>{events[2]?.title}</h1>
                <p className="text-slate-300">{events[0]?.description}</p>
                <p className="text-slate-300">{events[0]?.price}</p>
                <Link to={`/category/${events[2]?.id}`}><button className="w-full bg-slate-700 bg-opacity-50 hover:bg-opacity-100 rounded-xl px-4 py-2 text-lg font-semibold">View Details</button></Link>
            </div>


            <div id="item4" className="carousel-item w-full h-48 flex justify-center items-center flex-col" style={card3}>
                <h1 className='mb-4 text-3xl text-transparent font-semibold font-indie-flower bg-gradient-to-br from-orange-300 to-red-700 bg-clip-text'>{events[3]?.title}</h1>
                <p className="text-slate-300">{events[0]?.description}</p>
                <p className="text-slate-300">{events[0]?.price}</p>
                <Link to={`/category/${events[3]?.id}`}><button className="w-full bg-slate-700 bg-opacity-50 hover:bg-opacity-100 rounded-xl px-4 py-2 text-lg font-semibold">View Details</button></Link>
            </div>


        </div>
    );
};

CategoryCarousel.propTypes = {
    events: PropTypes.array
}

export default CategoryCarousel;