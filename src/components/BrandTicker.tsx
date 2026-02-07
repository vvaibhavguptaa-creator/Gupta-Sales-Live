
import { motion } from 'framer-motion';

const brands = [
    'KOHLER',
    'JAQUAR',
    'GROHE',
    'KAJARIA',
    'SOMANY',
    'HINDWARE',
    'CERA',
    'ASIAN PAINTS',
];

const BrandTicker = () => {
    return (
        <section className="bg-black border-y border-white/5 py-8 overflow-hidden flex relative z-10">
            <div className="flex select-none">
                {/* First copy of the list */}
                <motion.div
                    initial={{ x: 0 }}
                    animate={{ x: "-100%" }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="flex flex-shrink-0 gap-16 pr-16"
                >
                    {brands.map((brand, index) => (
                        <span
                            key={index}
                            className="text-2xl md:text-3xl font-sans font-bold text-gray-800 hover:text-white transition-colors duration-300 cursor-pointer uppercase tracking-widest whitespace-nowrap"
                        >
                            {brand}
                        </span>
                    ))}
                </motion.div>

                {/* Second copy of the list for seamless loop */}
                <motion.div
                    initial={{ x: 0 }}
                    animate={{ x: "-100%" }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="flex flex-shrink-0 gap-16 pr-16"
                >
                    {brands.map((brand, index) => (
                        <span
                            key={`duplicate-${index}`}
                            className="text-2xl md:text-3xl font-sans font-bold text-gray-800 hover:text-white transition-colors duration-300 cursor-pointer uppercase tracking-widest whitespace-nowrap"
                        >
                            {brand}
                        </span>
                    ))}
                </motion.div>

                {/* Third copy (just to be safe for wide screens) */}
                <motion.div
                    initial={{ x: 0 }}
                    animate={{ x: "-100%" }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="flex flex-shrink-0 gap-16 pr-16"
                >
                    {brands.map((brand, index) => (
                        <span
                            key={`duplicate-2-${index}`}
                            className="text-2xl md:text-3xl font-sans font-bold text-gray-800 hover:text-white transition-colors duration-300 cursor-pointer uppercase tracking-widest whitespace-nowrap"
                        >
                            {brand}
                        </span>
                    ))}
                </motion.div>
            </div>

            {/* Gradient masks to fade edges */}
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-black to-transparent pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-black to-transparent pointer-events-none" />
        </section>
    );
};

export default BrandTicker;
