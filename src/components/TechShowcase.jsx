import React from 'react';
import { Shield, Sun, Thermometer, Cpu } from 'lucide-react';

const features = [
  {
    icon: Thermometer,
    title: 'Active + Passive Thermal Control',
    desc: 'Hybrid panels with loop heat pipe integration and variable emissivity surfaces optimize rejection from low-power to peak loads.'
  },
  {
    icon: Shield,
    title: 'Radiation-Hardened Materials',
    desc: 'Space-rated composites and coatings endure micrometeoroids, UV, atomic oxygen, and deep-space radiation for multi-year missions.'
  },
  {
    icon: Cpu,
    title: 'Smart Thermal Autonomy',
    desc: 'Embedded sensors and control algorithms tune emissivity and flow to hold thermal setpoints within ±0.2°C.'
  },
  {
    icon: Sun,
    title: 'Ultra-High Emissivity',
    desc: 'Nano-textured surfaces achieve superior IR emissivity with minimal mass, maximizing watts rejected per kilogram.'
  }
];

export default function TechShowcase() {
  return (
    <section id="technology" className="relative w-full py-20 bg-gradient-to-b from-black to-[#0B0612]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold">Thermal Systems Engineered for Space</h2>
          <p className="mt-4 text-white/70">
            Our modular radiator architecture scales from CubeSats to planetary habitats. Each panel is validated in thermal-vacuum with flight-like duty cycles and environmental loads.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="group rounded-xl border border-white/10 bg-white/5 hover:bg-white/[0.08] transition p-6">
              <f.icon className="h-6 w-6 text-violet-300" />
              <h3 className="mt-4 font-medium text-lg">{f.title}</h3>
              <p className="mt-2 text-sm text-white/70 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <SpecCard title="Mass Efficiency" value="> 85 W/kg" details="Flight-heritage layouts optimize rejection per kilogram across LEO, GEO, and interplanetary profiles." />
          <SpecCard title="Thermal Stability" value="±0.2°C" details="Closed-loop control with redundant sensors maintains tight thermal margins for sensitive payloads." />
          <SpecCard title="TR Level" value="TRL 6-8" details="Subsystems validated in relevant environment; select configs have flight heritage." />
        </div>
      </div>
    </section>
  );
}

function SpecCard({ title, value, details }) {
  return (
    <div className="rounded-xl border border-white/10 bg-gradient-to-b from-white/10 to-white/[0.06] p-6">
      <div className="text-sm uppercase tracking-wider text-white/60">{title}</div>
      <div className="mt-2 text-2xl font-semibold">{value}</div>
      <p className="mt-3 text-sm text-white/70">{details}</p>
    </div>
  );
}
