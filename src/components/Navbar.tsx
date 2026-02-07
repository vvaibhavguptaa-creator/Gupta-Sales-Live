
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
        { name: 'CONTACT', href: '#contact' },
    ];

    const menuVariants = {
        hidden: { opacity: 0, y: "-100%" },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeInOut" // Fixed: Used standard string easing
            }
        },
        exit: {
            opacity: 0,
            y: "-100%",
            transition: {
                duration: 0.4,
                ease: "easeInOut"
            }
        }
    };

    const linkVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.1 * i + 0.3, // Stagger effect
                duration: 0.5,
                ease: "easeOut"
            }
        })
    };

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md py-4' : 'bg-transparent py-6'
            }`}>
            <div className="container mx-auto px-6 flex justify-between items-center relative z-50">
                {/* Logo */}
                <a href="#home" className="text-2xl font-serif font-bold text-white tracking-tighter hover:opacity-80 transition-opacity">
                    GUPTA SALES
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8">
                    {navLinks.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="text-sm uppercase tracking-widest text-gray-300 hover:text-white transition-colors"
                        >
                            {item.name}
                        </a>
                    ))}
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
                        className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center md:hidden"
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
                        <div className="flex flex-col space-y-8 text-center">
                            {navLinks.map((item, i) => (
                                <motion.a
                                    key={item.name}
                                    custom={i}
                                    variants={linkVariants}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-3xl font-serif text-gray-300 hover:text-yellow-500 transition-colors uppercase tracking-widest"
                                >
                                    {item.name}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;