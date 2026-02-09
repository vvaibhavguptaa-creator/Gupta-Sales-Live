"use client";

import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
// import { ArrowUp, Instagram, MessageCircle } from 'lucide-react'; // Removed lucide-react

const MagneticButton = ({ children }: { children: React.ReactNode }) => {
    const ref = useRef<HTMLButtonElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouse = (e: React.MouseEvent) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = ref.current?.getBoundingClientRect() || { left: 0, top: 0, width: 0, height: 0 };
        const center = { x: left + width / 2, y: top + height / 2 };
        const distance = { x: clientX - center.x, y: clientY - center.y };

        setPosition({ x: distance.x * 0.1, y: distance.y * 0.1 });
    };

    const reset = () => setPosition({ x: 0, y: 0 });

    const { x, y } = position;

    return (
        <motion.button
            ref={ref}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            animate={{ x, y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
            className="group relative px-12 py-6 bg-white text-black rounded-full overflow-hidden flex items-center gap-4"
        >
            <span className="relative z-10 text-xl font-medium tracking-wide uppercase group-hover:text-white transition-colors duration-300">
                {children}
            </span>
            <motion.div
                className="absolute inset-0 bg-[#F59E0B] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0"
            />
        </motion.button>
    );
};

const GrandRevealFooter = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end end"]
    });

    // Parallax Effect: Content moves slower than scroll
    const y = useTransform(scrollYProgress, [0, 1], [-100, 0]);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div
            ref={containerRef}
            className="fixed bottom-0 left-0 w-full h-[80vh] bg-[#111111] z-0 flex flex-col justify-between px-6 py-12 md:p-24 overflow-hidden"
        >
            {/* NOISE TEXTURE */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
                style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}
            />

            {/* TOP SECTION: CTA */}
            <motion.div style={{ y }} className="flex flex-col items-center justify-center flex-grow text-center z-10">
                <h2 className="text-[12vw] leading-none font-serif text-[#333] mb-8 select-none">
                    Create.
                </h2>
                <div className="relative -mt-12 md:-mt-24">
                    <p className="text-white/60 text-lg md:text-2xl font-light mb-8 tracking-wide">
                        Ready to start your journey?
                    </p>
                    <MagneticButton>Let's Talk</MagneticButton>
                </div>
            </motion.div>

            {/* BOTTOM SECTION: GRID */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-12 border-t border-white/10 pt-12">

                {/* COL 1: ADDRESS */}
                <div>
                    <h4 className="text-white/40 text-xs uppercase tracking-widest mb-6">Headquarters</h4>
                    <p className="text-white/80 font-light leading-relaxed">
                        Rani Bazar Industrial Area<br />
                        Bikaner, Rajasthan 334001<br />
                        India
                    </p>
                </div>

                {/* COL 2: SOCIALS */}
                <div>
                    <h4 className="text-white/40 text-xs uppercase tracking-widest mb-6">Connect</h4>
                    <ul className="space-y-4">
                        <li>
                            <a href="#" className="flex items-center gap-2 text-white/80 hover:text-[#F59E0B] transition-colors group">
                                {/* Instagram SVG */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                </svg>
                                <span className="relative">
                                    Instagram
                                    <span className="absolute left-0 bottom-0 w-0 h-px bg-[#F59E0B] transition-all duration-300 group-hover:w-full" />
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center gap-2 text-white/80 hover:text-[#25D366] transition-colors group">
                                {/* MessageCircle (WhatsApp like) SVG */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                                </svg>
                                <span className="relative">
                                    WhatsApp
                                    <span className="absolute left-0 bottom-0 w-0 h-px bg-[#25D366] transition-all duration-300 group-hover:w-full" />
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>

                {/* COL 3: QUICK LINKS */}
                <div>
                    <h4 className="text-white/40 text-xs uppercase tracking-widest mb-6">Explore</h4>
                    <ul className="space-y-4 text-white/80 font-light">
                        {['Collection', 'Legacy', 'Services', 'Consultation'].map((link) => (
                            <li key={link}>
                                <a href={`#${link.toLowerCase()}`} className="hover:text-white transition-colors block relative group w-fit">
                                    {link}
                                    <span className="absolute left-0 bottom-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full" />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* COL 4: BACK TO TOP */}
                <div className="flex flex-col items-start md:items-end justify-between">
                    <button
                        onClick={scrollToTop}
                        className="group flex flex-col items-center gap-2 text-white/60 hover:text-[#F59E0B] transition-colors"
                    >
                        <span className="p-4 border border-white/20 rounded-full group-hover:border-[#F59E0B] transition-colors">
                            {/* ArrowUp SVG */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 group-hover:-translate-y-1 transition-transform">
                                <line x1="12" y1="19" x2="12" y2="5"></line>
                                <polyline points="5 12 12 5 19 12"></polyline>
                            </svg>
                        </span>
                        <span className="text-xs uppercase tracking-widest">Back to Top</span>
                    </button>
                    <p className="text-white/20 text-xs mt-8">© 2026 Gupta Sales. All Rights Reserved.</p>
                </div>

            </div>
        </div>
    );
};

export default GrandRevealFooter;
