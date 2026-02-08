
import { useRef } from 'react';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';

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

    // Word-by-word animation variants
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.015, // Very tight stagger for fluid "wave"
                delayChildren: 0.1
            }
        }
    };

    const wordVariants: Variants = {
        hidden: {
            opacity: 0,
            y: 20,
            filter: "blur(8px)"
        },
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
                duration: 0.8,
                // ease default is fine
            }
        }
    };

    const AnimatedText = ({ text, className, italic = false }: { text: string, className?: string, italic?: boolean }) => {
        const words = text.split(" ");
        return (
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-10%" }}
                className={`${className} flex flex-wrap`}
            >
                {words.map((word, i) => (
                    <motion.span
                        key={i}
                        variants={wordVariants}
                        className={`inline-block mr-[0.25em] ${italic ? 'italic text-white/60' : ''}`}
                    >
                        {word}
                    </motion.span>
                ))}
            </motion.div>
        );
    };

    return (
        <section ref={containerRef} className="relative min-h-screen bg-black text-white py-24 mt-0 overflow-hidden">
            <div className="container mx-auto px-6 h-full flex flex-col md:flex-row gap-20 relative z-10">

                {/* Left Column: Sticky Image */}
                <div className="w-full md:w-1/2 relative h-full">
                    <div className="sticky top-24 h-[80vh] w-full overflow-hidden rounded-sm">
                        <motion.img
                            style={{ y }}
                            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop"
                            alt="Luxury Interior"
                            className="w-full h-[120%] object-cover object-center"
                        />
                        <div className="absolute inset-0 bg-black/10" />
                    </div>
                </div>

                {/* Right Column: Scrolling Text */}
                <div className="w-full md:w-1/2 flex flex-col justify-center space-y-16 py-12 relative">

                    {/* Layered Watermark Typography */}
                    <motion.div
                        style={{ opacity }}
                        className="absolute top-0 -left-20 text-[10rem] md:text-[15rem] leading-none font-serif font-bold text-white/[0.03] pointer-events-none select-none whitespace-nowrap z-0"
                    >
                        30 YEARS
                    </motion.div>

                    <div className="relative z-10 space-y-12">
                        <motion.div
                            initial={{ scaleX: 0, originX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-4"
                        >
                            <div className="h-[1px] w-12 bg-yellow-500" />
                            <span className="text-yellow-500 uppercase tracking-[0.3em] text-sm font-medium">Since 1995</span>
                        </motion.div>

                        <div className="text-6xl md:text-8xl font-serif leading-[1.1]">
                            <AnimatedText text="Building" />
                            <AnimatedText text="Legacies." italic />
                        </div>

                        <div className="space-y-8">
                            <AnimatedText
                                text="We don't just supply materials; we curate the foundation of your dreams. For three decades, Gupta Sales has stood as a beacon of quality, transforming houses into sanctuaries with our premium range of tiles and sanitaryware."
                                className="text-xl text-gray-400 leading-relaxed font-light max-w-lg"
                            />

                            <AnimatedText
                                text="Our commitment goes beyond commerce. It is about the art of living well, the precision of design, and the enduring promise of excellence."
                                className="text-xl text-gray-400 leading-relaxed font-light max-w-lg"
                            />
                        </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-12 border-t border-white/10 pt-12 relative z-10">
                        <div>
                            <AnimatedText text="500+" className="text-5xl font-serif text-white mb-2" />
                            <p className="text-gray-500 text-xs uppercase tracking-widest fade-in">Projects Completed</p>
                        </div>
                        <div>
                            <AnimatedText text="100%" className="text-5xl font-serif text-white mb-2" />
                            <p className="text-gray-500 text-xs uppercase tracking-widest fade-in">Client Satisfaction</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Manifesto;
