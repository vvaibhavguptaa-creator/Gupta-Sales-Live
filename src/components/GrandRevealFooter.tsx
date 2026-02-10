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
