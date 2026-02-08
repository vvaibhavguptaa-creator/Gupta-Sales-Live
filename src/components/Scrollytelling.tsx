
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Scrollytelling = () => {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"]
    });

    // Physics Mappings
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 0.8]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
    const x = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]); // Slight parallax movement

    // Background Color Morph (White -> Soft Blue -> White)
    const backgroundColor = useTransform(
        scrollYProgress,
        [0, 0.5, 1],
        ["#FFFFFF", "#E0F2FE", "#FFFFFF"]
    );

    // Text Opacities for the "Story"
    const text1Opacity = useTransform(scrollYProgress, [0.1, 0.3, 0.4], [0, 1, 0]);
    const text2Opacity = useTransform(scrollYProgress, [0.4, 0.6, 0.7], [0, 1, 0]);
    const text3Opacity = useTransform(scrollYProgress, [0.7, 0.9, 1.0], [0, 1, 0]);

    return (
        <motion.section
            ref={targetRef}
            style={{ backgroundColor }}
            className="relative h-[300vh] z-20"
        >
            <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center items-center">

                {/* 1. Deep Background Text (Depth Layer) */}
                <motion.div
                    style={{ x }}
                    className="absolute inset-0 flex items-center justify-center pointer-events-none z-0"
                >
                    <h1 className="text-[20vw] font-bold text-black/5 whitespace-nowrap select-none">
                        100% BRASS
                    </h1>
                </motion.div>

                {/* 2. The Hero Product (Fixed Center) */}
                <motion.div
                    style={{ rotate, scale, opacity }}
                    className="relative z-10 w-[60vw] md:w-[30vw] aspect-square flex items-center justify-center"
                >
                    {/* Dynamic Shadow */}
                    <motion.div
                        className="absolute bottom-0 w-full h-[20%] bg-black/20 blur-2xl rounded-[100%]"
                        style={{ x: useTransform(rotate, [0, 360], [20, -20]) }}
                    />

                    {/* Product Image */}
                    <img
                        src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800"
                        alt="Scrollytelling Product"
                        className="w-full h-full object-contain drop-shadow-2xl"
                    />
                </motion.div>

                {/* 3. Overlay Text Stories (Fade In/Out) */}
                <div className="absolute inset-0 pointer-events-none z-20 flex flex-col justify-center items-center">

                    {/* Story 1 */}
                    <motion.div style={{ opacity: text1Opacity }} className="absolute text-center bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl">
                        <h3 className="text-4xl font-semibold text-[#1D1D1F] mb-4">Precision Engineering</h3>
                        <p className="text-lg text-[#1D1D1F]/70 max-w-md">
                            Crafted with aerospace-grade tolerances for a leak-proof lifetime.
                        </p>
                    </motion.div>

                    {/* Story 2 */}
                    <motion.div style={{ opacity: text2Opacity }} className="absolute text-center bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl translate-y-32">
                        <h3 className="text-4xl font-semibold text-[#1D1D1F] mb-4">Eco-Flow Technology</h3>
                        <p className="text-lg text-[#1D1D1F]/70 max-w-md">
                            Saves 40% more water without compromising pressure.
                        </p>
                    </motion.div>

                    {/* Story 3 */}
                    <motion.div style={{ opacity: text3Opacity }} className="absolute text-center bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl -translate-y-32">
                        <h3 className="text-4xl font-semibold text-[#1D1D1F] mb-4">Forever Finish</h3>
                        <p className="text-lg text-[#1D1D1F]/70 max-w-md">
                            PVD coating that resists scratches and tarnishing for 50 years.
                        </p>
                    </motion.div>

                </div>
            </div>
        </motion.section>
    );
};

export default Scrollytelling;
