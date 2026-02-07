import { useState } from 'react';

// WE ARE DEFINING THE NAVBAR RIGHT HERE (No Imports)
const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black py-6 border-b border-gray-800">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="text-2xl font-serif font-bold text-white">
          GUPTA SALES (EMBEDDED)
        </div>
        <div className="hidden md:flex space-x-8 text-gray-400">
          <span>COLLECTION</span>
          <span>LEGACY</span>
          <span>CONTACT</span>
        </div>
      </div>
    </nav>
  );
};

// THE MAIN APP
function App() {
  return (
    <div className="bg-[#050505] min-h-screen w-full text-white">

      {/* USING THE LOCAL COMPONENT */}
      <Navbar />

      <div className="pt-40 px-6 text-center">
        <h1 className="text-6xl font-serif text-white mb-6">
          IT WORKS.
        </h1>
        <p className="text-yellow-500 tracking-widest uppercase text-xl">
          The Import Was The Problem.
        </p>
      </div>

    </div>
  );
}

export default App;