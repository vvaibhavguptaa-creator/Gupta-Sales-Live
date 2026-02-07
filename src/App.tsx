import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Manifesto from './components/Manifesto';
import ProductShowcase from './components/ProductShowcase';
import ServicesBento from './components/ServicesBento';

function App() {
  return (
    <div className="bg-[#050505] min-h-screen w-full overflow-x-hidden text-white">

      <Navbar />

      {/* DEBUG MODE: We commented these out to see which one is the killer */}
      <div className="pt-32 text-center">
        <h1 className="text-4xl text-yellow-500 font-serif">SAFE MODE ACTIVE</h1>
        <p className="text-gray-400 mt-4">If you see this, the App is healthy.</p>

        {/* <Hero /> */}
        {/* <Manifesto /> */}
        {/* <ProductShowcase /> */}
        {/* <ServicesBento /> */}
      </div>

    </div>
  );
}

export default App;