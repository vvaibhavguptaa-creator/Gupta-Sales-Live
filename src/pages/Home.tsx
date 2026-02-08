import Hero from '../components/Hero';
import BrandTicker from '../components/BrandTicker';
import Manifesto from '../components/Manifesto';
import ProductShowcase from '../components/ProductShowcase';
import Services from '../components/Services';

const Home = () => {
    return (
        <div className="relative z-10 min-h-screen bg-transparent">
            {/* Section 1: Hero (Base Layer) */}
            <section id="home" className="sticky top-0 z-0 h-screen w-full">
                <Hero />
            </section>

            {/* Section 2: Brand Ticker (Slides Over) */}
            <div className="relative z-10 bg-black">
                <BrandTicker />
            </div>

            {/* Section 3: Legacy/Manifesto (Slides Over) */}
            <section id="legacy" className="relative z-20 bg-black shadow-2xl shadow-black">
                <Manifesto />
            </section>

            {/* Section 4: Collection/ProductShowcase (Slides Over & Sticks) */}
            <section id="collection" className="relative z-30 bg-black">
                <ProductShowcase />
            </section>

            {/* Section 5: Services (Slides Over Final) */}
            <div className="relative z-40 bg-black shadow-[0_-50px_100px_rgba(0,0,0,1)]">
                <Services />
            </div>
        </div>
    );
};

export default Home;
