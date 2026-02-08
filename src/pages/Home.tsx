import Hero from '../components/Hero';
import BrandTicker from '../components/BrandTicker';
import Manifesto from '../components/Manifesto';
import ProductShowcase from '../components/ProductShowcase';
import Services from '../components/Services';

const Home = () => {
    return (
        <div className="relative z-10 min-h-screen bg-[#050505]">
            <section id="home">
                <Hero />
            </section>
            <div className="-mt-1 relative z-10">
                <BrandTicker />
            </div>
            <section id="legacy" className="-mt-1 bg-[#050505]">
                <Manifesto />
            </section>
            <section id="collection" className="-mt-1 bg-[#050505] relative z-0">
                <ProductShowcase />
            </section>
            <div className="-mt-1 bg-[#050505] relative z-10">
                <Services />
            </div>
        </div>
    );
};

export default Home;
