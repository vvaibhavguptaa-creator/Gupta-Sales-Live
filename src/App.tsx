import Navbar from './components/Navbar';

function App() {
  return (
    <div className="bg-black min-h-screen text-white flex flex-col items-center justify-center">
      <Navbar />
      <h1 className="text-4xl font-serif text-yellow-500 mt-20">
        SYSTEM ONLINE
      </h1>
      <p className="text-gray-400 mt-4">
        The brain is connected. Ready to load Luxury Modules.
      </p>
    </div>
  );
}

export default App;