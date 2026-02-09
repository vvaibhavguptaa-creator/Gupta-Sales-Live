"use client";

import { useRef } from 'react';
import { motion, useSpring, useMotionValue, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, Instagram, MessageCircle, ArrowUp } from 'lucide-react';

const GrandRevealFooter = () => {
    const footerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: footerRef,
        offset: ["start end", "end end"]
    });

    // Anti-Gravity / Parallax Effect
    // As the footer is revealed (scroll goes 0 -> 1), the content moves slightly slower
    // creating a feeling of depth/heaviness.
    const yContent = useTransform(scrollYProgress, [0, 1], [-100, 0]);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer
            ref={footerRef}
            className="fixed bottom-0 left-0 w-full h-[80vh] z-0 bg-[#111111] text-white/90 overflow-hidden flex flex-col justify-between p-8 md:p-12"
            style={{ clipPath: "inset(0 0 0 0)" }}
        >
            {/* Background Noise Texture */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] filter contrast-125 brightness-100" />

            {/* Parallax Container */}
            <motion.div
                style={{ y: yContent }}
                className="relative w-full h-full flex flex-col justify-between"
            >
                {/* TOP ROW */}
                <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 border-b border-white/10 pb-8">
                    <div>
                        <h3 className="text-sm font-mono text-white/50 uppercase tracking-widest mb-2">Location</h3>
                        <p className="text-lg font-light leading-relaxed">
                            Bikaner, Rajasthan <br />
                            <span className="text-white/40 text-sm">Legacy Since 1995</span>
                        </p>
                    </div>

                    <div className="flex gap-8">
                        <SocialLink icon={Instagram} label="Instagram" href="#" />
                        <SocialLink icon={MessageCircle} label="WhatsApp" href="#" />
                    </div>
                </div>

                {/* CENTER: MASSIVE CTA */}
                <div className="relative z-10 flex-1 flex flex-col justify-center items-center text-center">
                    <h2 className="text-[10vw] md:text-[12vw] leading-[0.8] font-serif font-medium tracking-tighter text-white mix-blend-difference">
                        Ready to <br /> Create?
                    </h2>
                    <div className="mt-12">
                        <MagneticButton />
                    </div>
                </div>

                {/* BOTTOM ROW */}
                <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 items-end gap-8 pt-8 border-t border-white/10">

                    {/* Quick Links */}
                    <div className="flex flex-col gap-2">
                        <h4 className="text-xs font-mono text-white/40 uppercase tracking-widest mb-2">Explore</h4>
                        <FooterLink href="#collection">Collection</FooterLink>
                        <FooterLink href="#process">Process</FooterLink>
                        <FooterLink href="#legacy">Legacy</FooterLink>
                    </div>

                    {/* Empty / Spacer */}
                    <div className="hidden md:block" />

                    {/* Copyright */}
                    <div className="flex flex-col justify-end">
                        <p className="text-white/20 text-xs uppercase tracking-widest">
                            © {new Date().getFullYear()} Gupta Sales.
                        </p>
                    </div>

                    {/* Back to Top */}
                    <div className="flex justify-end">
                        <button
                            onClick={scrollToTop}
                            className="group flex items-center gap-2 text-white/60 hover:text-white transition-colors"
                        >
                            <span className="text-sm uppercase tracking-widest">Top</span>
                            <div className="p-3 border border-white/20 rounded-full group-hover:bg-white group-hover:text-black transition-all duration-300">
                                <ArrowUp className="w-4 h-4" />
                            </div>
                        </button>
                    </div>

                </div>
            </motion.div>
        </footer>
    );
};

// --- SUBCOMPONENTS ---

const MagneticButton = () => {
    const ref = useRef<HTMLButtonElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
    const springX = useSpring(x, springConfig);
    const springY = useSpring(y, springConfig);

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
        const rect = ref.current?.getBoundingClientRect();
        if (rect) {
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            const distanceX = e.clientX - centerX;
            const distanceY = e.clientY - centerY;

            x.set(distanceX * 0.35); // Stronger magnetism
            y.set(distanceY * 0.35);
        }
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.button
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ x: springX, y: springY }}
            className="relative group w-40 h-40 md:w-56 md:h-56 rounded-full bg-white text-black flex flex-col items-center justify-center gap-2 overflow-hidden"
        >
            <div className="absolute inset-0 bg-[#F5D0FE] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" /> {/* Hover Fill color */}

            <span className="relative z-10 text-xl font-medium group-hover:-translate-y-[150%] transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]">
                Let's Talk
            </span>
            <span className="absolute z-10 text-xl font-medium translate-y-[150%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]">
                Let's Talk
            </span>
            <ArrowUpRight className="relative z-10 w-6 h-6 group-hover:rotate-45 transition-transform duration-500" />
        </motion.button>
    );
}

const SocialLink = ({ icon: Icon, label, href }: { icon: any, label: string, href: string }) => (
    <a href={href} className="group flex items-center gap-2 text-white/60 hover:text-white transition-colors">
        <Icon className="w-5 h-5" />
        <span className="hidden md:block relative text-sm uppercase tracking-wider">
            {label}
            <span className="absolute left-0 -bottom-1 w-full h-[1px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
        </span>
    </a>
);

const FooterLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
    <a href={href} className="group relative w-fit text-lg font-light text-white/70 hover:text-white transition-colors overflow-hidden">
        <span className="relative z-10">{children}</span>
        {/* Strikethrough Effect */}
        <span className="absolute left-0 top-1/2 w-full h-[1px] bg-white/50 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
    </a>
);

export default GrandRevealFooter;
