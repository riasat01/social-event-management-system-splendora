import { useState } from "react";
import CategoryCarousel from "./CategoryCarousel";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import {AiOutlineArrowRight} from 'react-icons/ai'

const Category = () => {

    const [events, setEvents] = useState([]);
    useEffect(() => {
        fetch(`events.json`)
            .then(res => res.json())
            .then(data => {
                setEvents(data)
                // console.log(events)
            });
    }, [])
    // console.log(events.slice(0, 3));
    return (
        <section>
            <div className="flex justify-between items-center mx-4 md:mx-12">
                <h1 className="text-2xl md:text-5xl font-extrabold font-indie-flower my-12" data-aos="zoom-out">Category at a glance</h1>
                <div data-aos="zoom-in">
                <Link className="flex justify-center items-center bg-slate-700 bg-opacity-50 hover:bg-opacity-100 hover:bg-gradient-to-br from-orange-400 to-red-700 hover:text-white rounded-xl px-4 py-2 md:text-lg font-semibold" to={`/category`}>
                    <button>Veiw all </button>
                    <AiOutlineArrowRight></AiOutlineArrowRight>
                </Link>
                </div>
            </div>
            <div className="mx-4 md:mx-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <section className="lg:col-span-2" data-aos="fade-right">
                    <CategoryCarousel events={events?.slice(0, 4)}></CategoryCarousel>
                </section>
                <section className="lg:col-span-2" data-aos="fade-left">
                    <CategoryCarousel events={events?.slice(1, 5)}></CategoryCarousel>
                </section>
                <section className="lg:col-span-3" data-aos="fade-up-right">
                    <CategoryCarousel events={events?.slice(2, 6)}></CategoryCarousel>
                </section>
                <section data-aos="fade-down-left">
                    <CategoryCarousel events={events?.slice(4, 8)}></CategoryCarousel>
                </section>
                <section  data-aos="fade-up-right">
                    <CategoryCarousel events={events?.slice(5, 9)}></CategoryCarousel>
                </section>
                <section className="lg:col-span-3" data-aos="fade-up-left">
                    <CategoryCarousel events={events?.slice(6, 10)}></CategoryCarousel>
                </section>
            </div>
        </section>
    );
};

export default Category;