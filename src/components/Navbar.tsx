import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Simplified minimal header
    return (
        <>
            <header className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center transition-all duration-300 pointer-events-none mix-blend-difference text-white">
                {/* Left: Brand Name - Standard z-index or mix-blend might be tricky with glass, 
                User asked for glassmorphism background, so we put that on a background layer or the header itself.
                If using glassmorphism, mix-blend-difference might not work well with the blur. 
                Let's stick to the prompt: "The header should have a transparent background with a 'backdrop-blur' effect".
            */}
                <div className="absolute inset-0 bg-transparent backdrop-blur-sm z-[-1]"></div>

                {/* Pointer events auto for interactive elements */}
                <Link to="/" className="pointer-events-auto text-xs font-bold uppercase tracking-widest hover:opacity-80 transition-opacity">
                    GUPTA SALES CORP
                </Link>

                {/* Right: Pill Button */}
                <div className="flex items-center space-x-4 pointer-events-auto">
                    {/* Mobile Menu Toggle - Keeping it but minimalist */}
                    <button
                        className="md:hidden text-white"
                        onClick={() => setIsMobileMenuOpen(true)}
                    >
                        <Menu size={24} />
                    </button>

                    <button className="hidden md:block bg-white text-black rounded-full px-6 py-3 text-xs font-bold uppercase tracking-widest hover:scale-105 transition-transform duration-300">
                        Book Consultation
                    </button>
                </div>
            </header>

            {/* Mobile Navigation Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[60] bg-black text-white flex flex-col justify-center items-center"
                    >
                        <button
                            className="absolute top-6 right-6 text-white"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            <X size={32} />
                        </button>

                        <nav className="flex flex-col space-y-8 text-center">
                            <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-serif">Home</Link>
                            <Link to="/showroom" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-serif">Showroom</Link>
                            <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-serif">About</Link>
                            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-serif">Contact</Link>
                            <button onClick={() => setIsMobileMenuOpen(false)} className="bg-white text-black rounded-full px-8 py-3 text-sm font-bold uppercase tracking-widest mt-4">
                                Book Consultation
                            </button>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
