import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Scrollytelling = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // --- PHYSICS ENGINE (Full 400vh coverage) --- //

    // 1. Rotation: Slow 90deg turn over the entire section
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 90]);

    // 2. Text Timeline (4 Steps)

    // Text 1: "Precision" (0% - 20%)
    const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.2], [0, 1, 0]);
    const y1 = useTransform(scrollYProgress, [0, 0.2], [20, -20]);

    // Text 2: "Flow" (20% - 40%)
    const opacity2 = useTransform(scrollYProgress, [0.2, 0.3, 0.4], [0, 1, 0]);
    const y2 = useTransform(scrollYProgress, [0.2, 0.4], [20, -20]);

    // Text 3: "Silence" (40% - 60%)
    const opacity3 = useTransform(scrollYProgress, [0.4, 0.5, 0.6], [0, 1, 0]);
    const y3 = useTransform(scrollYProgress, [0.4, 0.6], [20, -20]);

    // Text 4: "Perfection" (60% - 100%) - STAYS VISIBLE!
    // Fades in at 60%, stays fully visible until the end
    const opacity4 = useTransform(scrollYProgress, [0.6, 0.7, 1], [0, 1, 1]);
    const y4 = useTransform(scrollYProgress, [0.6, 0.7], [20, 0]);


    return (
        // PARENT: Defines the total scroll length (400vh)
        <div ref={containerRef} className="relative h-[400vh] bg-[#F5F5F7]">

            {/* STICKY WRAPPER: Locks to viewport. Must be h-screen and top-0. */}
            <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden z-10">

                {/* Background Gradient Detail */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-[#F5F5F7] opacity-60 pointer-events-none" />

                {/* TEXT LAYER (Left Side) */}
                <div className="absolute left-0 w-full md:w-1/2 h-full flex flex-col justify-center items-center md:items-start pl-0 md:pl-24 z-20 pointer-events-none">
                    <div className="relative w-full max-w-lg text-center md:text-left">
                        {/* 1. Precision */}
                        <motion.h2 style={{ opacity: opacity1, y: y1 }} className="absolute top-0 w-full text-[#1D1D1F] text-5xl md:text-8xl font-bold tracking-tight">
                            Precision.
                        </motion.h2>

                        {/* 2. Flow */}
                        <motion.h2 style={{ opacity: opacity2, y: y2 }} className="absolute top-0 w-full text-[#1D1D1F] text-5xl md:text-8xl font-bold tracking-tight">
                            Flow.
                        </motion.h2>

                        {/* 3. Silence */}
                        <motion.h2 style={{ opacity: opacity3, y: y3 }} className="absolute top-0 w-full text-[#1D1D1F] text-5xl md:text-8xl font-bold tracking-tight">
                            Silence.
                        </motion.h2>

                        {/* 4. Perfection (Stays) */}
                        <motion.h2 style={{ opacity: opacity4, y: y4 }} className="absolute top-0 w-full text-[#1D1D1F] text-5xl md:text-8xl font-bold tracking-tight">
                            Perfection.
                        </motion.h2>
                    </div>
                </div>


                {/* PRODUCT LAYER (Right Side) */}
                <div className="absolute right-0 w-full md:w-1/2 h-full flex items-center justify-center z-10">
                    <motion.div
                        style={{ rotate }}
                        className="w-[80vw] md:w-[40vw] max-w-[600px] aspect-square flex items-center justify-center"
                    >
                        {/* Shadow */}
                        <motion.div
                            style={{
                                rotate: useTransform(rotate, (r) => -r),
                                opacity: 0.3
                            }}
                            className="absolute bottom-12 w-[60%] h-[20px] bg-black blur-2xl rounded-[100%]"
                        />

                        <img
                            src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800"
                            alt="Scrollytelling Product"
                            className="w-full h-full object-contain drop-shadow-2xl"
                        />
                    </motion.div>
                </div>

            </div>
        </div>
    );
};

export default Scrollytelling;
