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

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md py-4' : 'bg-transparent py-6'
            }`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Logo - Plain Text for Safety */}
                <div className="text-2xl font-serif font-bold text-white tracking-tighter">
                    GUPTA SALES
                </div>

                {/* Desktop Menu - Simple Links */}
                <div className="hidden md:flex space-x-8">
                    {['Collection', 'Legacy', 'Services', 'Contact'].map((item) => (
                        <button
                            key={item}
                            className="text-sm uppercase tracking-widest text-gray-300 hover:text-white transition-colors"
                        >
                            {item}
                        </button>
                    ))}
                </div>

                {/* Mobile Menu Button - SVG instead of Icon Library (To prevent crashes) */}
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