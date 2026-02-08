import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Scrollytelling = () => {
    // 1. The Setup
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // 2. The Rotation (Stretches smoothly across the WHOLE section)
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 90]); // 90deg is enough for a classy turn

    // 3. The Text Timeline (NO GAPS)
    // Text 1: "Precision" (Visible from 0% to 30%)
    const opacity1 = useTransform(scrollYProgress, [0, 0.2, 0.3], [0, 1, 0]);
    const y1 = useTransform(scrollYProgress, [0, 0.3], [20, -20]);

    // Text 2: "Flow" (Visible from 30% to 60%)
    const opacity2 = useTransform(scrollYProgress, [0.3, 0.5, 0.6], [0, 1, 0]);
    const y2 = useTransform(scrollYProgress, [0.3, 0.6], [20, -20]);

    // Text 3: "Perfection" (Visible from 60% to 90%)
    const opacity3 = useTransform(scrollYProgress, [0.6, 0.8, 0.9], [0, 1, 0]);
    const y3 = useTransform(scrollYProgress, [0.6, 0.9], [20, -20]);

    return (
        <div ref={containerRef} className="h-[300vh] relative bg-[#F5F7FA]">
            <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">

                {/* Background Gradient */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-[#E0F2FE]/30 to-[#F5F7FA] pointer-events-none" />

                {/* The Text Layer (Absolute Positioned to overlap) */}
                <div className="absolute z-20 w-full max-w-[1200px] px-6 pointer-events-none flex flex-col justify-center h-full">
                    <motion.h2 style={{ opacity: opacity1, y: y1 }} className="text-[#1D1D1F] text-6xl md:text-8xl font-bold tracking-tight absolute left-4 md:left-32">
                        Precision.
                    </motion.h2>
                    <motion.h2 style={{ opacity: opacity2, y: y2 }} className="text-[#1D1D1F] text-6xl md:text-8xl font-bold tracking-tight absolute left-4 md:left-32">
                        Flow.
                    </motion.h2>
                    <motion.h2 style={{ opacity: opacity3, y: y3 }} className="text-[#1D1D1F] text-6xl md:text-8xl font-bold tracking-tight absolute left-4 md:left-32">
                        Perfection.
                    </motion.h2>
                </div>

                {/* The Product Layer */}
                <motion.div style={{ rotate }} className="relative z-10 w-[80vw] md:w-[40vw] max-w-[600px] aspect-square flex items-center justify-center">
                    <img
                        src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800"
                        alt="Scrollytelling Product"
                        className="w-full h-full object-contain drop-shadow-2xl"
                    />
                </motion.div>

            </div>
        </div>
    );
};

export default Scrollytelling;
