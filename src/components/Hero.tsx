"use client";

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    // Parallax & Fade for scroll
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    return (
        <section
            ref={containerRef}
            className="relative h-screen w-full bg-white overflow-hidden flex flex-col justify-center items-center"
        >

            {/* A. CINEMATIC BACKGROUND */}
            <div className="absolute inset-0 z-0">
                {/* 1. Grain Overlay (The 'Film' Texture) */}
                <div className="absolute inset-0 z-20 opacity-[0.04] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] filter contrast-125 brightness-100" />

                {/* 2. Soft Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-white/90 z-10" />

                {/* 3. The Video (Slow Motion Silk) */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover scale-105"
                >
                    <source src="https://cdn.coverr.co/videos/coverr-white-smoke-in-slow-motion-1636/1080p.mp4" type="video/mp4" />
                </video>
            </div>

            {/* B. EDITORIAL CONTENT */}
            <motion.div
                style={{ y, opacity }}
                className="relative z-30 text-center max-w-7xl px-6 flex flex-col items-center"
            >

                {/* 1. The 'Pre-Title' Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 1 }}
                    className="mb-8 flex items-center gap-4"
                >
                    <div className="h-px w-8 bg-black/20" />
                    <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-black/50">
                        Est. 1995 • Bikaner
                    </span>
                    <div className="h-px w-8 bg-black/20" />
                </motion.div>

                {/* 2. The Headline (Masked Reveal) */}
                <h1 className="font-serif text-6xl md:text-[8vw] leading-[0.85] text-black mb-10 tracking-tight">
                    {/* Line 1 */}
                    <div className="overflow-hidden">
                        <motion.div
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                        >
                            Refining
                        </motion.div>
                    </div>

                    {/* Line 2 (Italic Emphasis) */}
                    <div className="overflow-hidden">
                        <motion.div
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
                            className="italic text-black/80 font-light"
                        >
                            The Everyday.
                        </motion.div>
                    </div>
                </h1>

                {/* 3. The Subtext */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="text-lg md:text-xl text-gray-500 max-w-xl mx-auto leading-relaxed font-light tracking-wide mb-12"
                >
                    Experience the art of living with Bikaner's finest collection of <br className="hidden md:block" />
                    luxury tiles, sanitaryware, and bath fittings.
                </motion.p>

                {/* 4. The Legendary Magnetic Button */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.2, duration: 1, type: "spring" }}
                >
                    <a href="#collection" className="group relative flex items-center justify-center gap-4 px-10 py-4 bg-black text-white rounded-full overflow-hidden transition-transform duration-500 hover:scale-105 shadow-xl hover:shadow-2xl hover:shadow-black/20">
                        <span className="relative z-10 font-medium tracking-[0.1em] text-xs uppercase">
                            Explore Collection
                        </span>
                        <div className="relative z-10 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center transition-all duration-500 group-hover:bg-white group-hover:text-black">
                            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </div>
                    </a>
                </motion.div>

            </motion.div>

            {/* C. SCROLL HINT */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
            >
                <div className="w-6 h-10 border border-black/20 rounded-full flex justify-center p-1">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                        className="w-1 h-1 bg-black rounded-full"
                    />
                </div>
            </motion.div>

        </section>
    );
};

export default Hero;