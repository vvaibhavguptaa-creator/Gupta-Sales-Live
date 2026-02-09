"use client";

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Instagram, MessageCircle, ArrowUp, ArrowUpRight } from 'lucide-react';

const GrandRevealFooter = () => {
    const footerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: footerRef,
        offset: ["start end", "end end"]
    });

    const yParallax = useTransform(scrollYProgress, [0, 1], [-50, 0]);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer
            ref={footerRef}
            className="fixed bottom-0 left-0 w-full h-[80vh] z-0 bg-[#050505] text-white/80 overflow-hidden flex flex-col justify-between px-8 py-12 md:px-20 md:py-16"
            style={{ clipPath: "inset(0 0 0 0)" }}
        >
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] filter contrast-125 brightness-100" />

            {/* Parallax Content Container */}
            <motion.div
                style={{ y: yParallax }}
                className="relative w-full h-full flex flex-col justify-between"
            >

                {/* CENTER HERO SECTION */}
                <div className="relative flex-1 flex flex-col items-center justify-center">

                    {/* Watermark Text (Behind) */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
                        <span className="text-[25vw] font-serif text-white/[0.03] tracking-tighter leading-none">
                            Create.
                        </span>
                    </div>

                    {/* Foreground Content (Z-10) */}
                    <div className="relative z-10 flex flex-col items-center gap-8">
                        <h2 className="text-3xl md:text-5xl font-light tracking-wide text-white/90 text-center">
                            Ready to start your journey?
                        </h2>

                        <a
                            href="mailto:consult@guptasales.com" // Update actual link
                            className="group relative px-12 py-4 bg-white text-black rounded-full font-semibold tracking-widest uppercase overflow-hidden hover:shadow-[0_4px_20px_rgba(255,255,255,0.2)] transition-shadow duration-300"
                        >
                            <span className="relative z-10">Let's Talk</span>
                            {/* Amber underline/border effect from image */}
                            <div className="absolute bottom-0 left-0 w-full h-1 bg-amber-500" />
                        </a>
                    </div>

                </div>

                {/* BOTTOM GRID SECTION */}
                <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-12 border-t border-white/10 pt-12 items-start">

                    {/* COL 1: HEADQUARTERS */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-xs font-mono text-white/40 uppercase tracking-widest">Headquarters</h4>
                        <p className="text-sm md:text-base font-light text-white/70 leading-relaxed">
                            Rani Bazar Industrial Area<br />
                            Bikaner, Rajasthan 334001<br />
                            India
                        </p>
                    </div>

                    {/* COL 2: CONNECT */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-xs font-mono text-white/40 uppercase tracking-widest">Connect</h4>
                        <div className="flex flex-col gap-3">
                            <SocialLink icon={Instagram} label="Instagram" href="#" />
                            <SocialLink icon={MessageCircle} label="WhatsApp" href="#" />
                        </div>
                    </div>

                    {/* COL 3: EXPLORE */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-xs font-mono text-white/40 uppercase tracking-widest">Explore</h4>
                        <div className="flex flex-col gap-2">
                            <FooterLink href="#collection">Collection</FooterLink>
                            <FooterLink href="#legacy">Legacy</FooterLink>
                            <FooterLink href="#services">Services</FooterLink>
                            <FooterLink href="#consultation">Consultation</FooterLink>
                        </div>
                    </div>

                    {/* COL 4: BACK TO TOP */}
                    <div className="flex flex-col items-end justify-between h-full gap-8">

                        <button
                            onClick={scrollToTop}
                            className="group flex flex-col items-center gap-3"
                        >
                            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
                                <ArrowUp className="w-5 h-5" />
                            </div>
                            <span className="text-[10px] uppercase tracking-widest text-white/40 group-hover:text-white transition-colors">
                                Back to Top
                            </span>
                        </button>

                        <p className="text-[10px] text-white/20 uppercase tracking-widest text-right">
                            © 2026 Gupta Sales. All Rights Reserved.
                        </p>
                    </div>

                </div>

            </motion.div>
        </footer>
    );
};

// --- Subcomponents ---

const SocialLink = ({ icon: Icon, label, href }: { icon: any, label: string, href: string }) => (
    <a href={href} className="flex items-center gap-3 text-white/70 hover:text-white transition-colors group">
        <Icon className="w-4 h-4" />
        <span className="text-sm font-light relative">
            {label}
            <span className="absolute left-0 -bottom-1 w-full h-px bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
        </span>
    </a>
)

const FooterLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
    <a href={href} className="text-sm text-white/70 hover:text-white transition-colors w-fit block relative group">
        {children}
        <span className="absolute left-0 -bottom-1 w-full h-px bg-white/50 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
    </a>
)

export default GrandRevealFooter;
