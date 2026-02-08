
import { motion } from 'framer-motion';
import { HiArrowDown } from 'react-icons/hi';

const Hero = () => {
    return (
        <section className="relative h-screen w-full bg-[#050505] overflow-hidden flex flex-col justify-center items-center">

            {/* 1. Living Gradient Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Orb 1: Gold - Top Left */}
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

                {/* Orb 2: Deep Blue/Grey - Bottom Right */}
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

                {/* Orb 3: White/Subtle - Center */}
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

                {/* Noise overlay to blend the gradients */}
                <div className="absolute inset-0 bg-[#050505]/20 z-0" />
            </div>

            {/* 2. Typography Centerpiece */}
            <div className="relative z-10 text-center px-4 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                >
                    <span className="text-yellow-500 uppercase tracking-[0.4em] text-xs md:text-sm font-medium mb-8 block font-sans">
                        Est. 1995 • Bikaner
                    </span>

                    <h1 className="font-serif text-7xl md:text-9xl text-white tracking-tight leading-none mb-8">
                        Define Your <br className="hidden md:block" /> Sanctuary.
                    </h1>

                    <p className="text-gray-400 font-light text-lg md:text-xl tracking-wide max-w-lg mx-auto">
                        Where the precision of modern architecture meets the soul of heritage craftsmanship.
                    </p>
                </motion.div>
            </div>

            {/* 3. Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3"
            >
                <span className="text-[10px] uppercase tracking-[0.3em] text-white/50">Explore</span>
                <HiArrowDown className="text-white/50 text-xl animate-bounce" />
            </motion.div>

        </section>
    );
};

export default Hero;