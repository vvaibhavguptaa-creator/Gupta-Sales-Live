"use client";

import { useRef, MouseEvent, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowUpRight, Instagram, Phone, Mail, MapPin } from 'lucide-react';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "900"] });

const MonumentalFooter = () => {
    return (
        <footer className="bg-white pt-24 pb-8 md:pt-32 md:pb-12 border-t border-black/5 relative overflow-hidden">
            <div className="container mx-auto px-6">

                {/* 1. THE MASSIVE CTA */}
                <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-12 mb-24 md:mb-32">
                    <div className="max-w-4xl">
                        <h2 className={`${inter.className} text-[12vw] leading-[0.85] font-black tracking-tighter text-black mb-6 uppercase`}>
                            Ready to<br />Build?
                        </h2>
                        <p className={`${inter.className} text-xl md:text-2xl text-black/60 font-light max-w-lg`}>
                            Visit our Bikaner showroom. Experience the materials firsthand.
                        </p>
                    </div>

                    {/* 2. THE MAGNETIC MIC DROP BUTTON */}
                    <div className="relative z-10">
                        <MagneticButton />
                    </div>
                </div>

                {/* 3. THE RAZOR SHARP DIVIDER */}
                <div className="w-full h-px bg-black/10 mb-12 md:mb-16" />

                {/* 4. THE BRUTALIST GRID (Links) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-24 md:mb-32">

                    {/* Column 1: Socials */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-black/40 mb-2">Socials</h4>
                        <a href="#" className="flex items-center gap-2 text-lg font-medium text-black hover:text-black/60 transition-colors group">
                            <Instagram className="w-4 h-4" /> Instagram
                            <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>
                        <a href="#" className="flex items-center gap-2 text-lg font-medium text-black hover:text-black/60 transition-colors group">
                            <span>WhatsApp</span>
                            <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>
                    </div>

                    {/* Column 2: Legal */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-black/40 mb-2">Legal</h4>
                        <a href="#" className="text-lg font-medium text-black hover:text-black/60 transition-colors">
                            Privacy Policy
                        </a>
                        <a href="#" className="text-lg font-medium text-black hover:text-black/60 transition-colors">
                            Terms of Service
                        </a>
                    </div>

                    {/* Column 3: Address (Merged/Shifted) */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-black/40 mb-2">Visit Us</h4>
                        <p className="text-lg font-medium text-black leading-relaxed">
                            <MapPin className="w-4 h-4 inline-block mr-1" />
                            Rani Bazar Industrial Area,<br />
                            Bikaner, Rajasthan 334001
                        </p>
                    </div>

                </div>

                {/* 5. THE WATERMARK LOGO */}
                <div className="relative w-full overflow-hidden select-none">
                    <h1 className={`${inter.className} text-[15vw] leading-none font-black text-transparent tracking-tighter w-full text-center`} style={{ WebkitTextStroke: "1px rgba(0,0,0,0.05)" }}>
                        GUPTA SALES
                    </h1>
                </div>

                {/* Copyright Line */}
                <div className="absolute bottom-4 left-0 w-full text-center">
                    <p className="text-[10px] uppercase font-medium tracking-widest text-black/20">
                        © 2024 Gupta Sales. All Rights Reserved.
                    </p>
                </div>

            </div>
        </footer>
    );
};

// --- Magnetic Button Component ---
const MagneticButton = () => {
    const ref = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
    const mouseY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = ref.current!.getBoundingClientRect();
        const center = { x: left + width / 2, y: top + height / 2 };
        const distance = { x: clientX - center.x, y: clientY - center.y };

        x.set(distance.x * 0.5);
        y.set(distance.y * 0.5);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            style={{ x: mouseX, y: mouseY }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative"
        >
            <a
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col items-center justify-center w-40 h-40 md:w-56 md:h-56 bg-black rounded-full cursor-pointer transition-transform duration-500 hover:scale-110"
            >
                <div className="flex items-center gap-2 overflow-hidden">
                    <span className={`${inter.className} text-white font-bold text-sm md:text-lg tracking-wide uppercase transition-transform duration-500 group-hover:-rotate-12`}>
                        Get<br />Directions
                    </span>
                    <ArrowUpRight className="text-white w-6 h-6 md:w-8 md:h-8 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
            </a>
        </motion.div>
    );
}

export default MonumentalFooter;
