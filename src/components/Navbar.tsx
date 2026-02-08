
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt4, HiX } from 'react-icons/hi';

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
        { name: 'COLLECTION', href: '#collection' },
        { name: 'LEGACY', href: '#legacy' },
        { name: 'SERVICES', href: '#services' },
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
                <a href="#home" className="text-2xl font-serif font-bold text-white tracking-tighter hover:opacity-80 transition-opacity">
                    GUPTA SALES
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-12">
                    {navLinks.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="text-xs uppercase tracking-[0.2em] text-white/70 hover:text-white transition-colors relative group"
                        >
                            {item.name}
                            <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-yellow-500 transition-all duration-300 group-hover:w-full" />
                        </a>
                    ))}

                    {/* Premium CTA Button */}
                    <a
                        href="#contact"
                        className="px-6 py-2.5 text-xs font-medium tracking-widest uppercase text-yellow-500 border border-yellow-500/30 hover:bg-yellow-500 hover:text-black transition-all duration-300 rounded-sm"
                    >
                        Book Consultation
                    </a>
                </div>

                {/* Mobile Hamburger Button */}
                <button
                    onClick={() => setIsOpen(true)}
                    className="md:hidden text-white p-2 hover:bg-white/10 rounded-full transition-colors"
                    aria-label="Open Menu"
                >
                    <HiMenuAlt4 size={28} />
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
                                <HiX size={32} />
                            </button>
                        </div>

                        {/* Menu Links */}
                        <div className="flex flex-col space-y-12 text-center">
                            {navLinks.map((item, i) => (
                                <motion.a
                                    key={item.name}
                                    custom={i}
                                    variants={linkVariants}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-4xl font-serif text-white hover:text-yellow-500 transition-colors tracking-tight"
                                >
                                    {item.name}
                                </motion.a>
                            ))}

                            <motion.div
                                custom={3}
                                variants={linkVariants}
                            >
                                <a
                                    href="#contact"
                                    onClick={() => setIsOpen(false)}
                                    className="mt-8 px-8 py-3 text-sm font-medium tracking-widest uppercase text-yellow-500 border border-yellow-500/30 hover:bg-yellow-500 hover:text-black transition-all duration-300 inline-block"
                                >
                                    Book Consultation
                                </a>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;