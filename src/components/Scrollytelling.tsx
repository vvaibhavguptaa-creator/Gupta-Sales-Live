import { motion } from 'framer-motion';

const panels = [
    {
        id: 1,
        title: "Precision.",
        description: "Every curve is calculated. Every angle is intentional. Designed for those who demand exactness in every drop.",
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800",
        align: "right" // Image Right, Text Left
    },
    {
        id: 2,
        title: "Flow.",
        description: "Water should not just move; it should glide. Our aerators create a stream that feels like silk against the skin.",
        image: "https://images.unsplash.com/photo-1556911220-e6584462aa3c?auto=format&fit=crop&q=80&w=800",
        align: "left" // Image Left, Text Right
    },
    {
        id: 3,
        title: "Silence.",
        description: "True luxury is quiet. Advanced valve technology ensures that the only sound you hear is the water itself.",
        image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&q=80&w=800",
        align: "right"
    },
    {
        id: 4,
        title: "Perfection.",
        description: "The result of 30 years of engineering. A bathroom fitting that stands the test of time and trends.",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800",
        align: "left"
    }
];

const Scrollytelling = () => {
    return (
        <section className="bg-[#fafaf9] py-32 overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 flex flex-col gap-32 md:gap-48">
                {panels.map((panel, index) => (
                    <div
                        key={panel.id}
                        className={`flex flex-col md:flex-row items-center gap-12 md:gap-24 ${panel.align === 'left' ? 'md:flex-row-reverse' : ''}`}
                    >

                        {/* Text Side */}
                        <div className="flex-1 text-center md:text-left">
                            <motion.span
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                className="block text-9xl md:text-[12rem] font-bold text-stone-200 leading-none mb-6 select-none"
                            >
                                0{panel.id}
                            </motion.span>
                            <motion.h2
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="text-5xl md:text-8xl font-serif text-[#1c1917] mb-8"
                            >
                                {panel.title}
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="text-xl md:text-2xl font-light text-[#44403c] leading-relaxed max-w-xl mx-auto md:mx-0"
                            >
                                {panel.description}
                            </motion.p>
                        </div>

                        {/* Image Side */}
                        <div className="flex-1 w-full">
                            <motion.div
                                initial={{ scale: 0.95, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 1 }}
                                className="relative aspect-[3/4] md:aspect-square rounded-[3rem] overflow-hidden shadow-2xl"
                            >
                                <img
                                    src={panel.image}
                                    alt={panel.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
                            </motion.div>
                        </div>

                    </div>
                ))}
            </div>
        </section>
    );
};

export default Scrollytelling;
