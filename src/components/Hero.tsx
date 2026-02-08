
import { useRef, useState, useEffect } from 'react';
import { motion, useSpring, useMotionValue, useTransform, useScroll } from 'framer-motion';
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
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    // Parallax transforms
    const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

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
                delayChildren: 1.2 // Delayed for curtain
            }
        }
    };

    const wordVariants = {
        hidden: { opacity: 0, y: 100, filter: "blur(20px)" }, // Deeper deeper start
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
                duration: 1.2,
                // ease removed for TS fix, default is fine/smooth
            }
        }
    };

    return (
        <section ref={containerRef} className="relative h-screen w-full bg-[#050505] overflow-hidden flex flex-col justify-center items-center">

            {/* 0. Curtain Reveal */}
            <motion.div
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 0 }}
                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 z-50 bg-black origin-top"
            />

            {/* 1. Fluid Interactive Background */}
            <motion.div
                style={{ y: bgY }}
                className="absolute inset-0 overflow-hidden pointer-events-none"
            >
                <motion.div
                    animate={{
                        x: mousePosition.x * 0.02,
                        y: mousePosition.y * 0.02,
                    }}
                    transition={{ type: "spring", damping: 50, stiffness: 400 }}
                    className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] bg-yellow-600/20 rounded-full blur-[120px] mix-blend-screen"
                />

                <motion.div
                    animate={{
                        x: mousePosition.x * -0.03,
                        y: mousePosition.y * -0.03,
                    }}
                    transition={{ type: "spring", damping: 40, stiffness: 300 }}
                    className="absolute -bottom-[20%] -right-[10%] w-[80vw] h-[80vw] bg-slate-800/30 rounded-full blur-[120px] mix-blend-screen"
                />

                <motion.div
                    animate={{
                        x: mousePosition.x * 0.05,
                        y: mousePosition.y * 0.05,
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        scale: { duration: 10, repeat: Infinity, repeatType: "mirror" },
                        x: { type: "spring", damping: 30, stiffness: 200 },
                        y: { type: "spring", damping: 30, stiffness: 200 }
                    }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] bg-white/5 rounded-full blur-[150px] mix-blend-overlay"
                />

                <div className="absolute inset-0 bg-[#050505]/40 z-0" />
            </motion.div>

            {/* 2. Typography Centerpiece with Staggered Reveal and Parallax */}
            <motion.div style={{ y: textY }} className="relative z-10 text-center px-4 max-w-7xl mx-auto">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    <motion.span
                        variants={wordVariants}
                        className="text-yellow-500 uppercase tracking-[0.5em] text-xs md:text-sm font-medium mb-8 block font-sans"
                    >
                        Est. 1995 • Bikaner
                    </motion.span>

                    <h1 className="font-serif text-7xl md:text-9xl text-white tracking-tighter leading-[0.9] mb-8">
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
            </motion.div>

            {/* 3. Magnetic Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5, duration: 1 }}
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