import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="max-w-7xl mx-auto px-6 py-10 text-sm text-white/60">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="font-semibold text-white">CryoNova Space</div>
            <p className="mt-1">Cosmic radiators for spacecraft, habitats, and deep-space missions.</p>
          </div>
          <div className="flex gap-6">
            <a href="#technology" className="hover:text-white transition">Technology</a>
            <a href="#industries" className="hover:text-white transition">Industries</a>
            <a href="mailto:mission@cryonova.space" className="hover:text-white transition">Email</a>
          </div>
        </div>
        <div className="mt-8 text-xs text-white/50">© {new Date().getFullYear()} CryoNova Space. All rights reserved.</div>
      </div>
    </footer>
  );
}
