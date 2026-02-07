import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Manifesto from './components/Manifesto';
import ProductShowcase from './components/ProductShowcase';
import ServicesBento from './components/ServicesBento';
// import SmoothScroll from './components/SmoothScroll'; // DISABLED FOR NOW

function App() {
  return (
    // THE FIX: Changed 'h-screen' to 'min-h-screen'. 
    // Added 'overflow-x-hidden' to stop side-scrolling, but allow down-scrolling.
    <div className="bg-[#050505] min-h-screen w-full overflow-x-hidden text-white selection:bg-yellow-500 selection:text-black">

      {/* Navbar sits on top */}
      <Navbar />

      {/* The Sections */}
      <main className="flex flex-col">
        <Hero />
        <Manifesto />
        <ProductShowcase />
        <ServicesBento />
      </main>

    </div>
  );
}

export default App;