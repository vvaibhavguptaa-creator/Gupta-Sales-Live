
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

// Elastic Text Component for "Super High Level" interaction
const ElasticLetter = ({ children }: { children: string }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.span
            className="inline-block relative cursor-default"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            animate={{
                y: isHovered ? -20 : 0,
                scaleY: isHovered ? 1.2 : 1,
                skewX: isHovered ? -10 : 0,
                color: isHovered ? "#EAB308" : "#FFFFFF" // Gold to White
            }}
            transition={{
                type: "spring",
                stiffness: 300,
                damping: 10
            }}
        >
            {children}
        </motion.span>
    );
};

const Hero = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <section ref={containerRef} className="relative h-screen w-full bg-[#050505] overflow-hidden flex flex-col justify-center items-center perspective-[1000px]">

            {/* 0. Curtain Reveal - Preserved for Theater Effect */}
            <motion.div
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 0 }}
                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 z-50 bg-black origin-top"
            />

            {/* 1. Atmospheric Fog Deep Layer */}
            <motion.div
                style={{ y: bgY }}
                className="absolute inset-0 overflow-hidden pointer-events-none"
            >
                {/* Mouse-reactive fluid patches */}
                <motion.div
                    animate={{ x: mousePosition.x * 0.04, y: mousePosition.y * 0.04 }}
                    transition={{ type: "spring", damping: 100, stiffness: 200 }}
                    className="absolute -top-[30%] -left-[10%] w-[80vw] h-[80vw] bg-neutral-900/40 rounded-full blur-[180px] mix-blend-screen"
                />
                <motion.div
                    animate={{ x: mousePosition.x * -0.05, y: mousePosition.y * -0.05 }}
                    transition={{ type: "spring", damping: 100, stiffness: 200 }}
                    className="absolute -bottom-[30%] -right-[10%] w-[90vw] h-[90vw] bg-neutral-800/30 rounded-full blur-[180px] mix-blend-screen"
                />
            </motion.div>

            {/* 2. Massive Editorial Typography */}
            <motion.div
                style={{ y: textY, opacity }}
                className="relative z-10 flex flex-col items-center justify-center w-full px-4"
            >
                {/* Subtitle */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="flex items-center gap-4 mb-8"
                >
                    <div className="h-[1px] w-12 bg-yellow-500/50" />
                    <span className="text-yellow-500/80 uppercase tracking-[0.5em] text-xs font-medium font-sans">
                        Crafting Legacy Since 1995
                    </span>
                    <div className="h-[1px] w-12 bg-yellow-500/50" />
                </motion.div>

                {/* Main Headline - Split & Huge */}
                <div className="flex flex-col items-center leading-[0.85] select-none mix-blend-difference">
                    <motion.div
                        initial={{ y: 150, rotate: 5 }}
                        animate={{ y: 0, rotate: 0 }}
                        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                        className="overflow-hidden"
                    >
                        <h1 className="font-serif text-[18vw] text-white tracking-tighter flex">
                            {Array.from("ART").map((char, i) => (
                                <ElasticLetter key={i}>{char}</ElasticLetter>
                            ))}
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: 0.8 }}
                        className="flex items-center gap-6 my-2"
                    >
                        <span className="font-sans text-xl md:text-3xl font-light italic text-white/40 tracking-widest">of</span>
                    </motion.div>

                    <motion.div
                        initial={{ y: 150, rotate: -5 }}
                        animate={{ y: 0, rotate: 0 }}
                        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
                        className="overflow-hidden"
                    >
                        <h1 className="font-serif text-[18vw] text-white tracking-tighter flex">
                            {Array.from("LIVING").map((char, i) => (
                                <ElasticLetter key={i}>{char}</ElasticLetter>
                            ))}
                        </h1>
                    </motion.div>
                </div>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 1 }}
                    className="mt-12 text-white/50 font-light text-sm md:text-base tracking-widest max-w-md text-center uppercase"
                >
                    Precision engineering meets <br /> timeless aesthetics.
                </motion.p>
            </motion.div>

            {/* 3. Magnetic Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5, duration: 1 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 mix-blend-difference"
            >
                <a href="#collection">
                    <MagneticButton>
                        <div className="flex flex-col items-center gap-3 cursor-pointer group p-4">
                            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
                                <HiArrowDown className="text-xl animated-bounce" />
                            </div>
                        </div>
                    </MagneticButton>
                </a>
            </motion.div>

        </section>
    );
};

export default Hero;