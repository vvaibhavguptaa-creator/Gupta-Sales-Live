import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi';

const Hero = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    // Parallax & Fade for scroll
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    // Mouse Physics for "Anti-Gravity" Tilt
    const x = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth spring physics for the tilt
    const springConfig = { damping: 20, stiffness: 100, mass: 0.5 };
    const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), springConfig);
    const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-15, 15]), springConfig);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = containerRef.current?.getBoundingClientRect();
        if (rect) {
            const width = rect.width;
            const height = rect.height;
            const mouseX = e.clientX - rect.left;
            const my = e.clientY - rect.top;

            // Normalize mouse position -0.5 to 0.5
            const xPct = (mouseX / width) - 0.5;
            const yPct = (my / height) - 0.5;

            x.set(xPct);
            mouseY.set(yPct);
        }
    };

    const handleMouseLeave = () => {
        x.set(0);
        mouseY.set(0);
    };

    return (
        <section
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative h-screen w-full bg-[#F5F5F7] overflow-hidden flex flex-col justify-center items-center perspective-[2000px]"
        >

            {/* Background: Soft "Morning Light" Gradient */}
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-white via-[#F5F5F7] to-[#E5E5E5]" />

            <div className="relative z-10 w-full max-w-[1400px] px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center h-full pt-20">

                {/* 1. Typography & CTA (Left Side) */}
                <div className="flex flex-col items-start space-y-8 z-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex items-center gap-3"
                    >
                        <span className="w-8 h-[1px] bg-neutral-900/30" />
                        <span className="text-sm font-medium tracking-[0.2em] text-neutral-500 uppercase">Est. 1995 • Bikaner</span>
                    </motion.div>

                    <h1 className="text-[#1D1D1F] text-6xl md:text-8xl font-sans font-semibold tracking-tight leading-[0.95] max-w-2xl">
                        <motion.span
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                            className="block"
                        >
                            The Art
                        </motion.span>
                        <motion.span
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                            className="block text-[#1D1D1F]/50"
                        >
                            of Living.
                        </motion.span>
                    </h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="text-lg md:text-xl text-[#1D1D1F]/70 font-light max-w-md leading-relaxed"
                    >
                        Precision engineering meets timeless aesthetics. Curating Bikaner's finest home interiors for over 30 years.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                    >
                        <button className="group relative px-8 py-4 bg-[#1D1D1F] text-white rounded-full overflow-hidden shadow-xl shadow-black/10 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 transform hover:-translate-y-1">
                            <span className="relative z-10 flex items-center gap-2 font-medium tracking-wide">
                                Explore Collection
                                <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </span>
                            <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl scale-150" />
                        </button>
                    </motion.div>
                </div>

                {/* 2. Anti-Gravity Product (Right Side) */}
                <motion.div
                    style={{ y, rotateX, rotateY }}
                    className="relative z-10 hidden md:flex items-center justify-center pointer-events-none"
                >
                    {/* Levitating Container */}
                    <motion.div
                        animate={{ y: [0, -20, 0] }}
                        transition={{
                            repeat: Infinity,
                            duration: 6,
                            ease: "easeInOut"
                        }}
                        className="relative w-full max-w-lg aspect-square"
                    >
                        {/* Product Shadow (Reacts to levitation) */}
                        <motion.div
                            animate={{ scale: [1, 0.9, 1], opacity: [0.3, 0.2, 0.3] }}
                            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                            className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-48 h-8 bg-[#1D1D1F]/20 blur-2xl rounded-[100%]"
                        />

                        {/* Actual Image (Placeholder for now) */}
                        <img
                            src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800"
                            alt="Luxury Faucet"
                            className="w-full h-full object-contain drop-shadow-2xl"
                        />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;