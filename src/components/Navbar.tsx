"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// import { HiMenuAlt4, HiX } from 'react-icons/hi'; // Removed react-icons
import Link from 'next/link';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'COLLECTION', href: '/#collection' },
        { name: 'LEGACY', href: '/#legacy' },
        { name: 'SERVICES', href: '/#services' },
    ];

    const menuVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.4 }
        },
        exit: {
            opacity: 0,
            scale: 0.95,
            transition: { duration: 0.3 }
        }
    };

    const linkVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.1 * i + 0.2,
                duration: 0.6,

            }
        })
    };

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-6'
            }`}>
            <div className="container mx-auto px-6 flex justify-between items-center relative z-50">
                {/* Logo */}
                <Link href="/" className="text-2xl font-serif font-bold text-white tracking-tighter hover:opacity-80 transition-opacity">
                    GUPTA SALES
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-12">
                    {navLinks.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-xs uppercase tracking-[0.2em] text-white/70 hover:text-white transition-colors relative group"
                        >
                            {item.name}
                            <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-yellow-500 transition-all duration-300 group-hover:w-full" />
                        </Link>
                    ))}

                    {/* Premium CTA Button */}
                    <Link
                        href="/contact"
                        className="px-6 py-2.5 text-xs font-medium tracking-widest uppercase text-yellow-500 border border-yellow-500/30 hover:bg-yellow-500 hover:text-black transition-all duration-300 rounded-sm"
                    >
                        Book Consultation
                    </Link>
                </div>

                {/* Mobile Hamburger Button */}
                <button
                    onClick={() => setIsOpen(true)}
                    className="md:hidden text-white p-2 hover:bg-white/10 rounded-full transition-colors"
                    aria-label="Open Menu"
                >
                    {/* SVG Menu Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
            </div>

            {/* Mobile Full Screen Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        variants={menuVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center md:hidden"
                    >
                        {/* Close Button stuck to top right */}
                        <div className="absolute top-6 right-6">
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-white p-2 hover:bg-white/10 rounded-full transition-colors"
                                aria-label="Close Menu"
                            >
                                {/* SVG Close Icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Menu Links */}
                        <div className="flex flex-col space-y-12 text-center">
                            {navLinks.map((item, i) => (
                                <motion.div
                                    key={item.name}
                                    custom={i}
                                    variants={linkVariants}
                                >
                                    <Link
                                        href={item.href}
                                        onClick={() => setIsOpen(false)}
                                        className="text-4xl font-serif text-white hover:text-yellow-500 transition-colors tracking-tight"
                                    >
                                        {item.name}
                                    </Link>
                                </motion.div>
                            ))}

                            <motion.div
                                custom={3}
                                variants={linkVariants}
                            >
                                <Link
                                    href="/contact"
                                    onClick={() => setIsOpen(false)}
                                    className="mt-8 px-8 py-3 text-sm font-medium tracking-widest uppercase text-yellow-500 border border-yellow-500/30 hover:bg-yellow-500 hover:text-black transition-all duration-300 inline-block"
                                >
                                    Book Consultation
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;