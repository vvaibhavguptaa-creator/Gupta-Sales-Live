"use client";

import { motion } from 'framer-motion';
import { Cormorant_Garamond } from 'next/font/google';

const cormorant = Cormorant_Garamond({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    style: ["normal", "italic"]
});

const brands = [
    "KOHLER", "JAQUAR", "GROHE", "KAJARIA", "SOMANY",
    "HINDWARE", "CERA", "TOTO", "DURAVIT", "HANSGROHE",
    "ROCA", "AMERICAN STANDARD"
];

const BrandTicker = () => {
    return (
        <section className="relative overflow-hidden bg-white py-16 md:py-24 border-b border-black/5">

            {/* The Infinite Track */}
            <div className="flex">
                <motion.div
                    initial={{ x: 0 }}
                    animate={{ x: "-100%" }}
                    transition={{
                        repeat: Infinity,
                        duration: 40,
                        ease: "linear"
                    }}
                    className="flex flex-shrink-0 items-center gap-16 md:gap-32 pr-16 md:pr-32 group"
                >
                    {/* Render the list 4 times for seamless infinite loop */}
                    {[...Array(4)].map((_, i) => (
                        <div key={i} className="flex flex-shrink-0 items-center gap-16 md:gap-32">
                            {brands.map((brand) => (
                                <motion.span
                                    key={`${i}-${brand}`}
                                    whileHover={{
                                        scale: 1.1,
                                        color: "#000000",
                                        transition: { duration: 0.2 }
                                    }}
                                    className={`${cormorant.className} text-3xl md:text-5xl lg:text-6xl text-gray-300 font-medium tracking-wide cursor-pointer transition-colors duration-300 whitespace-nowrap`}
                                >
                                    {brand}
                                </motion.span>
                            ))}
                        </div>
                    ))}
                </motion.div>

                {/* Duplicate track to ensure no gaps (though 4x loop above might be enough, this is safer for ultra-wide) */}
                <motion.div
                    initial={{ x: 0 }}
                    animate={{ x: "-100%" }}
                    transition={{
                        repeat: Infinity,
                        duration: 40,
                        ease: "linear"
                    }}
                    className="flex flex-shrink-0 items-center gap-16 md:gap-32 pr-16 md:pr-32 group aria-hidden:true"
                >
                    {[...Array(4)].map((_, i) => (
                        <div key={i} className="flex flex-shrink-0 items-center gap-16 md:gap-32">
                            {brands.map((brand) => (
                                <motion.span
                                    key={`${i}-${brand}-dup`}
                                    whileHover={{
                                        scale: 1.1,
                                        color: "#000000",
                                        transition: { duration: 0.2 }
                                    }}
                                    className={`${cormorant.className} text-3xl md:text-5xl lg:text-6xl text-gray-300 font-medium tracking-wide cursor-pointer transition-colors duration-300 whitespace-nowrap`}
                                >
                                    {brand}
                                </motion.span>
                            ))}
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Ghost Gradient Masks (The Cowboy Secret Sauce) */}
            <div className="absolute inset-y-0 left-0 w-32 md:w-64 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-32 md:w-64 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

        </section>
    );
};

export default BrandTicker;
