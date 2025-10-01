import React from 'react';
import { Rocket, Shield, Globe } from 'lucide-react';

const sectors = [
  {
    icon: Rocket,
    title: 'Spacecraft & Payloads',
    desc: 'From CubeSat buses to deep-space probes, keep avionics and instruments inside design temperatures without mass penalties.'
  },
  {
    icon: Globe,
    title: 'Orbital Infrastructure',
    desc: 'Stations, depots, and tugs benefit from scalable panels and loop heat pipe networks for continuous operations.'
  },
  {
    icon: Shield,
    title: 'Habitat & Surface Systems',
    desc: 'Lunar and Martian habitats utilize dust-tolerant coatings and fault-tolerant manifolds for long-duration missions.'
  }
];

export default function Industries() {
  return (
    <section id="industries" className="relative py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold">Built for Every Orbit and Destination</h2>
          <p className="mt-4 text-white/70">
            Whether you are operating in LEO, GEO, cis-lunar space, or pushing past the asteroid belt, our cosmic radiators adapt to mission profiles and environments.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {sectors.map((s, i) => (
            <article key={i} className="rounded-xl border border-white/10 bg-white/5 p-6 hover:bg-white/[0.08] transition">
              <s.icon className="h-6 w-6 text-violet-300" />
              <h3 className="mt-4 text-lg font-medium">{s.title}</h3>
              <p className="mt-2 text-sm text-white/70 leading-relaxed">{s.desc}</p>
            </article>
          ))}
        </div>

        <div id="contact" className="mt-16 rounded-2xl border border-white/10 bg-gradient-to-r from-violet-600/20 to-fuchsia-600/20 p-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-semibold">Need thermal control for your next mission?</h3>
              <p className="mt-2 text-white/80">Share your payload heat loads, duty cycles, and mission duration. Our team will respond within 48 hours with a concept and estimate.</p>
            </div>
            <div className="flex lg:justify-end">
              <a href="mailto:mission@cryonova.space" className="inline-flex items-center justify-center rounded-md bg-violet-500/90 hover:bg-violet-400 px-6 py-3 font-medium transition w-full lg:w-auto">
                Contact Engineering
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
