import PropTypes from 'prop-types';

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
            <div id="item1" className="carousel-item w-full h-96 flex justify-center items-center flex-col" style={card0}>
                {/* <img src={events[0]?.img} className="h-48 w-full" /> */}
                <h1>{events[0]?.title}</h1>
            </div>
            <div id="item2" className="carousel-item w-full h-96 flex justify-center items-center flex-col" style={card1}>
                {/* <img src={events[1]?.img} className="h-48 w-full" /> */}
                <h1>{events[1]?.title}</h1>
            </div>
            <div id="item3" className="carousel-item w-full h-96 flex justify-center items-center flex-col" style={card2}>
                {/* <img src={events[2]?.img} className="h-48 w-full" /> */}
                <h1>{events[2]?.title}</h1>
            </div>
            <div id="item4" className="carousel-item w-full h-96 flex justify-center items-center flex-col" style={card3}>
                {/* <img src={events[3]?.img} className="h-48 w-full" /> */}
                <h1>{events[3]?.title}</h1>
            </div>
        </div>
    );
};

CategoryCarousel.propTypes = {
    events: PropTypes.array
}

export default CategoryCarousel;