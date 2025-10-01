import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechShowcase from './components/TechShowcase';
import Industries from './components/Industries';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <TechShowcase />
        <Industries />
      </main>
      <Footer />
    </div>
  );
}
