
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
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

    const letterVariants: any = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1.5,
                ease: [0.2, 0.65, 0.3, 0.9]
            }
        }
    };

    const subtitleVariants: any = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 1.5,
                delay: 1.8,
                ease: "easeOut"
            }
        }
    };

    const titleText = "GUPTA SALES";

    return (
        <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-[#050505] cursor-none md:cursor-default">

            {/* Spotlight Effect Background */}
            <div
                className="absolute inset-0 pointer-events-none z-0 transition-opacity duration-300"
                style={{
                    background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.06), transparent 40%)`
                }}
            />

            <div className="relative z-10 text-center px-4">
                {/* Main Title - Staggered Letters */}
                <motion.h1
                    className="text-5xl md:text-8xl lg:text-9xl font-serif text-white font-bold tracking-tight mb-6"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {titleText.split('').map((char, index) => (
                        <motion.span key={index} variants={letterVariants} className="inline-block">
                            {char === " " ? "\u00A0" : char}
                        </motion.span>
                    ))}
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    className="text-xs md:text-sm text-yellow-500 uppercase tracking-[0.3em] font-sans font-medium"
                    variants={subtitleVariants}
                    initial="hidden"
                    animate="visible"
                >
                    Curating Lifestyles Since 1995
                </motion.p>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5, duration: 1 }}
            >
                <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white/50 to-transparent relative overflow-hidden">
                    <motion.div
                        className="absolute top-0 left-0 w-full h-1/2 bg-white"
                        animate={{ y: [0, 64, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
