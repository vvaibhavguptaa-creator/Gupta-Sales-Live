import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const panels = [
    {
        id: 1,
        title: "Precision.",
        description: "Every curve is calculated. Every angle is intentional. Designed for those who demand exactness in every drop.",
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800",
        align: "start"
    },
    {
        id: 2,
        title: "Flow.",
        description: "Water should not just move; it should glide. Our aerators create a stream that feels like silk against the skin.",
        image: "https://images.unsplash.com/photo-1556911220-e6584462aa3c?auto=format&fit=crop&q=80&w=800",
        align: "end"
    },
    {
        id: 3,
        title: "Silence.",
        description: "True luxury is quiet. Advanced valve technology ensures that the only sound you hear is the water itself.",
        image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&q=80&w=800",
        align: "start"
    },
    {
        id: 4,
        title: "Perfection.",
        description: "The result of 30 years of engineering. A bathroom fitting that stands the test of time and trends.",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800",
        align: "center"
    }
];

const Scrollytelling = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Map vertical scroll (0 to 1) to horizontal movement (0% to -75%)
    // -75% because we have 4 panels of 100vw each. Total width 400vw.
    // To show the last panel, we need to move Left by 300vw (or 75% of 400vw).
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

    return (
        <section ref={containerRef} className="relative h-[400vh] bg-[#fafaf9]"> {/* stone-50 */}

            {/* STICKY WINDOW */}
            <div className="sticky top-0 h-screen overflow-hidden flex items-center">

                {/* HORIZONTAL TRACK */}
                <motion.div
                    style={{ x }}
                    className="flex w-[400vw] h-full"
                >
                    {panels.map((panel) => (
                        <div key={panel.id} className="w-[100vw] h-full flex items-center justify-center relative px-4 md:px-20">

                            {/* CONTENT LAYOUT */}
                            <div className={`container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center h-full ${panel.align === 'end' ? 'md:flex-row-reverse' : ''}`}>

                                {/* TEXT CONTENT */}
                                <div className={`flex flex-col justify-center z-10 ${panel.align === 'end' ? 'md:order-2' : ''}`}>
                                    <motion.h2
                                        initial={{ opacity: 0, y: 50 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ margin: "-100px" }}
                                        transition={{ duration: 0.8 }}
                                        className="text-6xl md:text-9xl font-serif text-[#1c1917] mb-8 leading-[0.9]"
                                    >
                                        {panel.title}
                                    </motion.h2>
                                    <motion.p
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ duration: 0.8, delay: 0.2 }}
                                        className="text-xl md:text-2xl font-light text-[#44403c] max-w-lg leading-relaxed"
                                    >
                                        {panel.description}
                                    </motion.p>
                                </div>

                                {/* IMAGE CONTENT */}
                                <div className={`relative h-[50vh] md:h-[70vh] w-full ${panel.align === 'end' ? 'md:order-1' : ''}`}>
                                    <motion.div
                                        initial={{ scale: 0.9, opacity: 0 }}
                                        whileInView={{ scale: 1, opacity: 1 }}
                                        transition={{ duration: 1 }}
                                        viewport={{ margin: "-100px" }}
                                        className="w-full h-full overflow-hidden rounded-[2rem] shadow-2xl"
                                    >
                                        <img
                                            src={panel.image}
                                            alt={panel.title}
                                            className="w-full h-full object-cover"
                                        />
                                        {/* Gloss Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent pointer-events-none" />
                                    </motion.div>

                                    {/* Deco Elements */}
                                    <div className="absolute -z-10 -bottom-10 -right-10 w-40 h-40 bg-[#e7e5e4] rounded-full blur-3xl opacity-60" />
                                </div>

                            </div>

                            {/* PANEL NUMBER BG */}
                            <span className="absolute bottom-10 left-10 md:left-20 text-[10vw] font-bold text-[#e7e5e4] pointer-events-none select-none leading-none z-0">
                                0{panel.id}
                            </span>

                        </div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
};

export default Scrollytelling;
