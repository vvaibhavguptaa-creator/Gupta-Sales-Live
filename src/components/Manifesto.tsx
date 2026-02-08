
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

    // Editorial reveal animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2, // Stagger delays between children
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,

            }
        }
    };

    return (
        <section ref={containerRef} className="relative min-h-screen bg-black text-white py-12 mt-0 overflow-hidden">
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
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-10%" }}
                    className="w-full md:w-1/2 flex flex-col justify-center space-y-12 py-24 relative"
                >
                    {/* Layered Watermark Typography - kept strictly decorative */}
                    <motion.div
                        style={{ opacity }}
                        className="absolute -top-20 -left-20 text-[10rem] md:text-[15rem] leading-none font-serif font-bold text-white/5 pointer-events-none select-none whitespace-nowrap z-0"
                    >
                        30 YEARS
                    </motion.div>

                    <div className="relative z-10 space-y-8">
                        <motion.div variants={itemVariants} className="flex items-center gap-4">
                            <div className="h-[1px] w-12 bg-yellow-500" />
                            <span className="text-yellow-500 uppercase tracking-[0.3em] text-sm font-medium">Since 1995</span>
                        </motion.div>

                        <h2 className="text-6xl md:text-8xl font-serif leading-[1.1]">
                            <div className="overflow-hidden">
                                <motion.span variants={itemVariants} className="block">Building</motion.span>
                            </div>
                            <div className="overflow-hidden">
                                <motion.span variants={itemVariants} className="block italic text-white/60">Legacies.</motion.span>
                            </div>
                        </h2>

                        <motion.p variants={itemVariants} className="text-lg text-gray-400 leading-relaxed font-light max-w-md">
                            We don't just supply materials; we curate the foundation of your dreams.
                            For three decades, Gupta Sales has stood as a beacon of quality,
                            transforming houses into sanctuaries with our premium range of
                            tiles and sanitaryware.
                        </motion.p>

                        <motion.p variants={itemVariants} className="text-lg text-gray-400 leading-relaxed font-light max-w-md">
                            Our commitment goes beyond commerce. It is about the art of living well, the precision of design, and the enduring promise of excellence.
                        </motion.p>
                    </div>

                    {/* Stats Grid */}
                    <motion.div
                        variants={itemVariants}
                        className="grid grid-cols-2 gap-12 border-t border-white/10 pt-12 relative z-10"
                    >
                        <div>
                            <h4 className="text-4xl font-serif text-white">500+</h4>
                            <p className="text-gray-500 text-xs uppercase tracking-widest mt-2">Projects Completed</p>
                        </div>
                        <div>
                            <h4 className="text-4xl font-serif text-white">100%</h4>
                            <p className="text-gray-500 text-xs uppercase tracking-widest mt-2">Client Satisfaction</p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Manifesto;
