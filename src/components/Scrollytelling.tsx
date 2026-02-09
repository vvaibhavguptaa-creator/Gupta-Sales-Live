"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Scrollytelling = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // --- Animation Logic for Content (0-100% of scroll) ---

    // 1. Precision: Visible initially -> Fades out by 20%
    const opacityPrecision = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
    const yPrecision = useTransform(scrollYProgress, [0, 0.2], [0, -20]);

    // 2. Flow: Fades in 15-25% -> Fades out 45-55%
    const opacityFlow = useTransform(scrollYProgress, [0.15, 0.25, 0.45, 0.55], [0, 1, 1, 0]);
    const yFlow = useTransform(scrollYProgress, [0.15, 0.25, 0.45, 0.55], [20, 0, 0, -20]);

    // 3. Silence: Fades in 45-55% -> Fades out 75-85%
    const opacitySilence = useTransform(scrollYProgress, [0.45, 0.55, 0.75, 0.85], [0, 1, 1, 0]);
    const ySilence = useTransform(scrollYProgress, [0.45, 0.55, 0.75, 0.85], [20, 0, 0, -20]);

    // 4. Perfection: Fades in 75-85% -> Stays
    const opacityPerfection = useTransform(scrollYProgress, [0.75, 0.85], [0, 1]);
    const yPerfection = useTransform(scrollYProgress, [0.75, 0.85], [20, 0]);

    // --- Image Animation ---
    const rotateImage = useTransform(scrollYProgress, [0, 1], [0, 12]);
    const scaleImage = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1.1, 1.0]);


    const texts = [
        { title: "Precision", body: "Every curve is calculated. Designed for those who demand exactness.", opacity: opacityPrecision, y: yPrecision },
        { title: "Flow", body: "Water should not just move; it should glide like silk.", opacity: opacityFlow, y: yFlow },
        { title: "Silence", body: "True luxury is quiet. Advanced technology ensures silence.", opacity: opacitySilence, y: ySilence },
        { title: "Perfection", body: "The result of 30 years of engineering. Timeless.", opacity: opacityPerfection, y: yPerfection },
    ];

    return (
        <section className="bg-stone-50">

            {/* --- DESKTOP: STICKY SCROLLYTELLING (md:block) --- */}
            <div ref={containerRef} className="hidden md:block relative h-[300vh]">

                {/* Sticky Wrapper: Pins to top for the duration of the scroll */}
                <div className="sticky top-0 h-screen flex flex-row items-center justify-between overflow-hidden px-10 max-w-[1600px] mx-auto">

                    {/* LEFT COLUMN: Text Blocks (Stacked Absolute) */}
                    <div className="w-1/2 relative h-full flex flex-col justify-center px-12">
                        {texts.map((item, index) => (
                            <motion.div
                                key={index}
                                style={{ opacity: item.opacity, y: item.y }}
                                className="absolute top-1/2 -translate-y-1/2 left-12 max-w-lg"
                            >
                                <h2 className="text-6xl lg:text-8xl font-serif text-stone-900 mb-6 tracking-tight">
                                    {item.title}.
                                </h2>
                                <p className="text-xl text-stone-600 font-light leading-relaxed">
                                    {item.body}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    {/* RIGHT COLUMN: The Image (Pinned & Animated) */}
                    <div className="w-1/2 h-[80vh] relative flex items-center justify-center">
                        <motion.div
                            style={{ rotate: rotateImage, scale: scaleImage }}
                            className="relative w-full h-full max-w-xl max-h-[800px] shadow-2xl rounded-[3rem] overflow-hidden border border-stone-200"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800"
                                alt="Luxury Faucet"
                                className="w-full h-full object-cover"
                            />
                            {/* Cinematic Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent mix-blend-multiply" />
                        </motion.div>
                    </div>

                </div>
            </div>

            {/* --- MOBILE: STANDARD VERTICAL STACK (< md) --- */}
            <div className="md:hidden flex flex-col gap-24 py-24 px-6">
                {texts.map((item, index) => (
                    <div key={index} className="flex flex-col gap-6">
                        <div className="relative aspect-[4/5] w-full rounded-3xl overflow-hidden shadow-lg mb-4">
                            <img
                                src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800"
                                alt={item.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div>
                            <h2 className="text-5xl font-serif text-stone-900 mb-4">{item.title}.</h2>
                            <p className="text-lg text-stone-600 font-light">{item.body}</p>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    );
};

export default Scrollytelling;
