
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Manifesto = () => {
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Map scroll progress to opacity for each line
    // As we scroll into the section (0 to 0.5), text fades in.
    const opacityLine1 = useTransform(scrollYProgress, [0.2, 0.5], [0.2, 1]);
    const opacityLine2 = useTransform(scrollYProgress, [0.4, 0.7], [0.2, 1]);

    // Slight vertical movement for parallax feel
    const yLine1 = useTransform(scrollYProgress, [0.2, 0.5], [50, 0]);
    const yLine2 = useTransform(scrollYProgress, [0.4, 0.7], [50, 0]);

    return (
        <section
            ref={containerRef}
            className="min-h-screen bg-[#050505] flex flex-col justify-center items-center px-6 py-20"
        >
            <div className="max-w-5xl mx-auto text-center">
                <motion.h2
                    style={{ opacity: opacityLine1, y: yLine1 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-8 md:mb-12 leading-tight"
                >
                    We don&apos;t just sell tiles.
                </motion.h2>

                <motion.h2
                    style={{ opacity: opacityLine2, y: yLine2 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-tight italic"
                >
                    We curate lifestyles.
                </motion.h2>
            </div>
        </section>
    );
};

export default Manifesto;
