import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative w-full h-[90vh] md:h-[92vh]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/er66D6jbuo0hIjmn/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/80" />

      <div className="relative z-10 max-w-7xl mx-auto h-full px-6 flex items-center">
        <div className="max-w-3xl">
          <p className="uppercase tracking-widest text-xs md:text-sm text-white/60 mb-4">Thermal mastery for the final frontier</p>
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
            Cosmic Radiators for Spacecraft, Habitats, and Deep-Space Missions
          </h1>
          <p className="mt-6 text-base md:text-lg text-white/80">
            CryoNova designs high-efficiency cosmic radiators that reject heat in the harshest vacuum. Our ultra-light, radiation-hardened systems keep instruments stable, habitats livable, and propulsion reliable—far beyond low Earth orbit.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#technology" className="inline-flex items-center justify-center rounded-md bg-violet-500/90 hover:bg-violet-400 px-6 py-3 font-medium transition">
              Explore Technology
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-md border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 px-6 py-3 font-medium transition">
              Request Proposal
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
