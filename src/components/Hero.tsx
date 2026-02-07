
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <div className="relative h-screen w-full bg-[#050505] overflow-hidden flex flex-col justify-center items-center">
            {/* 1. The Asset: Moody Abstract Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover opacity-60"
            >
                <source src="https://videos.pexels.com/video-files/5091624/5091624-uhd_2560_1440_25fps.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* 2. The Lighting: Vignette Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-[#050505] z-10" />

            {/* 3. The Typography & Layout: Cathedral Style */}
            <div className="relative z-20 text-center px-4 max-w-7xl mx-auto flex flex-col items-center">

                {/* Small Label */}
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="text-yellow-500 uppercase tracking-[0.4em] text-xs md:text-sm font-medium mb-8 block"
                >
                    Est. 1995 • Gupta Sales
                </motion.span>

                {/* Massive Headline */}
                <div className="overflow-hidden">
                    <motion.h1
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }} // Heavy custom ease
                        className="font-serif text-7xl md:text-9xl text-white tracking-tight leading-[0.9] text-center"
                    >
                        Define Your <br /> Sanctuary
                    </motion.h1>
                </div>

                {/* Subtext */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1.5 }}
                    className="mt-12 text-gray-400 font-light text-lg md:text-xl tracking-wide max-w-lg mx-auto leading-relaxed"
                >
                    Where the precision of modern architecture meets the soul of heritage craftsmanship.
                </motion.p>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5, duration: 1.5 }}
                className="absolute bottom-12 z-20 flex flex-col items-center gap-4"
            >
                <span className="text-[10px] uppercase tracking-[0.2em] text-white/40">Scroll</span>
                <div className="h-16 w-[1px] bg-white/10 overflow-hidden relative">
                    <motion.div
                        animate={{ y: ["-100%", "100%"] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                        className="absolute top-0 w-full h-1/2 bg-gradient-to-b from-transparent via-white/50 to-transparent"
                    />
                </div>
            </motion.div>
        </div>
    );
};

export default Hero;