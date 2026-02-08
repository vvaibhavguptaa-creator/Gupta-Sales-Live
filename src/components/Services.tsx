
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiHome, HiSparkles, HiOfficeBuilding, HiColorSwatch } from 'react-icons/hi';

const services = [
    {
        id: 1,
        title: 'Residential',
        description: 'Bespoke sanitaryware & surface solutions for luxury homes. Crafting personal sanctuaries with precision.',
        icon: <HiHome className="text-3xl" />,
        image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200&auto=format&fit=crop'
    },
    {
        id: 2,
        title: 'Commercial',
        description: 'High-durability, premium aesthetics for hotels and offices. Making a statement in every square foot.',
        icon: <HiOfficeBuilding className="text-3xl" />,
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop'
    },
    {
        id: 3,
        title: 'Architectural',
        description: 'Technical consultation and surface specification. Partnering with architects to realize ambitious visions.',
        icon: <HiColorSwatch className="text-3xl" />,
        image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop'
    },
    {
        id: 4,
        title: 'Renovation',
        description: 'Complete bath & kitchen transformation services. specialized in upgrading legacy spaces to modern standards.',
        icon: <HiSparkles className="text-3xl" />,
        image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1200&auto=format&fit=crop'
    }
];

const Services = () => {
    const [activeId, setActiveId] = useState<number | null>(1); // Default open first

    return (
        <section className="bg-black py-24 px-6 md:px-12 h-[80vh] flex flex-col justify-center">

            <div className="flex flex-col md:flex-row h-full w-full gap-2 md:gap-4">
                {services.map((service) => (
                    <motion.div
                        key={service.id}
                        layout
                        onMouseEnter={() => setActiveId(service.id)}
                        className={`relative h-full rounded-lg overflow-hidden cursor-pointer border border-white/10 ${activeId === service.id ? 'flex-[3]' : 'flex-[1]'
                            }`}
                        transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    >
                        {/* Background Image - Only visible when active */}
                        <AnimatePresence mode="wait">
                            {activeId === service.id && (
                                <motion.img
                                    initial={{ opacity: 0, scale: 1.1 }}
                                    animate={{ opacity: 0.4, scale: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                    src={service.image}
                                    alt={service.title}
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                            )}
                        </AnimatePresence>

                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent p-8 flex flex-col justify-end">
                            {/* Icon - Always Visible */}
                            <div className={`mb-4 ${activeId === service.id ? 'text-yellow-500' : 'text-gray-500'}`}>
                                {service.icon}
                            </div>

                            {/* Title - Rotated when Vertical (inactive on mobile/desktop different) */}
                            <motion.h3
                                layout="position"
                                className={`text-2xl md:text-4xl font-serif text-white font-medium mb-2 ${activeId !== service.id ? 'md:-rotate-90 md:origin-bottom-left md:translate-x-8 md:whitespace-nowrap' : ''
                                    }`}
                            >
                                {service.title}
                            </motion.h3>

                            {/* Description - Only when active */}
                            <AnimatePresence>
                                {activeId === service.id && (
                                    <motion.p
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className="text-gray-400 text-sm md:text-base leading-relaxed max-w-md"
                                    >
                                        {service.description}
                                    </motion.p>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Services;
