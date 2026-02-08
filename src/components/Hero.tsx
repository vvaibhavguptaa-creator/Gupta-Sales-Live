
import { useRef, useState, useEffect } from 'react';
import { motion, useSpring, useMotionValue, useTransform } from 'framer-motion';
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
        const { left, top, width, height } = ref.current!.getBoundingClientRect();
        const centerX = left + width / 2;
        const centerY = top + height / 2;
        x.set((clientX - centerX) * 0.3); // Magnetic pull strength
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

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const wordVariants = {
        hidden: { opacity: 0, y: 50, filter: "blur(10px)" },
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1]
            }
        }
    };

    return (
        <section className="relative h-screen w-full bg-[#050505] overflow-hidden flex flex-col justify-center items-center">

            {/* 1. Living Gradient Background (Preserved) */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        x: [0, 100, 0],
                        y: [0, -50, 0],
                        scale: [1, 1.2, 1]
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        repeatType: "mirror",
                        ease: "easeInOut"
                    }}
                    className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] bg-yellow-600/20 rounded-full blur-[120px]"
                />

                <motion.div
                    animate={{
                        x: [0, -100, 0],
                        y: [0, 50, 0],
                        scale: [1, 1.3, 1]
                    }}
                    transition={{
                        duration: 18,
                        repeat: Infinity,
                        repeatType: "mirror",
                        ease: "easeInOut"
                    }}
                    className="absolute -bottom-[20%] -right-[10%] w-[80vw] h-[80vw] bg-slate-800/30 rounded-full blur-[120px]"
                />

                <motion.div
                    animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        repeatType: "mirror",
                        ease: "easeInOut"
                    }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] bg-white/5 rounded-full blur-[150px]"
                />

                <div className="absolute inset-0 bg-[#050505]/20 z-0" />
            </div>

            {/* 2. Typography Centerpiece with Staggered Reveal */}
            <div className="relative z-10 text-center px-4 max-w-7xl mx-auto">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    <motion.span
                        variants={wordVariants}
                        className="text-yellow-500 uppercase tracking-[0.4em] text-xs md:text-sm font-medium mb-8 block font-sans"
                    >
                        Est. 1995 • Bikaner
                    </motion.span>

                    <h1 className="font-serif text-7xl md:text-9xl text-white tracking-tight leading-none mb-8">
                        <div className="overflow-hidden inline-block mr-4 md:mr-8"><motion.span className="inline-block" variants={wordVariants}>Define</motion.span></div>
                        <div className="overflow-hidden inline-block mr-4 md:mr-8"><motion.span className="inline-block" variants={wordVariants}>Your</motion.span></div>
                        <br className="hidden md:block" />
                        <div className="overflow-hidden inline-block"><motion.span className="inline-block text-white/50 italic" variants={wordVariants}>Sanctuary.</motion.span></div>
                    </h1>

                    <motion.p
                        variants={wordVariants}
                        className="text-gray-400 font-light text-lg md:text-xl tracking-wide max-w-lg mx-auto"
                    >
                        Where the precision of modern architecture meets the soul of heritage craftsmanship.
                    </motion.p>
                </motion.div>
            </div>

            {/* 3. Magnetic Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
            >
                <a href="#collection">
                    <MagneticButton>
                        <div className="flex flex-col items-center gap-3 cursor-pointer group p-4">
                            <span className="text-[10px] uppercase tracking-[0.3em] text-white/50 group-hover:text-white transition-colors duration-300">Explore</span>
                            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/30 transition-colors duration-300 bg-white/5 backdrop-blur-sm">
                                <HiArrowDown className="text-white/50 text-xl group-hover:text-white transition-colors duration-300" />
                            </div>
                        </div>
                    </MagneticButton>
                </a>
            </motion.div>

        </section>
    );
};

export default Hero;