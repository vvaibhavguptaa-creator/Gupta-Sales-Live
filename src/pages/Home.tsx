import Hero from '../components/Hero';
import BrandTicker from '../components/BrandTicker';
import Manifesto from '../components/Manifesto';
import ProductShowcase from '../components/ProductShowcase';
import Services from '../components/Services';

const Home = () => {
    return (
        <div className="relative z-10 min-h-screen">
            <section id="home">
                <Hero />
            </section>
            <BrandTicker />
            <section id="legacy" className="py-0">
                <Manifesto />
            </section>
            <section id="collection" className="py-12">
                <ProductShowcase />
            </section>

            <Services />
        </div>
    );
};

export default Home;
