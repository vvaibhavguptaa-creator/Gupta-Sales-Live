import { useState, useEffect } from 'react';

// --- COMPONENTS DEFINED INTERNALLY (NO IMPORTS) ---

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur border-b border-white/10">
    <div className="container mx-auto px-6 py-4 flex justify-between items-center">
      <div className="text-2xl font-serif font-bold text-white tracking-tighter">
        GUPTA SALES
      </div>
      <div className="hidden md:flex space-x-8 text-xs font-bold tracking-[0.2em] text-gray-400">
        <span className="hover:text-white cursor-pointer transition-colors">COLLECTION</span>
        <span className="hover:text-white cursor-pointer transition-colors">LEGACY</span>
        <span className="hover:text-white cursor-pointer transition-colors">SERVICES</span>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <div className="relative h-screen flex items-center justify-center bg-[#050505] overflow-hidden">
    <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000')] bg-cover bg-center" />
    <div className="relative z-10 text-center px-6">
      <h1 className="text-5xl md:text-8xl font-serif text-white mb-6 leading-tight">
        Define Your <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-yellow-500">Sanctuary.</span>
      </h1>
      <p className="text-gray-400 max-w-lg mx-auto mb-10 text-sm md:text-base tracking-wide">
        Premium tiles, sanitaryware, and bath fittings for the modern home.
        Curated for those who demand excellence.
      </p>
      <button className="px-8 py-4 bg-white text-black font-bold tracking-widest text-xs uppercase hover:bg-yellow-500 transition-all duration-300">
        Explore Collection
      </button>
    </div>
  </div>
);

// --- MAIN APP ---

function App() {
  return (
    <div className="bg-black min-h-screen text-white selection:bg-yellow-500 selection:text-black">
      <Navbar />
      <Hero />

      {/* Content Spacer to allow scrolling */}
      <div className="py-20 text-center border-t border-white/10">
        <p className="text-gray-600 text-sm tracking-widest">EST. 1995 • BIKANER</p>
      </div>
    </div>
  );
}

export default App;