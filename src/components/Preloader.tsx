
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => setIsLoading(false), 500); // Delay before exit
                    return 100;
                }
                return prev + 1;
            });
        }, 20); // Duration of count

        return () => clearInterval(interval);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-black overflow-hidden">
                    {/* Counter */}
                    <motion.div
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0, y: -50 }}
                        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                        className="relative z-10"
                    >
                        <h1 className="text-[15vw] md:text-[10vw] font-serif font-light text-white leading-none tracking-tighter">
                            {count}%
                        </h1>
                    </motion.div>

                    {/* Curtain Split Effect on Exit */}
                    <motion.div
                        initial={{ scaleY: 1 }}
                        exit={{ scaleY: 0, originY: 0 }}
                        transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
                        className="absolute inset-0 bg-[#050505] z-0"
                    />
                </div>
            )}
        </AnimatePresence>
    );
};

export default Preloader;
