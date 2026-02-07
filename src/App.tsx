import Navbar from './components/Navbar';

function App() {
  return (
    <div className="bg-[#050505] min-h-screen w-full text-white">

      <Navbar />

      {/* Content Placeholder */}
      <div className="pt-32 px-6 text-center">
        <h1 className="text-5xl font-serif text-white mb-4">GUPTA SALES</h1>
        <p className="text-yellow-500 tracking-widest uppercase">System Operational</p>
      </div>

    </div>
  );
}

export default App;