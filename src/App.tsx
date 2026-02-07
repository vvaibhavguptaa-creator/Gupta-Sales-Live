import React, { useState, useEffect } from 'react';

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-yellow-500 selection:text-black">

      {/* NAVBAR */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-serif font-bold tracking-tighter">GUPTA SALES</div>
          <div className="hidden md:flex space-x-8 text-xs font-bold tracking-[0.2em] text-gray-400">
            <span>COLLECTION</span>
            <span>LEGACY</span>
            <span>CONTACT</span>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1620626012053-1c1adc307da2?q=80&w=1974&auto=format&fit=crop')] bg-cover bg-center" />

        {/* Content */}
        <div className="relative z-10 text-center px-6 animate-fade-in-up">
          <p className="text-yellow-500 tracking-[0.3em] text-xs font-bold mb-4 uppercase">Est. 1995 • Bikaner</p>
          <h1 className="text-5xl md:text-8xl font-serif text-white mb-6 leading-tight">
            Define Your <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-yellow-600">Sanctuary.</span>
          </h1>
          <p className="text-gray-300 max-w-lg mx-auto mb-10 text-sm md:text-base tracking-wide leading-relaxed">
            Premium tiles, sanitaryware, and bath fittings. <br />
            Curated for those who demand excellence.
          </p>
          <button className="px-8 py-4 bg-white text-black font-bold tracking-widest text-xs uppercase hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105">
            Explore Collection
          </button>
        </div>
      </div>

    </div>
  );
}