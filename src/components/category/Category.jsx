import { useState } from "react";
import CategoryCarousel from "./CategoryCarousel";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Category = () => {

    const [events, setEvents] = useState([]);
    useEffect(() => {
        fetch(`events.json`)
            .then(res => res.json())
            .then(data => {
                setEvents(data)
                console.log(events)
            });
    }, [])
    console.log(events.slice(0, 3));
    return (
        <section>
            <div className="flex justify-between items-center mx-12">
                <h1 className="text-5xl font-extrabold font-indie-flower my-12">Category at a glance</h1>
                <Link to={`/category`}><button className="bg-slate-700 bg-opacity-50 hover:bg-opacity-100 hover:bg-gradient-to-br from-orange-400 to-red-700 hover:text-white rounded-xl px-4 py-2 text-lg font-semibold">
                    Veiw all</button></Link>
            </div>
            <div className="mx-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <section className="lg:col-span-2">
                    <CategoryCarousel events={events?.slice(0, 4)}></CategoryCarousel>
                </section>
                <section className="lg:col-span-2">
                    <CategoryCarousel events={events?.slice(1, 5)}></CategoryCarousel>
                </section>
                <section className="lg:col-span-3">
                    <CategoryCarousel events={events?.slice(2, 6)}></CategoryCarousel>
                </section>
                <section>
                    <CategoryCarousel events={events?.slice(4, 8)}></CategoryCarousel>
                </section>
                <section>
                    <CategoryCarousel events={events?.slice(5, 9)}></CategoryCarousel>
                </section>
                <section className="lg:col-span-3">
                    <CategoryCarousel events={events?.slice(6, 10)}></CategoryCarousel>
                </section>
            </div>
        </section>
    );
};

export default Category;