"use client";

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Cormorant_Garamond, Inter } from 'next/font/google';

const cormorant = Cormorant_Garamond({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    style: ["normal", "italic"]
});

const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "500"] });

const HeritageSection = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Parallax Effect: Image moves slower than the page (0% -> 20%)
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

    // Line Animation: Expands when in view
    const lineVariants = {
        hidden: { width: 0 },
        visible: { width: "100%", transition: { duration: 1.5, ease: "easeInOut" } }
    };

    return (
        <section ref={containerRef} className="bg-white py-24 md:py-32 overflow-hidden border-b border-black/5">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">

                    {/* Left Column: Editorial Text */}
                    <div className="flex flex-col justify-center order-2 md:order-1">

                        {/* Animated Divider Line */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={lineVariants}
                            className="h-px bg-black/20 mb-8 md:mb-12 origin-left"
                        />

                        {/* Eyebrow Label */}
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className={`${inter.className} text-[10px] font-bold tracking-[0.3em] uppercase text-black/50 mb-6 block`}
                        >
                            Since 1995 • Bikaner
                        </motion.span>

                        {/* Headline */}
                        <h2 className={`${cormorant.className} text-6xl md:text-7xl lg:text-8xl text-black leading-[0.9] mb-8 tracking-tight italic`}>
                            <div className="overflow-hidden">
                                <motion.div
                                    initial={{ y: "100%" }}
                                    whileInView={{ y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                                >
                                    The Architecture
                                </motion.div>
                            </div>
                            <div className="overflow-hidden">
                                <motion.div
                                    initial={{ y: "100%" }}
                                    whileInView={{ y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                                >
                                    of Silence.
                                </motion.div>
                            </div>
                        </h2>

                        {/* Body Text */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.6 }}
                            className={`${inter.className} text-lg md:text-xl text-black/60 font-light leading-relaxed max-w-md mb-12`}
                        >
                            We believe a home is not built of bricks, but of feelings. For 30 years, we have curated materials that speak the language of luxury.
                        </motion.p>

                        {/* Digital Signature / Stamp */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            className="w-32 h-32 border border-black/10 rounded-full flex flex-col items-center justify-center p-4 text-center transform -rotate-12"
                        >
                            <span className="text-[8px] font-bold tracking-[0.2em] uppercase text-black/40 mb-1">Gupta Sales</span>
                            <span className={`${cormorant.className} text-xl italic text-black`}>Approved.</span>
                        </motion.div>
                    </div>

                    {/* Right Column: Parallax Image */}
                    <div className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden order-1 md:order-2">
                        <motion.div style={{ y }} className="absolute inset-0 w-full h-[120%] -top-[10%]">
                            <img
                                src="https://images.unsplash.com/photo-1620626012053-2943e56ea77c?auto=format&fit=crop&q=80&w=1200"
                                alt="Minimalist Architecture"
                                className="w-full h-full object-cover grayscale opacity-90 hover:grayscale-0 transition-all duration-1000"
                            />
                        </motion.div>
                        {/* Overlay Grain */}
                        <div className="absolute inset-0 bg-black/5 mix-blend-multiply" />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HeritageSection;
