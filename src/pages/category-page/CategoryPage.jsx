import { useLoaderData } from "react-router-dom";
import CategoryCard from "../../components/category-card/CategoryCard";
import HomeHeader from "../../components/home-header/HomeHeader";

const CategoryPage = () => {

    const events = useLoaderData();
    return (
        <section>
            <HomeHeader></HomeHeader>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-12 mt-12">
                {
                    events.map((event, index) => <CategoryCard key={index} event={event}></CategoryCard>)
                }
            </div>
        </section>
    );
};

export default CategoryPage;