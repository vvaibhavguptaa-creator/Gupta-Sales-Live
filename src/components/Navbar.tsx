"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'; // Added hooks
import Link from 'next/link';
import { Menu, X } from 'lucide-react'; // Changed icons

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 50);
    });

    const navLinks = [
        { name: 'Collection', href: '/#collection' },
        { name: 'Heritage', href: '/#legacy' }, // Changed to match user request "Heritage"
        { name: 'Projects', href: '/#projects' }, // Changed to "Projects"
    ];

    const menuVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.3, ease: "easeOut" }
        },
        exit: {
            opacity: 0,
            y: -20,
            transition: { duration: 0.2, ease: "easeIn" }
        }
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 transition-all duration-500 ${isScrolled
                ? "py-4 bg-white/70 backdrop-blur-xl border-b border-white/10 shadow-sm"
                : "py-6 bg-transparent"
                }`}
        >
            {/* Logo */}
            <Link href="/" className={`text-xl font-bold tracking-tighter uppercase transition-colors duration-500 ${isScrolled ? "text-black" : "text-black"}`}>
                Gupta Sales.
            </Link>

            {/* Desktop Navigation */}
            <div className={`hidden md:flex gap-12 text-sm font-medium tracking-widest uppercase transition-colors duration-500 ${isScrolled ? "text-black/80" : "text-black/60"}`}>
                {navLinks.map((item) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        className="hover:text-black hover:opacity-100 transition-all duration-300 relative group"
                    >
                        {item.name}
                        <span className="absolute -bottom-1 left-0 w-0 h-px bg-black transition-all duration-300 group-hover:w-full" />
                    </Link>
                ))}
            </div>

            {/* Desktop CTA Button */}
            <Link
                href="/contact"
                className="hidden md:block px-6 py-2.5 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase bg-black text-white hover:bg-neutral-800 transition-all hover:scale-105 active:scale-95"
            >
                Book Visit
            </Link>

            {/* Mobile Hamburger Button */}
            <button
                onClick={() => setIsOpen(true)}
                className="md:hidden text-black p-2 hover:bg-black/5 rounded-full transition-colors"
                aria-label="Open Menu"
            >
                <Menu className="w-6 h-6" />
            </button>

            {/* Mobile Full Screen Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-white flex flex-col items-center justify-center md:hidden"
                    >
                        {/* Close Button */}
                        <div className="absolute top-6 right-6">
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-black p-2 hover:bg-black/5 rounded-full transition-colors"
                                aria-label="Close Menu"
                            >
                                <X className="w-8 h-8" />
                            </button>
                        </div>

                        {/* Menu Links */}
                        <div className="flex flex-col space-y-8 text-center">
                            {navLinks.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-3xl font-serif text-black hover:text-neutral-500 transition-colors tracking-tight"
                                >
                                    {item.name}
                                </Link>
                            ))}

                            <Link
                                href="/contact"
                                onClick={() => setIsOpen(false)}
                                className="mt-8 px-8 py-3 text-sm font-medium tracking-widest uppercase bg-black text-white rounded-full inline-block"
                            >
                                Book Visit
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;