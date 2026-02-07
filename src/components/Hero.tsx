import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className="relative h-screen w-full bg-[#050505] overflow-hidden flex flex-col justify-center items-center">
            {/* THE FIX: Added 'pointer-events-none'. 
         This lets your mouse click/scroll "through" the spotlight.
      */}
            <div
                className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300"
                style={{
                    background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.06), transparent 40%)`
                }}
            />

            {/* Main Content */}
            <div className="relative z-10 text-center px-4">
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="font-serif text-5xl md:text-7xl lg:text-9xl text-white tracking-tight mb-6"
                >
                    GUPTA SALES
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="font-sans text-xs md:text-sm text-yellow-500 uppercase tracking-[0.3em]"
                >
                    Curating Lifestyles Since 1995
                </motion.p>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
                <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white to-transparent opacity-20" />
            </motion.div>
        </div>
    );
};

export default Hero;