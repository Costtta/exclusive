import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import Sales from '../components/Sales';
import Categories from '../components/Categories';
import Music from '../components/Music';
import Featured from '../components/Featured';
import Footer from '../components/Footer'
import Products from '../components/Products';
import BestSelling from '../components/BestSelling';
import FeaturedIcons from '../components/FeaturedIcons';

const Home = () => {
    return (
        <>
            <NavBar />
            <Hero />
            <Sales />
            <Categories />
            <BestSelling />
            <Music />
            <Products />
            <Featured />
            <FeaturedIcons />
            <Footer />
        </>
    )
}

export default Home
