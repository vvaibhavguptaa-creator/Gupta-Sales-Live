// FINAL DEPLOYMENT - SYSTEM LIVE
import React, { Component, ErrorInfo, ReactNode } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import SmoothScroll from './components/SmoothScroll';
import ScrollToTop from './components/ScrollToTop';
import FilmGrain from './components/FilmGrain';
import Preloader from './components/Preloader';
import ScrollColorGrade from './components/ScrollColorGrade';
import Home from './pages/Home';
import Showroom from './pages/Showroom';
import About from './pages/About';
import Contact from './pages/Contact';
import ProductDetails from './pages/ProductDetails';
import FooterSection from './components/FooterSection';
import WhatsAppButton from './components/WhatsAppButton';

class ErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean; error: Error | null }> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-black text-white p-4">
          <div className="bg-red-900/20 border border-red-500 p-6 rounded-lg max-w-2xl">
            <h1 className="text-2xl font-bold text-red-500 mb-4">Something went wrong.</h1>
            <pre className="whitespace-pre-wrap font-mono text-sm text-red-200">
              {this.state.error && this.state.error.toString()}
            </pre>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Preloader />
        <SmoothScroll />
        <ScrollToTop />
        <FilmGrain />
        <ScrollColorGrade />
        <Navbar />

        <main className="min-h-screen relative z-10 flex flex-col gap-0 bg-black">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/showroom" element={<Showroom />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/product/:id" element={<ProductDetails />} />
          </Routes>
        </main>
        <section id="contact">
          <FooterSection />
        </section>
        <WhatsAppButton />
      </Router>
    </ErrorBoundary>
  );
}

export default App;