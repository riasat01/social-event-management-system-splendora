import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CategoryCard = ({ event }) => {

    const { id, title, description, img, price } = event;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img className='h-56 w-full' src={img} alt={`image of ${title}`} /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <p>{price}</p>
                <div className="card-actions justify-end">
                    <Link to={`/category/${id}`}>
                        <button className="w-full bg-slate-700 bg-opacity-50 hover:bg-opacity-100 rounded-xl px-4 py-2 text-lg font-semibold">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

CategoryCard.propTypes = {
    event: PropTypes.object,
    title: PropTypes.string,
    description: PropTypes.string,
    img: PropTypes.string,
}

export default CategoryCard;