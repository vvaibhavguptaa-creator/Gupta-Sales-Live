import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Manifesto from './components/Manifesto';
import ProductShowcase from './components/ProductShowcase';
import ServicesBento from './components/ServicesBento';

function App() {
  return (
    <div className="bg-[#050505] min-h-screen w-full overflow-x-hidden text-white selection:bg-yellow-500 selection:text-black">

      {/* Navigation */}
      <Navbar />

      {/* The Luxury Sequence */}
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