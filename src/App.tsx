import Navbar from './components/Navbar';

function App() {
  return (
    <div className="bg-black min-h-screen w-full text-white">

      {/* 1. If this works, you will see the Menu Bar at the top */}
      <Navbar />

      <div className="flex h-screen items-center justify-center flex-col">
        <h1 className="text-4xl text-yellow-500 font-serif">TEST 1: NAVBAR PASSED</h1>
        <p className="text-gray-500 mt-4">If you see this, the Icons are fixed.</p>
      </div>

    </div>
  );
}

export default App;