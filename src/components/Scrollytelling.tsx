"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence, useInView } from "framer-motion";

const Scrollytelling = () => {
    const [activePhase, setActivePhase] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    // Track if the main container is in view (for showing/hiding the fixed image)
    const isInView = useInView(containerRef, { margin: "-10% 0px -10% 0px" });

    const phases = [
        {
            id: 0,
            title: "Precision",
            body: "Every curve is calculated. Designed for those who demand exactness in every drop.",
            image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800"
        },
        {
            id: 1,
            title: "Flow",
            body: "Water should not just move; it should glide. Our aerators create a stream that feels like silk.",
            image: "https://images.unsplash.com/photo-1556911220-e6584462aa3c?auto=format&fit=crop&q=80&w=800"
        },
        {
            id: 2,
            title: "Silence",
            body: "True luxury is quiet. Advanced valve technology ensures that the only sound you hear is the water itself.",
            image: "https://images.unsplash.com/photo-1620626012053-2943e56ea77c?auto=format&fit=crop&q=80&w=800"
        },
        {
            id: 3,
            title: "Perfection",
            body: "The result of 30 years of engineering. A bathroom fitting that stands the test of time and trends.",
            image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800"
        }
    ];

    return (
        <section className="bg-stone-50 relative z-10">

            {/* --- DESKTOP LAYOUT --- */}
            {/* Main Scroll Track (400vh) */}
            <div
                ref={containerRef}
                className="hidden md:block relative h-[400vh] w-full"
            >
                {/* LEFT COLUMN: Scrollable Text (Standard Flow) */}
                <div className="w-1/2 relative z-20">
                    {phases.map((phase, index) => (
                        <TextBlock
                            key={phase.id}
                            phase={phase}
                            index={index}
                            activePhase={activePhase}
                            onEnter={() => setActivePhase(index)}
                        />
                    ))}
                </div>
            </div>

            {/* FIXED IMAGE CONTAINER (Visible only when section is in view) */}
            <AnimatePresence>
                {isInView && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="hidden md:flex fixed top-0 right-0 w-1/2 h-screen items-center justify-center p-12 z-30 pointer-events-none"
                    >
                        <div className="relative w-full aspect-square max-w-xl shadow-2xl rounded-[3rem] overflow-hidden border border-stone-200 bg-white">
                            <AnimatePresence mode="popLayout">
                                <motion.img
                                    key={activePhase}
                                    src={phases[activePhase].image}
                                    alt={phases[activePhase].title}
                                    initial={{ opacity: 0, scale: 1.1 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.6, ease: "easeInOut" }}
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                            </AnimatePresence>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent mix-blend-multiply pointer-events-none" />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* --- MOBILE LAYOUT (< md) --- */}
            <div className="md:hidden flex flex-col gap-24 py-24 px-6">
                {phases.map((phase, index) => (
                    <div key={phase.id} className="flex flex-col gap-6">
                        <div className="relative aspect-[4/5] w-full rounded-3xl overflow-hidden shadow-lg mb-4">
                            <img
                                src={phase.image}
                                alt={phase.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                        </div>
                        <div>
                            <span className="text-xs font-bold tracking-widest text-stone-400 uppercase mb-2 block">
                                0{index + 1}
                            </span>
                            <h2 className="text-5xl font-serif text-stone-900 mb-4">{phase.title}.</h2>
                            <p className="text-lg text-stone-600 font-light leading-relaxed">{phase.body}</p>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    );
};

// --- Subcomponent for Text Blocks ---
interface Phase {
    id: number;
    title: string;
    body: string;
    image: string;
}

const TextBlock = ({
    phase,
    index,
    activePhase,
    onEnter
}: {
    phase: Phase;
    index: number;
    activePhase: number;
    onEnter: () => void;
}) => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { margin: "-40% 0px -40% 0px" });

    // Use useEffect to trigger phase change - avoids setState during render
    useEffect(() => {
        if (isInView) {
            onEnter();
        }
    }, [isInView, onEnter]);

    return (
        <div
            ref={ref}
            className="h-[100vh] flex flex-col justify-center px-12 md:px-24"
        >
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: "-30% 0px -30% 0px" }}
                transition={{ duration: 0.8 }}
                className={`max-w-lg transition-all duration-500 ${activePhase === index ? "opacity-100" : "opacity-30 blur-sm"}`}
            >
                <span className="text-sm font-medium tracking-[0.2em] text-stone-400 uppercase mb-4 block">
                    Phase 0{index + 1}
                </span>
                <h2 className="text-6xl lg:text-7xl font-serif text-stone-900 mb-6 leading-[0.95] tracking-tight">
                    {phase.title}.
                </h2>
                <p className="text-xl text-stone-600 font-light leading-relaxed">
                    {phase.body}
                </p>
            </motion.div>
        </div>
    );
};

export default Scrollytelling;
