import { Box, Globe, Truck, Wrench } from 'lucide-react';
import { motion } from 'framer-motion';

const ServiceCard = ({
    title,
    description,
    icon: Icon,
    className = ""
}: {
    title: string;
    description: string;
    icon: any;
    className?: string;
}) => {
    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            className={`
                group relative bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl
                hover:border-yellow-500/50 hover:shadow-[0_0_30px_rgba(255,215,0,0.15)]
                transition-all duration-300 overflow-hidden flex flex-col justify-between
                ${className}
            `}
        >
            <div className="mb-6">
                <div className="bg-white/10 w-12 h-12 rounded-full flex items-center justify-center text-yellow-500 mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={24} />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 uppercase tracking-wider group-hover:text-yellow-500 transition-colors">
                    {title}
                </h3>
                <p className="text-gray-400 font-light leading-relaxed group-hover:text-gray-300">
                    {description}
                </p>
            </div>

            {/* Decorative background glow */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-yellow-500/5 rounded-full blur-3xl group-hover:bg-yellow-500/10 transition-colors" />
        </motion.div>
    );
};

const ServicesBento = () => {
    return (
        <section className="bg-zinc-900 py-24 px-6 relative overflow-hidden">
            {/* Section Header */}
            <div className="container mx-auto mb-16 text-center">
                <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">World-Class Services</h2>
                <div className="w-24 h-1 bg-yellow-500 mx-auto rounded-full" />
            </div>

            <div className="container mx-auto max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(250px,auto)]">

                    {/* Card 1: The Big Feature (Spans 2 cols) */}
                    <ServiceCard
                        title="Hyper-Realistic 3D"
                        description="Don't guess. We visualize your exact room before you spend a rupee. Experience your space in VR-ready quality."
                        icon={Box}
                        className="md:col-span-2"
                    />

                    {/* Card 2: Vertical (Spans 1 col, 2 rows) */}
                    <ServiceCard
                        title="Global Sourcing"
                        description="Curated selection from Italy, Germany, and India's finest manufacturers. We bring the world's best aesthetic directly to your doorstep, handling all import complexities."
                        icon={Globe}
                        className="md:row-span-2 bg-gradient-to-b from-white/5 to-transparent"
                    />

                    {/* Card 3: Standard */}
                    <ServiceCard
                        title="Express Logistics"
                        description="Inventory ready to ship. No 6-week waiting periods. Start your project today."
                        icon={Truck}
                    />

                    {/* Card 4: Standard */}
                    <ServiceCard
                        title="Smart Installation"
                        description="Technical guidance for your contractors to ensure perfect fitting and longevity."
                        icon={Wrench}
                    />
                </div>
            </div>
        </section>
    );
};

export default ServicesBento;
