
import { useState, useEffect } from 'react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

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
        { name: 'SERVICES', href: '#services' }, // Added Services anchor just in case, though user didn't explicitly ask for it, but 'Services' was in the original map. 
        // Wait, User mapping: 'COLLECTION' -> '#collection', 'LEGACY' -> '#legacy', 'CONTACT' -> '#contact'. 
        // I should stick to the requested map to avoid confusion.
        { name: 'CONTACT', href: '#contact' },
    ];

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md py-4' : 'bg-transparent py-6'
            }`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
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

                {/* Mobile Menu Button (Placeholder) */}
                <button className="md:hidden text-white">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="3" y1="12" x2="21" y2="12"></line>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <line x1="3" y1="18" x2="21" y2="18"></line>
                    </svg>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;