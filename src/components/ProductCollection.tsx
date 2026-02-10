"use client";

import { useRef, MouseEvent } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Cormorant_Garamond, Inter } from "next/font/google";

const cormorant = Cormorant_Garamond({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    style: ["normal", "italic"]
});

const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "500"] });

const ProductCollection = () => {
    return (
        <section id="collection" className="bg-white py-24 md:py-32 px-6 border-b border-black/5">
            <div className="max-w-[1400px] mx-auto">

                {/* Section Header */}
                <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-end gap-8">
                    <div>
                        <span className="text-xs font-bold tracking-[0.3em] uppercase text-black/40 mb-4 block">
                            Curated Selection
                        </span>
                        <h2 className={`${cormorant.className} text-5xl md:text-7xl text-black leading-[0.9]`}>
                            The Luminous Collection.
                        </h2>
                    </div>
                    <p className="text-black/60 max-w-sm text-sm leading-relaxed tracking-wide">
                        Explore our flagship categories. Engineered for precision, designed for luxury.
                    </p>
                </div>

                {/* The Luminous Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 h-auto md:h-[800px]">

                    {/* Card 1: Premium Tiles (Large Feature) */}
                    <SpotlightCard
                        className="md:col-span-2 md:row-span-2 relative group overflow-hidden bg-[#F5F5F7]"
                    >
                        <div className="absolute inset-0 z-0">
                            <img
                                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1600"
                                alt="Premium Tiles"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500" />
                        </div>

                        <div className="relative z-20 h-full flex flex-col justify-end p-8 md:p-12">
                            <div className="flex justify-between items-end">
                                <div>
                                    <span className={`${inter.className} text-white/80 text-xs font-bold tracking-[0.2em] uppercase mb-2 block`}>
                                        Italian Imports
                                    </span>
                                    <h3 className={`${cormorant.className} text-4xl md:text-6xl text-white`}>
                                        Premium Tiling
                                    </h3>
                                </div>
                                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                                    <ArrowUpRight className="text-white w-5 h-5" />
                                </div>
                            </div>
                        </div>
                    </SpotlightCard>

                    {/* Card 2: Sanitaryware (Top Right) */}
                    <SpotlightCard
                        className="md:col-span-1 relative group overflow-hidden bg-gray-50 dark-mode-override"
                    >
                        <div className="absolute inset-0 z-0">
                            <img
                                src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800"
                                alt="Sanitaryware"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
                            />
                            {/* Light Gradient Overlay for readability */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        </div>

                        <div className="relative z-20 h-full flex flex-col justify-end p-8">
                            <div className="flex justify-between items-end">
                                <div>
                                    <span className={`${inter.className} text-white/80 text-[10px] font-bold tracking-[0.2em] uppercase mb-2 block`}>
                                        Kohler • Toto
                                    </span>
                                    <h3 className={`${cormorant.className} text-3xl md:text-4xl text-white`}>
                                        Sanitaryware
                                    </h3>
                                </div>
                                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                                    <ArrowUpRight className="text-white w-4 h-4" />
                                </div>
                            </div>
                        </div>
                    </SpotlightCard>

                    {/* Card 3: Bath Fittings (Bottom Right - Dark) */}
                    <SpotlightCard
                        className="md:col-span-1 relative group overflow-hidden bg-[#111111]"
                    >
                        <div className="absolute inset-0 z-0 opacity-60 group-hover:opacity-40 transition-opacity duration-700">
                            <img
                                src="https://images.unsplash.com/photo-1556911220-e6584462aa3c?auto=format&fit=crop&q=80&w=800"
                                alt="Bath Fittings"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                            />
                        </div>

                        <div className="relative z-20 h-full flex flex-col justify-end p-8">
                            <div className="flex justify-between items-end">
                                <div>
                                    <span className={`${inter.className} text-white/60 text-[10px] font-bold tracking-[0.2em] uppercase mb-2 block`}>
                                        Brass • Chrome • Matte
                                    </span>
                                    <h3 className={`${cormorant.className} text-3xl md:text-4xl text-white`}>
                                        Bath Fittings
                                    </h3>
                                </div>
                                <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                                    <ArrowUpRight className="text-white w-4 h-4" />
                                </div>
                            </div>
                        </div>
                    </SpotlightCard>

                </div>
            </div>
        </section>
    );
};

// --- Spotlight Card Component ---
const SpotlightCard = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
        let { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <div
            className={`relative border border-black/5 rounded-[2rem] overflow-hidden ${className}`}
            onMouseMove={handleMouseMove}
        >
            {/* Spotlight Overlay */}
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-[2rem] opacity-0 transition duration-300 group-hover:opacity-100 z-10"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                            650px circle at ${mouseX}px ${mouseY}px,
                            rgba(255, 255, 255, 0.15),
                            transparent 80%
                        )
                    `,
                }}
            />

            {/* Content Content - Behind the spotlight, but accessible? 
                Actually, putting content AFTER the overlay ensures it's clickable if z-index is higher.
                But the spotlight is usually an overlay effect on TOP or a border effect.
                Here, I'll put content inside a div that sits *under* the spotlight if it's purely visual,
                or use pointer-events-none on the spotlight.
            */}
            {children}
        </div>
    );
};

export default ProductCollection;
