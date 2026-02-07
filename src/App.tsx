function App() {
  return (
    <div style={{ backgroundColor: 'black', height: '100vh', color: 'white', padding: '50px' }}>

      {/* MANUAL NAVBAR (Inline Styles) */}
      <div style={{ borderBottom: '2px solid gray', paddingBottom: '20px', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '30px', color: 'gold' }}>GUPTA SALES (NO CSS)</h1>
      </div>

      {/* CONTENT */}
      <div>
        <h2>If you can see this, Tailwind was the problem.</h2>
        <p>The code is fine. The styling engine is broken.</p>
      </div>

    </div>
  );
}

export default App;