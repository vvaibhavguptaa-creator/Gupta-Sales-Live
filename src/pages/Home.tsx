import Hero from '../components/Hero';
import BrandTicker from '../components/BrandTicker';
import ProductCategories from '../components/ProductCategories';
import Scrollytelling from '../components/Scrollytelling';
import LivingGallery from '../components/LivingGallery';
import BlueprintProcess from '../components/BlueprintProcess';
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

            {/* Section 2.5: Product Categories (Bento Grid) */}
            <div className="relative z-15">
                <ProductCategories />
            </div>

            {/* Section 3: Scrollytelling Feature (Apple Style) */}
            <div className="relative z-18">
                <Scrollytelling />
            </div>

            {/* Section 4: The Living Gallery (Overlap) */}
            <div className="relative z-20">
                <LivingGallery />
            </div>

            {/* Section 5: The Blueprint Process (Slides Over) */}
            <div className="relative z-25 bg-white">
                <BlueprintProcess />
            </div>

            {/* Section 6: Legacy/Manifesto (Slides Over) */}
            <section id="legacy" className="relative z-30 bg-black shadow-2xl shadow-black">
                <Manifesto />
            </section>

            {/* Section 7: Collection/ProductShowcase (Slides Over & Sticks) */}
            <section id="collection" className="relative z-40 bg-black">
                <ProductShowcase />
            </section>

            {/* Section 8: Services (Slides Over Final) */}
            <div className="relative z-50 bg-black shadow-[0_-50px_100px_rgba(0,0,0,1)]">
                <Services />
            </div>
        </div>
    );
};

export default Home;
