import React from 'react';
import { Rocket } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/60 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Rocket className="h-6 w-6 text-violet-300" />
          <span className="font-semibold tracking-tight">CryoNova Space</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
          <a href="#technology" className="hover:text-white transition">Technology</a>
          <a href="#industries" className="hover:text-white transition">Industries</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </nav>
        <a href="#contact" className="ml-4 inline-flex items-center rounded-md bg-violet-500/90 hover:bg-violet-400 text-white px-4 py-2 text-sm font-medium transition">
          Get Started
        </a>
      </div>
    </header>
  );
}
