import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const images = [
    "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1600585154526-998d781f5a42?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1600607686027-6f7f4e3c983a?auto=format&fit=crop&q=80&w=600",
];

const LifestyleGallery = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Parallax Physics
    const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
    const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
    const y3 = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);

    return (
        <section ref={containerRef} className="relative z-30 bg-[#E5E5E5] py-32 px-4 -mt-20 rounded-t-[50px] overflow-hidden">
            <div className="container mx-auto">
                <div className="flex flex-col items-center mb-24 text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-sm font-bold tracking-[0.2em] text-[#1D1D1F]/40 uppercase mb-4"
                    >
                        Inspiration
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-[#1D1D1F] text-5xl md:text-7xl font-sans font-semibold tracking-tight"
                    >
                        Designed for <br /> <span className="font-serif italic font-light">Real Life.</span>
                    </motion.h2>
                </div>

                {/* Masonry Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-[120vh] overflow-hidden">
                    {/* Column 1 */}
                    <motion.div style={{ y: y1 }} className="flex flex-col gap-8">
                        <div className="h-[60vh] w-full rounded-3xl overflow-hidden shadow-lg">
                            <img src={images[0]} className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000" alt="Interior" />
                        </div>
                        <div className="h-[40vh] w-full rounded-3xl overflow-hidden shadow-lg">
                            <img src={images[1]} className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000" alt="Interior" />
                        </div>
                    </motion.div>

                    {/* Column 2 */}
                    <motion.div style={{ y: y2 }} className="flex flex-col gap-8 pt-32">
                        <div className="h-[40vh] w-full rounded-3xl overflow-hidden shadow-lg">
                            <img src={images[2]} className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000" alt="Interior" />
                        </div>
                        <div className="h-[60vh] w-full rounded-3xl overflow-hidden shadow-lg">
                            <img src={images[3]} className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000" alt="Interior" />
                        </div>
                    </motion.div>

                    {/* Column 3 */}
                    <motion.div style={{ y: y3 }} className="flex flex-col gap-8 pt-0">
                        <div className="h-[50vh] w-full rounded-3xl overflow-hidden shadow-lg">
                            <img src={images[4]} className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000" alt="Interior" />
                        </div>
                        <div className="h-[50vh] w-full rounded-3xl overflow-hidden shadow-lg">
                            <img src={images[5]} className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000" alt="Interior" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default LifestyleGallery;
