import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Scrollytelling = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // --- PHYSICS ENGINE (0% to 100% Coverage) --- //

    // 1. Rotation: 0-90deg across the FULL 300vh scroll
    // Map [0, 1] -> [0deg, 60deg] (Keep it subtle and classy)
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 60]);

    // 2. Text Timeline (Strict Handoffs)

    // Phase 1: Precision (0% - 33%)
    const opacity1 = useTransform(scrollYProgress, [0, 0.15, 0.3], [0, 1, 0]);
    const y1 = useTransform(scrollYProgress, [0, 0.3], [20, -20]);

    // Phase 2: Flow (33% - 66%)
    const opacity2 = useTransform(scrollYProgress, [0.3, 0.45, 0.6], [0, 1, 0]);
    const y2 = useTransform(scrollYProgress, [0.3, 0.6], [20, -20]);

    // Phase 3: Perfection (66% - 100%) - STAYS VISIBLE at the end
    // Fades in at 66%, stays until EXIT animation
    const opacity3 = useTransform(scrollYProgress, [0.6, 0.75, 0.9], [0, 1, 1]);
    const y3 = useTransform(scrollYProgress, [0.6, 0.9], [20, 0]);

    // 3. The EXIT Handoff (>95%)
    // Scale down and fade out slightly to let the next section slide over
    const containerScale = useTransform(scrollYProgress, [0.95, 1], [1, 0.95]);
    const containerOpacity = useTransform(scrollYProgress, [0.95, 1], [1, 0.8]);

    return (
        <div ref={containerRef} className="h-[300vh] relative">
            <motion.div
                style={{ scale: containerScale, opacity: containerOpacity }}
                className="sticky top-0 h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white to-gray-50"
            >
                {/* Background Details */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-gray-100 opacity-50 pointer-events-none" />

                {/* Left Side: Text Layer (Absolute Centered on Left Half) */}
                <div className="absolute left-0 w-full md:w-1/2 h-full flex flex-col justify-center items-center md:items-start pl-0 md:pl-32 z-20 pointer-events-none">
                    <div className="relative w-full max-w-lg text-center md:text-left">
                        <motion.h2 style={{ opacity: opacity1, y: y1 }} className="text-[#1D1D1F] text-6xl md:text-8xl font-bold tracking-tight absolute top-0 w-full">
                            Precision.
                        </motion.h2>
                        <motion.h2 style={{ opacity: opacity2, y: y2 }} className="text-[#1D1D1F] text-6xl md:text-8xl font-bold tracking-tight absolute top-0 w-full">
                            Flow.
                        </motion.h2>
                        <motion.h2 style={{ opacity: opacity3, y: y3 }} className="text-[#1D1D1F] text-6xl md:text-8xl font-bold tracking-tight absolute top-0 w-full">
                            Perfection.
                        </motion.h2>
                    </div>
                </div>

                {/* Right Side: Product Layer */}
                <div className="absolute right-0 w-full md:w-1/2 h-full flex items-center justify-center z-10">
                    <motion.div
                        style={{ rotate }}
                        className="w-[80vw] md:w-[40vw] max-w-[600px] aspect-square flex items-center justify-center p-10"
                    >
                        {/* Shadow that moves opposite to rotation for realism */}
                        <motion.div
                            style={{
                                rotate: useTransform(rotate, (r) => -r),
                                opacity: 0.2
                            }}
                            className="absolute bottom-10 w-[60%] h-[20px] bg-black blur-2xl rounded-[100%]"
                        />
                        <img
                            src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800"
                            alt="Scrollytelling Product"
                            className="w-full h-full object-contain drop-shadow-2xl"
                        />
                    </motion.div>
                </div>

            </motion.div>
        </div>
    );
};

export default Scrollytelling;
