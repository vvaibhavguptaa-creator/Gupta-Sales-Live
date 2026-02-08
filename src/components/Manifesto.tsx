
import { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

const ManifestoItem = ({ children, progress, range }: { children: string, progress: MotionValue<number>, range: [number, number] }) => {
    const opacity = useTransform(progress, range, [0.2, 1]);
    const y = useTransform(progress, range, [20, 0]);
    const filter = useTransform(progress, range, ["blur(4px)", "blur(0px)"]);

    return (
        <motion.span
            style={{ opacity, y, filter }}
            className="mr-3 inline-block transition-colors duration-200"
        >
            {children}
        </motion.span>
    );
};

const Manifesto = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 0.9", "end 0.8"]
    });

    const text = "Thirty years of redefining spaces. We don't just sell tiles; we curate the backdrop of your life's most intimate moments. From the morning ritual to the evening unwind, our surfaces are the silent witnesses to your legacy.";
    const words = text.split(" ");

    return (
        <section ref={containerRef} className="relative bg-black py-40 px-6 min-h-[200vh]">
            <div className="container mx-auto max-w-6xl">
                <div className="sticky top-40">
                    <h2 className="text-4xl md:text-7xl lg:text-[5vw] font-serif font-light leading-[1.1] text-white tracking-tight flex flex-wrap">
                        {words.map((word, i) => {
                            const start = i / words.length;
                            const end = start + (1 / words.length);
                            return (
                                <ManifestoItem key={i} progress={scrollYProgress} range={[start, end]}>
                                    {word}
                                </ManifestoItem>
                            );
                        })}
                    </h2>

                    <motion.div
                        style={{ opacity: useTransform(scrollYProgress, [0.8, 1], [0, 1]) }}
                        className="mt-12 flex items-center gap-4"
                    >
                        <div className="h-[1px] w-20 bg-yellow-500" />
                        <span className="text-yellow-500 uppercase tracking-widest text-sm font-medium">
                            Gupta Sales • Est. 1995
                        </span>
                    </motion.div>
                </div>
            </div>

            {/* Background Texture/Noise for "High Level" feel */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] mix-blend-overlay" />
        </section>
    );
};

export default Manifesto;
