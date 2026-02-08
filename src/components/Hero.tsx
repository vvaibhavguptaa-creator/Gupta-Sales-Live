
import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { HiArrowDown } from 'react-icons/hi';

const MagneticButton = ({ children }: { children: React.ReactNode }) => {
    const ref = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
    const springX = useSpring(x, springConfig);
    const springY = useSpring(y, springConfig);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const { clientX, clientY } = e;
        const refElement = ref.current;
        if (!refElement) return;

        const { left, top, width, height } = refElement.getBoundingClientRect();
        const centerX = left + width / 2;
        const centerY = top + height / 2;
        x.set((clientX - centerX) * 0.3);
        y.set((clientY - centerY) * 0.3);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ x: springX, y: springY }}
        >
            {children}
        </motion.div>
    );
};

const Hero = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section ref={containerRef} className="relative h-screen w-full bg-[#050505] overflow-hidden flex flex-col justify-center items-center pt-20">

            {/* Background Image / Texture - Subtle Lux */}
            <div className="absolute inset-0 opacity-20 z-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-800/20 via-black to-black" />
            </div>

            <motion.div
                style={{ y, opacity }}
                className="relative z-10 flex flex-col items-center text-center px-4 mix-blend-difference"
            >
                {/* 1. Top Label */}
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="text-yellow-500/80 text-xs md:text-sm font-sans tracking-[0.4em] uppercase mb-6"
                >
                    Est. 1995 • Bikaner
                </motion.span>

                {/* 2. Main Title - Vogue / Editorial Style */}
                <h1 className="font-serif text-[16vw] leading-[0.8] text-white tracking-tighter flex flex-col items-center">
                    <motion.span
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                        className="block"
                    >
                        THE ART
                    </motion.span>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1.5, delay: 0.8, ease: "circOut" }}
                        className="w-[20vw] h-[1px] bg-white/30 my-4 md:my-8"
                    />
                    <motion.span
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
                        className="block italic font-light text-white/90"
                    >
                        OF LIVING
                    </motion.span>
                </h1>

                {/* 3. Description */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 1 }}
                    className="mt-12 text-white/60 font-sans font-light text-sm md:text-lg tracking-widest max-w-lg leading-relaxed"
                >
                    Curating the world's finest sanitaryware and surfaces for homes that demand legacy.
                </motion.p>
            </motion.div>

            {/* 4. Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-12 z-20"
            >
                <MagneticButton>
                    <div className="flex flex-col items-center gap-2 cursor-pointer opacity-50 hover:opacity-100 transition-opacity duration-500">
                        <span className="text-[10px] uppercase tracking-widest text-white">Explore</span>
                        <HiArrowDown className="text-white text-xl animate-bounce" />
                    </div>
                </MagneticButton>
            </motion.div>
        </section>
    );
};

export default Hero;