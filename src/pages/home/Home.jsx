import About from "../../components/about/About";
import Category from "../../components/category/Category";
import HomeHeader from "../../components/home-header/HomeHeader";

const Home = () => {
    return (
        <>
            <HomeHeader></HomeHeader>
            <Category></Category>
            <About></About>
        </>
    );
};

export default Home;