"use client";

import { motion } from "framer-motion";

export default function ContactLocation() {
  return (
    <section id="location" aria-label="Location & Presence" className="relative py-20 md:py-24 overflow-hidden bg-white">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: "radial-gradient(circle, #1B4332 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#1B4332]/[0.03] blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 mb-5">
            <span className="w-8 h-px bg-[#D4A017]" />
            <p className="text-[#D4A017] uppercase tracking-[5px] text-[11px] font-bold">Our Presence</p>
            <span className="w-8 h-px bg-[#D4A017]" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#111827] leading-tight">
            Location &{" "}<span className="text-[#D4A017]">Presence</span>
          </h2>
          <p className="mt-4 text-gray-500 text-sm md:text-base leading-relaxed">
            Based in the coconut heartlands of Southern India — close to source, close to ports.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Map placeholder */}
          <motion.div initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative rounded-2xl overflow-hidden border border-[#E5E7EB] h-[300px] sm:h-[400px] bg-[#0d2d1f] shadow-sm">
            {/* SVG mini-map */}
            <svg viewBox="0 0 600 350" className="w-full h-full" aria-hidden="true">
              <defs>
                <radialGradient id="locGlow" cx="50%" cy="50%" r="60%">
                  <stop offset="0%" stopColor="#1B4332" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#0a2818" stopOpacity="0" />
                </radialGradient>
              </defs>

              <rect width="600" height="350" fill="#0d2d1f" rx="0" />
              <rect width="600" height="350" fill="url(#locGlow)" />

              {/* Simplified Indian subcontinent */}
              <path d="M 200,50 L 340,50 L 370,80 L 380,140 L 400,170 L 420,190 L 410,240 L 390,270 L 350,300 L 300,320 L 260,310 L 220,280 L 180,240 L 160,200 L 150,160 L 160,120 L 180,80 Z"
                fill="#1B4332" stroke="#2d6a4f" strokeWidth="1.5" />

              {/* South India region highlight */}
              <path d="M 230,200 L 370,200 L 390,240 L 410,260 L 400,290 L 370,310 L 330,320 L 280,310 L 240,290 L 220,260 L 215,230 Z"
                fill="#2d6a4f" stroke="#4A9E6B" strokeWidth="1" opacity="0.5" />

              {/* Tamil Nadu highlight */}
              <path d="M 260,230 L 340,230 L 355,260 L 365,290 L 340,310 L 310,315 L 280,305 L 260,285 L 252,260 Z"
                fill="#22573e" stroke="#4A9E6B" strokeWidth="1" />

              {/* Pin - office location */}
              <motion.g initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.8, ease: "backOut" }}>
                <motion.circle cx="310" cy="275" r="8" fill="none" stroke="#D4A017" strokeWidth="1.5"
                  animate={{ r: [8, 20, 8], opacity: [0.8, 0.3, 0.8] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} />
                <circle cx="310" cy="275" r="6" fill="#D4A017" />
                <circle cx="310" cy="275" r="3" fill="#fff" />
              </motion.g>

              {/* Port indicators */}
              {[
                { x: 290, y: 230, label: "Chennai", color: "#4ade80" },
                { x: 250, y: 300, label: "Tuticorin", color: "#4ade80" },
                { x: 180, y: 200, label: "Mumbai (JNPT)", color: "#4ade80" },
              ].map((port, i) => (
                <motion.g key={port.label} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 1 + i * 0.1 }}>
                  <circle cx={port.x} cy={port.y} r="3" fill={port.color} />
                  <text x={port.x + 6} y={port.y + 1} fill={port.color} fontSize="7" fontFamily="system-ui" opacity="0.7">{port.label}</text>
                </motion.g>
              ))}

              {/* Export route arrows */}
              <motion.path d="M 310,265 Q 340,230 380,200" fill="none" stroke="#D4A017" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.4"
                initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
                transition={{ duration: 1, delay: 1.2 }} />
              <motion.path d="M 260,300 Q 220,310 180,320" fill="none" stroke="#D4A017" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.4"
                initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
                transition={{ duration: 1, delay: 1.3 }} />
              <motion.path d="M 370,270 Q 420,250 460,230" fill="none" stroke="#4ade80" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.4"
                initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
                transition={{ duration: 1, delay: 1.4 }} />

              {/* Legend */}
              <rect x="16" y="310" width="20" height="8" rx="2" fill="#D4A017" opacity="0.8" />
              <text x="42" y="317" fill="white" fontSize="8" fontFamily="system-ui" opacity="0.5">Office HQ</text>
            </svg>

            {/* Badge overlay */}
            <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/40 backdrop-blur-sm rounded-full px-3 py-1.5 border border-white/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4ade80] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4ade80]" />
              </span>
              <span className="text-[10px] text-green-300 uppercase tracking-widest font-medium">Operational HQ</span>
            </div>
          </motion.div>

          {/* Info panels */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }} className="space-y-4">
            {/* Office */}
            <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 hover:shadow-[0_8px_30px_rgba(27,67,50,0.06)] transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1B4332]/10 flex items-center justify-center text-2xl flex-shrink-0">🏢</div>
                <div>
                  <p className="text-[10px] uppercase tracking-[3px] text-[#D4A017] font-semibold mb-1">Office Location</p>
                  <p className="text-[#111827] font-semibold text-base">Tamil Nadu, India</p>
                  <p className="text-gray-500 text-xs mt-1 leading-relaxed">
                    Our operations are headquartered in the coconut-producing regions of Southern India, providing direct access to farm sourcing and major export ports.
                  </p>
                </div>
              </div>
            </div>

            {/* Region */}
            <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 hover:shadow-[0_8px_30px_rgba(27,67,50,0.06)] transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#D4A017]/10 flex items-center justify-center text-2xl flex-shrink-0">🌏</div>
                <div>
                  <p className="text-[10px] uppercase tracking-[3px] text-[#D4A017] font-semibold mb-1">Operational Region</p>
                  <p className="text-[#111827] font-semibold text-base">South India Coconut Belt</p>
                  <p className="text-gray-500 text-xs mt-1 leading-relaxed">
                    Sourcing from premium coconut-growing regions across Tamil Nadu, Kerala, and Karnataka — the heart of India&apos;s coconut industry.
                  </p>
                </div>
              </div>
            </div>

            {/* Coverage */}
            <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 hover:shadow-[0_8px_30px_rgba(27,67,50,0.06)] transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#2D7D9A]/10 flex items-center justify-center text-2xl flex-shrink-0">🚢</div>
                <div>
                  <p className="text-[10px] uppercase tracking-[3px] text-[#D4A017] font-semibold mb-1">Export Coverage</p>
                  <p className="text-[#111827] font-semibold text-base">4 Continents, 17+ Markets</p>
                  <p className="text-gray-500 text-xs mt-1 leading-relaxed">
                    Shipping from Chennai, Tuticorin, and Nhava Sheva ports to buyers across the Middle East, Europe, North America, and Asia-Pacific.
                  </p>
                  <a href="/logistics" className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#D4A017] mt-2 hover:underline underline-offset-2">
                    View logistics details →
                  </a>
                </div>
              </div>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { value: "15+", label: "Years Exporting" },
                { value: "3", label: "Port Corridors" },
                { value: "500+", label: "Containers Shipped" },
              ].map((stat) => (
                <div key={stat.label} className="bg-white border border-[#E5E7EB] rounded-xl p-4 text-center hover:shadow-[0_4px_16px_rgba(27,67,50,0.05)] transition-shadow">
                  <p className="text-[#D4A017] text-xl font-bold font-serif">{stat.value}</p>
                  <p className="text-gray-400 text-[10px] uppercase tracking-wider mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
