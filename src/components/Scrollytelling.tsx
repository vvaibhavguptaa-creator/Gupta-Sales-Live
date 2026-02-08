import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Scrollytelling = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // --- PHYSICS ENGINE --- //

    // Rotation: Smooth 180 degree turn.
    // Map [0, 1] -> [0deg, 180deg]
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 180]);

    // Scale: Breathes (In -> Out -> In)
    // Map [0, 0.5, 1] -> [0.8, 1.1, 0.9]
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.1, 0.9]);

    // Opacity: Stays visible until the very end, then quick fade
    const opacity = useTransform(scrollYProgress, [0.9, 1], [1, 0]);

    // --- TEXT SEQUENCER --- //

    // Text 1: "Precision" (Starts visible, fades out by 30%)
    const text1Opacity = useTransform(scrollYProgress, [0.1, 0.25], [1, 0]);
    const text1Y = useTransform(scrollYProgress, [0.1, 0.25], [0, -20]);

    // Text 2: "Flow" (Fades in at 30%, out by 60%)
    const text2Opacity = useTransform(scrollYProgress, [0.3, 0.45, 0.6], [0, 1, 0]);
    const text2Y = useTransform(scrollYProgress, [0.3, 0.45, 0.6], [20, 0, -20]);

    // Text 3: "Silence" (Fades in at 65%, stays)
    const text3Opacity = useTransform(scrollYProgress, [0.65, 0.8], [0, 1]);
    const text3Y = useTransform(scrollYProgress, [0.65, 0.8], [20, 0]);


    return (
        <div ref={containerRef} className="relative h-[200vh] z-10 bg-[#F5F7FA]">

            <div className="sticky top-0 h-screen overflow-hidden flex flex-col md:flex-row items-center justify-center">

                {/* Background: Pulsing Radial Gradient */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-[#E0F2FE]/30 to-[#F5F7FA] pointer-events-none" />

                {/* LEFT SIDE: Text Carousel */}
                <div className="relative w-full md:w-1/2 h-full flex items-center justify-center pointer-events-none z-20">

                    {/* Text Block 1 */}
                    <motion.div
                        style={{ opacity: text1Opacity, y: text1Y }}
                        className="absolute text-center md:text-left px-8"
                    >
                        <h3 className="text-[#1D1D1F] text-5xl md:text-7xl font-semibold tracking-tight mb-4">Precision.</h3>
                        <p className="text-[#1D1D1F]/60 text-xl font-medium max-w-sm">
                            Aerospace-grade brass. <br /> Zero tolerance for error.
                        </p>
                    </motion.div>

                    {/* Text Block 2 */}
                    <motion.div
                        style={{ opacity: text2Opacity, y: text2Y }}
                        className="absolute text-center md:text-left px-8"
                    >
                        <h3 className="text-[#1D1D1F] text-5xl md:text-7xl font-semibold tracking-tight mb-4">Flow.</h3>
                        <p className="text-[#1D1D1F]/60 text-xl font-medium max-w-sm">
                            Engineered for perfect pressure. <br /> Even at low flow.
                        </p>
                    </motion.div>

                    {/* Text Block 3 */}
                    <motion.div
                        style={{ opacity: text3Opacity, y: text3Y }}
                        className="absolute text-center md:text-left px-8"
                    >
                        <h3 className="text-[#1D1D1F] text-5xl md:text-7xl font-semibold tracking-tight mb-4">Silence.</h3>
                        <p className="text-[#1D1D1F]/60 text-xl font-medium max-w-sm">
                            Whisper-quiet cartridges. <br /> The sound of luxury.
                        </p>
                    </motion.div>

                </div>


                {/* RIGHT SIDE: The Product */}
                <motion.div
                    style={{ opacity }}
                    className="relative w-full md:w-1/2 h-[50vh] md:h-full flex items-center justify-center z-20"
                >
                    <motion.div
                        style={{ rotate, scale }}
                        className="relative w-[80%] max-w-[500px] aspect-square flex items-center justify-center"
                    >
                        {/* Dynamic Shadow */}
                        <motion.div
                            className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[60%] h-[10%] bg-black/20 blur-xl rounded-[100%]"
                            style={{
                                x: useTransform(rotate, [0, 180], [20, -20]),
                                opacity: useTransform(scale, [0.8, 1.1, 0.9], [0.5, 0.8, 0.5])
                            }}
                        />

                        <img
                            src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800"
                            alt="Precision Faucet"
                            className="w-full h-full object-contain drop-shadow-2xl"
                        />
                    </motion.div>
                </motion.div>

            </div>
        </div>
    );
};

export default Scrollytelling;
