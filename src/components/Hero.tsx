
import { motion } from 'framer-motion';
import { HiArrowDown } from 'react-icons/hi';

const Hero = () => {
    return (
        <section className="relative h-screen w-full bg-black overflow-hidden flex flex-col justify-center items-center">

            {/* 1. Background Layer */}
            <div className="absolute inset-0 z-0">
                {/* Fallback Image: Ensuring no blank screen if video fails */}
                <img
                    src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop"
                    alt="Luxury Texture"
                    className="absolute inset-0 w-full h-full object-cover opacity-60"
                />

                {/* Cinematic Video: Ink/Smoke Effect */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-screen"
                >
                    <source src="https://videos.pexels.com/video-files/1448735/1448735-uhd_2560_1440_24fps.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {/* Dark Vignette Overlay for Readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-[#050505]" />
            </div>

            {/* 2. Main Content */}
            <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <span className="text-yellow-500 uppercase tracking-[0.4em] text-xs md:text-sm font-medium mb-6 block">
                        Est. 1995 • Bikaner
                    </span>
                </motion.div>

                <div className="overflow-hidden mb-6">
                    <motion.h1
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                        className="font-serif text-6xl md:text-8xl lg:text-9xl text-white tracking-tight leading-none"
                    >
                        Define Your <br />
                        <span className="italic text-gray-400">Sanctuary.</span>
                    </motion.h1>
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1.5 }}
                    className="text-gray-300 font-light text-lg md:text-xl tracking-wide max-w-xl mx-auto leading-relaxed"
                >
                    Curating the world's finest surfaces and bath fittings for the visionary homeowner.
                </motion.p>
            </div>

            {/* 3. Animated Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5, duration: 1.5 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3"
            >
                <span className="text-[10px] uppercase tracking-[0.3em] text-white/50">Explore</span>
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                >
                    <HiArrowDown className="text-white/50 text-xl" />
                </motion.div>
            </motion.div>

        </section>
    );
};

export default Hero;