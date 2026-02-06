import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center bg-black/80 backdrop-blur-md transition-all duration-300">
            {/* Left: Brand Name */}
            <Link to="/" className="text-white font-bold text-xl uppercase tracking-wider hover:opacity-90 transition-opacity">
                GUPTA SALES
            </Link>

            {/* Right: Call to Action Button */}
            <button className="bg-gradient-to-r from-yellow-500 to-yellow-700 text-black font-bold text-sm md:text-base px-6 py-2 md:px-8 md:py-3 rounded-full hover:scale-105 transition-transform duration-300 shadow-lg shadow-yellow-500/20">
                Book Consultation
            </button>
        </header>
    );
};

export default Navbar;
