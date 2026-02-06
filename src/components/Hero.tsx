import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image/Video Placeholder */}
            <div className="absolute inset-0 z-0">
                <div className="w-full h-full bg-primary relative">
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/30 to-primary"></div>
                    {/* You would typically use an img tag here with object-cover */}
                    <img
                        src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop"
                        alt="Luxury Interior"
                        className="w-full h-full object-cover opacity-60"
                    />
                </div>
            </div>

            <div className="relative z-10 container mx-auto px-6 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 tracking-tight"
                >
                    Elevate Your <span className="text-accent italic">Living</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-light"
                >
                    Discover a curated collection of exquisite furniture designed to transform your space into a sanctuary of style.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                >
                    <a
                        href="/showroom"
                        className="inline-block px-10 py-4 bg-accent text-primary font-semibold text-sm uppercase tracking-widest hover:bg-white hover:text-primary transition-all duration-300"
                    >
                        Explore Collection
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
