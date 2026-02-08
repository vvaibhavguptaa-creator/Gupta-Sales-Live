
import { FaDraftingCompass, FaTruck, FaHandshake } from 'react-icons/fa';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';

const ServiceCard = ({ service, index }: { service: any, index: number }) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = ({ currentTarget, clientX, clientY }: React.MouseEvent) => {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative p-8 rounded-sm border border-white/5 bg-white/[0.02] backdrop-blur-sm hover:bg-white/[0.05] transition-colors duration-500 overflow-hidden"
            onMouseMove={handleMouseMove}
        >
            {/* Spotlight Effect */}
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                            650px circle at ${mouseX}px ${mouseY}px,
                            rgba(234, 179, 8, 0.15),
                            transparent 80%
                        )
                    `,
                }}
            />

            {/* Icon */}
            <div className="relative inline-flex items-center justify-center w-12 h-12 rounded-full bg-yellow-500/10 mb-8 border border-yellow-500/20 group-hover:scale-110 group-hover:border-yellow-500/50 transition-all duration-500">
                <service.icon className="text-xl text-yellow-500" />
            </div>

            {/* Content */}
            <h3 className="relative text-2xl font-serif text-white mb-4 group-hover:translate-x-2 transition-transform duration-300">
                {service.title}
            </h3>
            <p className="relative text-gray-400 font-light leading-relaxed text-sm tracking-wide">
                {service.description}
            </p>
        </motion.div>
    );
};

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
        <section id="services" className="bg-[#050505] py-32 border-t border-white/5 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard key={index} service={service} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
