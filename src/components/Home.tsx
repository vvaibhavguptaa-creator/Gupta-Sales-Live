"use client";

import Hero from './Hero';
import BrandTicker from './BrandTicker';
import ProductCollection from './ProductCollection';
import HeritageSection from './HeritageSection';
import Scrollytelling from './Scrollytelling';
import MonumentalFooter from './MonumentalFooter';
import LivingGallery from './LivingGallery';
import BlueprintProcess from './BlueprintProcess';
import Manifesto from './Manifesto';
import ProductShowcase from './ProductShowcase';
import Services from './Services';

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

            {/* Section 3: Product Collection (Luminous Bento Grid) */}
            <div className="relative z-15">
                <ProductCollection />
            </div>

            {/* Section 4: Heritage/Philosophy (Editorial Layout) */}
            <div className="relative z-18 bg-white">
                <HeritageSection />
            </div>

            {/* Section 5: Scrollytelling Feature (Apple Style) */}
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

            {/* Section 5: The Monumental Footer (Teenage Engineering Style) */}
            <div className="relative z-50">
                <MonumentalFooter />
            </div>
        </div>
    );
};

export default Home;
