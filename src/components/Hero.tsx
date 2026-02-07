
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <div className="relative h-screen w-full bg-[#050505] overflow-hidden flex flex-col justify-center items-center">
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover z-0"
            >
                <source src="https://videos.pexels.com/video-files/6774640/6774640-uhd_2560_1440_25fps.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Heavy Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#050505] z-10" />

            {/* Main Content */}
            <div className="relative z-20 text-center px-4 max-w-5xl">
                {/* Brand Label */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="font-sans text-sm md:text-base text-yellow-500 uppercase tracking-[0.3em] mb-4 font-bold"
                >
                    Gupta Sales • Est. 1995
                </motion.div>

                {/* Main Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="font-serif text-5xl md:text-7xl lg:text-9xl text-white tracking-tight mb-8 leading-none"
                >
                    Define Your <br className="hidden md:block" /> Sanctuary
                </motion.h1>

                {/* Subtext */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 1.5 }}
                    className="font-sans text-gray-300 text-lg md:text-xl max-w-2xl mx-auto font-light tracking-wide"
                >
                    Experience the convergence of heritage craftsmanship and modern design.
                </motion.p>
            </div>

            {/* Animated Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 2 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
            >
                <span className="text-[10px] uppercase tracking-[0.2em] text-white/50">Scroll</span>
                <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
                    <motion.div
                        animate={{ y: [0, 60] }}
                        transition={{
                            repeat: Infinity,
                            duration: 2,
                            ease: "easeInOut"
                        }}
                        className="absolute top-0 w-full h-1/2 bg-white/80 blur-[1px]"
                    />
                </div>
            </motion.div>
        </div>
    );
};

export default Hero;