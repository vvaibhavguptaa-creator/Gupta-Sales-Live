
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Manifesto = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Parallax effect for the image
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
    // Opacity fade for the watermark
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

    return (
        <section ref={containerRef} className="relative min-h-[150vh] bg-[#050505] text-white py-24 overflow-hidden">
            <div className="container mx-auto px-6 h-full flex flex-col md:flex-row gap-20 relative z-10">

                {/* Left Column: Sticky Image */}
                <div className="w-full md:w-1/2 relative h-full">
                    <div className="sticky top-24 h-[80vh] w-full overflow-hidden rounded-lg">
                        <motion.img
                            style={{ y }}
                            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop"
                            alt="Luxury Interior"
                            className="w-full h-[120%] object-cover object-center"
                        />
                        <div className="absolute inset-0 bg-black/20" />
                    </div>
                </div>

                {/* Right Column: Scrolling Text */}
                <div className="w-full md:w-1/2 flex flex-col justify-center space-y-12 py-24 relative">
                    {/* Layered Watermark Typography */}
                    <motion.div
                        style={{ opacity }}
                        className="absolute -top-20 -left-20 text-[10rem] md:text-[15rem] leading-none font-serif font-bold text-white/5 pointer-events-none select-none whitespace-nowrap z-0"
                    >
                        30 YEARS
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="relative z-10 space-y-8"
                    >
                        <div className="flex items-center gap-4">
                            <div className="h-[1px] w-12 bg-yellow-500" />
                            <span className="text-yellow-500 uppercase tracking-[0.3em] text-sm font-medium">Since 1995</span>
                        </div>

                        <h2 className="text-6xl md:text-8xl font-serif leading-[1.1]">
                            Building <br />
                            <span className="italic text-white/60">Legacies.</span>
                        </h2>

                        <p className="text-lg text-gray-400 leading-relaxed font-light max-w-md">
                            We don't just supply materials; we curate the foundation of your dreams.
                            For three decades, Gupta Sales has stood as a beacon of quality,
                            transforming houses into sanctuaries with our premium range of
                            tiles and sanitaryware.
                        </p>

                        <p className="text-lg text-gray-400 leading-relaxed font-light max-w-md">
                            Our commitment goes beyond commerce. It is about the art of living well, the precision of design, and the enduring promise of excellence.
                        </p>
                    </motion.div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-12 border-t border-white/10 pt-12 relative z-10">
                        <div>
                            <h4 className="text-4xl font-serif text-white">500+</h4>
                            <p className="text-gray-500 text-xs uppercase tracking-widest mt-2">Projects Completed</p>
                        </div>
                        <div>
                            <h4 className="text-4xl font-serif text-white">100%</h4>
                            <p className="text-gray-500 text-xs uppercase tracking-widest mt-2">Client Satisfaction</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Manifesto;
