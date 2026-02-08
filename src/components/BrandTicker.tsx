
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
        <section className="bg-black border-y border-white/10 py-6 overflow-hidden flex relative z-10 select-none">
            {/* 
                Seamless Loop Logic:
                1. We duplicate the list to create 2 identical sets.
                2. We animate the entire track to move -50% (exactly the width of one set).
                3. Since the second set is identical to the first, the reset to 0% is invisible.
            */}
            <motion.div
                className="flex items-center gap-16 pr-16" // pr-16 to maintain gap at the end of the loop
                animate={{
                    x: "-50%",
                }}
                transition={{
                    duration: 40, // Slower, more elegant speed
                    repeat: Infinity,
                    ease: "linear",
                }}
                style={{
                    width: "fit-content",
                }}
            >
                {/* First Set */}
                {brands.map((brand, index) => (
                    <span
                        key={index}
                        className="text-2xl md:text-3xl font-sans font-bold text-gray-800 hover:text-white transition-colors duration-300 cursor-pointer uppercase tracking-widest whitespace-nowrap"
                    >
                        {brand}
                    </span>
                ))}

                {/* Second Set (Duplicate) */}
                {brands.map((brand, index) => (
                    <span
                        key={`duplicate-${index}`}
                        className="text-2xl md:text-3xl font-sans font-bold text-gray-800 hover:text-white transition-colors duration-300 cursor-pointer uppercase tracking-widest whitespace-nowrap"
                    >
                        {brand}
                    </span>
                ))}
            </motion.div>

            {/* Gradient masks to fade edges */}
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent pointer-events-none z-10" />
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent pointer-events-none z-10" />
        </section>
    );
};

export default BrandTicker;
