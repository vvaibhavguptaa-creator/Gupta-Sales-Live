
import { FaDraftingCompass, FaTruck, FaHandshake } from 'react-icons/fa';

const Services = () => {
    const services = [
        {
            icon: FaDraftingCompass,
            title: "Design Consultation",
            description: "Expert guidance to match your vision with the perfect materials. We collaborate intimately with your architects and interior designers to ensure cohesive aesthetics."
        },
        {
            icon: FaTruck,
            title: "Premium Supply",
            description: "Direct sourcing from global heritage brands like Johnson, Nexion, and Grohe. Authentic quality guaranteed, delivered with the utmost care to your site."
        },
        {
            icon: FaHandshake,
            title: "The 30-Year Promise",
            description: "A legacy of trust since 1995. We don't just sell products; we support you from selection to installation and beyond with dedicated after-sales support."
        }
    ];

    return (
        <section id="services" className="bg-[#050505] py-24 border-t border-white/5 relative overflow-hidden">
            {/* Background Noise/Gradient Texture (Optional, accessible via CSS if needed, but keeping clean for now) */}

            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group relative p-8 rounded-sm border border-white/5 bg-white/[0.02] backdrop-blur-sm hover:bg-white/[0.05] hover:border-white/20 transition-all duration-500 ease-out"
                        >
                            {/* Hover Glow Effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/0 via-yellow-500/0 to-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                            {/* Icon */}
                            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-yellow-500/10 mb-8 border border-yellow-500/20 group-hover:scale-110 group-hover:border-yellow-500/50 transition-all duration-500">
                                <service.icon className="text-xl text-yellow-500" />
                            </div>

                            {/* Content */}
                            <h3 className="text-2xl font-serif text-white mb-4 group-hover:translate-x-2 transition-transform duration-300">
                                {service.title}
                            </h3>
                            <p className="text-gray-400 font-light leading-relaxed text-sm tracking-wide">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
