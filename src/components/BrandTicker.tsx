
import { motion } from "framer-motion";

const brands = [
    "Kohler", "Jaquar", "Grohe", "Kajaria", "Somany", "Hindware"
];

const BrandTicker = () => {
    return (
        <section className="bg-black py-16 border-y border-white/5 relative z-10">
            <div className="container mx-auto px-6">
                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
                    {brands.map((brand, i) => (
                        <motion.span
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.8 }}
                            className="text-2xl md:text-3xl font-serif font-light text-white tracking-widest cursor-default hover:text-yellow-500 transition-colors duration-300"
                        >
                            {brand}
                        </motion.span>
                    ))}
                </div>
                <p className="text-center text-white/20 text-[10px] uppercase tracking-[0.3em] mt-8">
                    Trusted by the World's Best
                </p>
            </div>
        </section>
    );
};

export default BrandTicker;
