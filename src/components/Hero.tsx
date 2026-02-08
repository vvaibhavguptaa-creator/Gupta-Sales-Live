import { motion } from 'framer-motion';
import { HiArrowDown } from 'react-icons/hi';

const Hero = () => {
    return (
        <section className="relative h-screen w-full bg-[#050505] overflow-hidden">
            {/* 1. BACKGROUND */}
            {/* Added a fallback background since the user mentioned the previous video didn't load 
          and the snippet started at '2. CONTENT'. Using a subtle gradient/image to ensure it's not just black. */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/50 to-[#050505]" />
            </div>

            {/* 2. CONTENT */}
            <div className='relative z-10 flex h-full flex-col items-center justify-center px-4 text-center'>
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className='mb-4 text-sm font-medium tracking-[0.3em] text-yellow-500 uppercase'
                >
                    Est. 1995 • Bikaner
                </motion.span>
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className='font-serif text-6xl md:text-8xl lg:text-9xl text-white leading-tight'
                >
                    Define Your <br />
                    <span className='text-gray-400'>Sanctuary.</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 1 }}
                    className='mt-8 max-w-lg text-lg text-gray-300 font-light tracking-wide'
                >
                    Curating the world's finest surfaces and bath fittings for the visionary homeowner.
                </motion.p>
            </div>

            {/* 3. SCROLL INDICATOR */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className='absolute bottom-10 left-1/2 -translate-x-1/2'
            >
                <a href='#collection' className='flex flex-col items-center gap-2 text-white/50 hover:text-white transition-colors'>
                    <span className='text-[10px] tracking-widest uppercase'>Explore</span>
                    <HiArrowDown className='animate-bounce text-xl' />
                </a>
            </motion.div>
        </section>
    );
};

export default Hero;