"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Scrollytelling = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const texts = [
        {
            title: "Precision",
            body: "Every curve is calculated. Designed for those who demand exactness in every drop.",
            image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800"
        },
        {
            title: "Flow",
            body: "Water should not just move; it should glide. Our aerators create a stream that feels like silk.",
            image: "https://images.unsplash.com/photo-1556911220-e6584462aa3c?auto=format&fit=crop&q=80&w=800"
        },
        {
            title: "Silence",
            body: "True luxury is quiet. Advanced valve technology ensures that the only sound you hear is the water itself.",
            image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&q=80&w=800"
        },
        {
            title: "Perfection",
            body: "The result of 30 years of engineering. A bathroom fitting that stands the test of time and trends.",
            image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800"
        },
    ];

    // --- Image Animation Logic ---
    // Instead of Opacity, use the scroll progress to rotate/scale the image subtly
    // The image source could also crossfade if we wanted, but let's keep it pinned for now as "The Artifact"
    const rotateImage = useTransform(scrollYProgress, [0, 1], [0, 12]);
    const scaleImage = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1.1, 1.0]);

    return (
        <section className="bg-stone-50 relative z-10">

            {/* --- DESKTOP LAYOUT (md:flex) --- */}
            {/* 
                Structure:
                - Container: Flex Row
                - Left: Scrollable Column (Tall) containing Text Blocks
                - Right: Sticky Column (Pinned) containing the Image
            */}
            <div ref={containerRef} className="hidden md:flex w-full max-w-[1600px] mx-auto relative">

                {/* LEFT COLUMN: Scrollable Text (Z-10) */}
                <div className="w-1/2 flex flex-col relative z-20">
                    {texts.map((item, index) => (
                        <div key={index} className="h-screen flex flex-col justify-center px-12 md:px-24">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, margin: "-20% 0px -20% 0px" }}
                                transition={{ duration: 0.8 }}
                                className="max-w-lg"
                            >
                                <span className="text-sm font-medium tracking-[0.2em] text-stone-400 uppercase mb-4 block">
                                    Phase 0{index + 1}
                                </span>
                                <h2 className="text-6xl lg:text-7xl font-serif text-stone-900 mb-6 leading-[0.95] tracking-tight">
                                    {item.title}.
                                </h2>
                                <p className="text-xl text-stone-600 font-light leading-relaxed">
                                    {item.body}
                                </p>
                            </motion.div>
                        </div>
                    ))}
                </div>

                {/* RIGHT COLUMN: Sticky Image (Z-0) */}
                <div className="w-1/2 h-screen sticky top-0 flex items-center justify-center p-12">
                    <motion.div
                        style={{ rotate: rotateImage, scale: scaleImage }}
                        className="relative w-full aspect-square max-w-xl shadow-2xl rounded-[3rem] overflow-hidden border border-stone-200 bg-white"
                    >
                        {/* We use the first image as the "Hero Product" for the sticky effect */}
                        <img
                            src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800"
                            alt="Luxury Faucet"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent mix-blend-multiply" />
                    </motion.div>
                </div>

            </div>

            {/* --- MOBILE LAYOUT (< md) --- */}
            <div className="md:hidden flex flex-col gap-24 py-24 px-6">
                {texts.map((item, index) => (
                    <div key={index} className="flex flex-col gap-6">
                        <div className="relative aspect-[4/5] w-full rounded-3xl overflow-hidden shadow-lg mb-4">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div>
                            <span className="text-xs font-bold tracking-widest text-stone-400 uppercase mb-2 block">
                                0{index + 1}
                            </span>
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
