"use client";

import { motion } from "framer-motion";

/* ─── Time zones ─────────────────────────────── */
const timeZones = [
  {
    region: "Middle East (GST)",
    offset: "+1.5h",
    flag: "🌍",
    localTime: "10:30 AM – 7:30 PM",
    team: "Dedicated support",
  },
  {
    region: "Europe (CET)",
    offset: "-4.5h to -3.5h",
    flag: "🌍",
    localTime: "4:30 AM – 1:30 PM",
    team: "Extended morning coverage",
  },
  {
    region: "Americas (EST)",
    offset: "-10.5h",
    flag: "🌍",
    localTime: "10:30 PM – 7:30 AM",
    team: "Next-day response guaranteed",
  },
  {
    region: "Asia-Pacific (SGT)",
    offset: "+2.5h",
    flag: "🌍",
    localTime: "11:30 AM – 8:30 PM",
    team: "Overlapping business hours",
  },
];

/* ─── Response SLAs ──────────────────────────── */
const slas = [
  { label: "Email Response", time: "Within 24 hours", pct: "95%" },
  { label: "WhatsApp Response", time: "Within 2 hours", pct: "90%" },
  { label: "Quotation Delivery", time: "Within 24 hours", pct: "98%" },
  { label: "Urgent Inquiry", time: "Same day", pct: "85%" },
];

export default function ContactHours() {
  return (
    <section id="hours" aria-label="Global Business Hours" className="relative py-20 md:py-24 overflow-hidden"
      style={{ background: "linear-gradient(160deg, #0d2d1f 0%, #102a1e 40%, #0a1f16 100%)" }}>
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle, rgba(212,160,23,0.8) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #1B4332 0%, transparent 70%)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 mb-5">
            <span className="w-8 h-px bg-[#D4A017]" />
            <p className="text-[#D4A017] uppercase tracking-[5px] text-[11px] font-bold">Availability</p>
            <span className="w-8 h-px bg-[#D4A017]" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Global Business{" "}<span className="text-[#D4A017]">Hours</span>
          </h2>
          <p className="mt-4 text-green-200/60 text-sm md:text-base leading-relaxed">
            Our team works across time zones to support international buyers worldwide.
          </p>
        </motion.div>

        {/* Core hours */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-2xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-4 p-5 rounded-2xl border border-white/10 bg-white/[0.03]">
            <div className="text-4xl">🕐</div>
            <div className="text-left">
              <p className="text-white font-bold text-lg">Monday – Saturday</p>
              <p className="text-green-200/60 text-sm">9:00 AM – 6:00 PM IST (GMT+5:30)</p>
            </div>
          </div>
        </motion.div>

        {/* Time zone grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {timeZones.map((tz, i) => (
            <motion.div key={tz.region} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.07 }}
              className="rounded-xl border border-white/10 bg-white/[0.03] p-5 hover:bg-white/[0.06] transition-colors">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xl">{tz.flag}</span>
                <p className="text-white text-xs font-semibold">{tz.region}</p>
              </div>
              <p className="text-[#D4A017] text-2xl font-bold mb-1">{tz.offset}</p>
              <p className="text-green-200/50 text-[11px] uppercase tracking-wider">from IST</p>
              <div className="mt-3 pt-3 border-t border-white/5">
                <p className="text-white/70 text-xs">{tz.localTime}</p>
                <p className="text-white/30 text-[10px] mt-0.5">{tz.team}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* SLA bar */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-4xl mx-auto">
          <p className="text-[10px] uppercase tracking-[3px] text-[#D4A017] font-semibold mb-4 text-center">Response time commitments</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10">
            {slas.map((sla) => (
              <div key={sla.label} className="flex flex-col items-center justify-center py-5 px-4 bg-white/[0.04]">
                <span className="text-[#D4A017] text-2xl font-bold">{sla.pct}</span>
                <span className="text-white/80 text-xs font-medium mt-0.5">{sla.label}</span>
                <span className="text-green-200/40 text-[10px] mt-1">{sla.time}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA note */}
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.45 }}
          className="mt-10 text-center">
          <div className="inline-flex items-center gap-2 p-4 rounded-xl bg-[#D4A017]/5 border border-[#D4A017]/20">
            <span className="text-xl" aria-hidden="true">🌐</span>
            <p className="text-green-200/70 text-sm">
              Out-of-hours inquiries receive priority attention at the start of the next business day.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
