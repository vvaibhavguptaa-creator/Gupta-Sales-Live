
import { FaDraftingCompass, FaTruck, FaHandshake } from 'react-icons/fa';

const Services = () => {
    return (
        <section className="bg-[#0a0a0a] py-24 border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">

                    {/* 1. Design Consultation */}
                    <div className="group p-6 rounded-2xl hover:bg-white/5 transition-colors duration-300">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-yellow-500/10 mb-6 group-hover:scale-110 transition-transform duration-300">
                            <FaDraftingCompass className="text-3xl text-yellow-500" />
                        </div>
                        <h3 className="text-2xl font-serif text-white mb-4">Design Consultation</h3>
                        <p className="text-gray-400 leading-relaxed">
                            Expert guidance to match your vision with the perfect materials. We collaborate intimately with your architects and interior designers to ensure cohesive aesthetics.
                        </p>
                    </div>

                    {/* 2. Premium Supply */}
                    <div className="group p-6 rounded-2xl hover:bg-white/5 transition-colors duration-300">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-yellow-500/10 mb-6 group-hover:scale-110 transition-transform duration-300">
                            <FaTruck className="text-3xl text-yellow-500" />
                        </div>
                        <h3 className="text-2xl font-serif text-white mb-4">Premium Supply</h3>
                        <p className="text-gray-400 leading-relaxed">
                            Direct sourcing from global heritage brands like Johnson, Nexion, and Grohe. Authentic quality guaranteed, delivered with the utmost care to your site.
                        </p>
                    </div>

                    {/* 3. The 30-Year Promise */}
                    <div className="group p-6 rounded-2xl hover:bg-white/5 transition-colors duration-300">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-yellow-500/10 mb-6 group-hover:scale-110 transition-transform duration-300">
                            <FaHandshake className="text-3xl text-yellow-500" />
                        </div>
                        <h3 className="text-2xl font-serif text-white mb-4">The 30-Year Promise</h3>
                        <p className="text-gray-400 leading-relaxed">
                            A legacy of trust since 1995. We don't just sell products; we support you from selection to installation and beyond with dedicated after-sales support.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Services;
