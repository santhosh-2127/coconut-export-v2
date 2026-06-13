"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/constants/navLinks";
import { trackOutboundClick } from "@/lib/analytics";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on Escape and trap focus
  useEffect(() => {
    if (!mobileOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        hamburgerRef.current?.focus();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5" aria-label="Global Coco Exports — Home">
          <div className="w-8 h-8 rounded-lg overflow-hidden flex-shrink-0">
            <Image src="/images/logo-icon.svg" alt="" width={32} height={32} className="w-full h-full" />
          </div>
          <span
            className={`text-lg font-bold tracking-wide transition-colors duration-500 ${
              scrolled ? "text-[#1B4332]" : "text-white"
            }`}
          >
            GLOBAL COCO <span className="text-[#D4A017]">EXPORTS</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-sm font-medium tracking-wide transition-colors duration-300 hover:text-[#D4A017] ${
                scrolled ? "text-gray-700" : "text-white/90"
              }`}
            >
              {link.label}
            </a>
          ))}
          {/* Product detail dropdown — keyboard accessible */}
          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
            onFocus={() => setDropdownOpen(true)}
            onBlur={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget)) {
                setDropdownOpen(false);
              }
            }}
          >
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              onKeyDown={(e) => e.key === "Escape" && setDropdownOpen(false)}
              className={`text-sm font-medium tracking-wide transition-colors duration-300 hover:text-[#D4A017] ${
                scrolled ? "text-gray-700" : "text-white/90"
              }`}
              aria-expanded={dropdownOpen}
              aria-haspopup="true"
            >
              Products ▾
            </button>
            {dropdownOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2" role="menu" aria-label="Product categories">
                <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2 min-w-[220px]">
                  {/* Whole Coconut category */}
                  <div className="px-5 pt-2 pb-1">
                    <span className="text-[9px] uppercase tracking-[0.2em] text-[#D4A017] font-semibold">Whole Coconut</span>
                  </div>
                  <a
                    href="/products/fresh-brown-coconut"
                    className="block px-5 py-2 text-sm text-gray-700 hover:text-[#1B4332] hover:bg-[#1B4332]/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1B4332]"
                    role="menuitem"
                  >
                    Fresh Brown Coconut
                  </a>
                  <a
                    href="/products/pollachi-fresh-coconut"
                    className="block px-5 py-2 text-sm text-gray-700 hover:text-[#1B4332] hover:bg-[#1B4332]/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1B4332]"
                    role="menuitem"
                  >
                    Pollachi Fresh Coconut
                  </a>
                  <a
                    href="/products/high-grade-coconut"
                    className="block px-5 py-2 text-sm text-gray-700 hover:text-[#1B4332] hover:bg-[#1B4332]/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1B4332]"
                    role="menuitem"
                  >
                    High Grade Coconut
                  </a>
                  {/* Processed category */}
                  <div className="border-t border-gray-100 mt-1 pt-2 px-5 pb-1">
                    <span className="text-[9px] uppercase tracking-[0.2em] text-[#D4A017] font-semibold">Processed</span>
                  </div>
                  <a
                    href="/products/copra-coconut"
                    className="block px-5 py-2 text-sm text-gray-700 hover:text-[#1B4332] hover:bg-[#1B4332]/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1B4332]"
                    role="menuitem"
                  >
                    Copra Coconut
                  </a>
                  <a
                    href="/products/coco-peat"
                    className="block px-5 py-2 text-sm text-gray-700 hover:text-[#1B4332] hover:bg-[#1B4332]/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1B4332]"
                    role="menuitem"
                  >
                    Coco Peat
                  </a>
                  <div className="border-t border-gray-100 mt-1 pt-2 px-5 pb-2">
                    <a
                      href="/#products"
                      className="block text-xs font-semibold text-[#1B4332] hover:text-[#D4A017] transition-colors text-center"
                      role="menuitem"
                    >
                      View All Products →
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Desktop CTA */}
        <a
          href="/#contact"
          onClick={() => trackOutboundClick({ type: "request_quote", label: "Navbar Request Quote" })}
          className={`hidden md:inline-flex items-center px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
            scrolled
              ? "bg-[#1B4332] text-white hover:bg-[#143A28]"
              : "bg-white/20 text-white backdrop-blur-sm hover:bg-white/30 border border-white/30"
          }`}
        >
          Request Quote
        </a>

        {/* Mobile Hamburger */}
        <button
          ref={hamburgerRef}
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`md:hidden flex flex-col gap-1.5 p-3 min-w-[44px] min-h-[44px] items-center justify-center transition-colors ${
            scrolled ? "text-[#1B4332]" : "text-white"
          }`}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
        >
          <span
            className={`block w-6 h-0.5 bg-current transition-all duration-300 origin-center ${
              mobileOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-current transition-all duration-300 origin-center ${
              mobileOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-gray-100 shadow-lg overflow-hidden"
          >
            <div className="px-4 sm:px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-gray-700 font-medium py-3 px-2 border-b border-gray-50 last:border-0 hover:text-[#1B4332] transition-colors min-h-[44px] flex items-center"
              >
                {link.label}
              </a>
            ))}
            {/* Mobile product sub-links */}
            <div className="pl-4 border-l-2 border-[#D4A017]/30 space-y-1 mt-1">
              <p className="text-[10px] uppercase tracking-widest text-[#D4A017] font-semibold pt-1 pb-1">
                Whole Coconut
              </p>
              <a
                href="/products/fresh-brown-coconut"
                onClick={() => setMobileOpen(false)}
                className="text-sm text-gray-600 font-medium py-2.5 block hover:text-[#1B4332] transition-colors min-h-[44px] flex items-center"
              >
                Fresh Brown Coconut
              </a>
              <a
                href="/products/pollachi-fresh-coconut"
                onClick={() => setMobileOpen(false)}
                className="text-sm text-gray-600 font-medium py-2.5 block hover:text-[#1B4332] transition-colors min-h-[44px] flex items-center"
              >
                Pollachi Fresh Coconut
              </a>
              <a
                href="/products/high-grade-coconut"
                onClick={() => setMobileOpen(false)}
                className="text-sm text-gray-600 font-medium py-2.5 block hover:text-[#1B4332] transition-colors min-h-[44px] flex items-center"
              >
                High Grade Coconut
              </a>
              <p className="text-[10px] uppercase tracking-widest text-[#D4A017] font-semibold pt-2 pb-1">
                Processed
              </p>
              <a
                href="/products/copra-coconut"
                onClick={() => setMobileOpen(false)}
                className="text-sm text-gray-600 font-medium py-2.5 block hover:text-[#1B4332] transition-colors min-h-[44px] flex items-center"
              >
                Copra Coconut
              </a>
              <a
                href="/products/coco-peat"
                onClick={() => setMobileOpen(false)}
                className="text-sm text-gray-600 font-medium py-2.5 block hover:text-[#1B4332] transition-colors min-h-[44px] flex items-center"
              >
                Coco Peat
              </a>
            </div>              <a
                href="/#contact"
                onClick={() => {
                  setMobileOpen(false);
                  trackOutboundClick({ type: "request_quote", label: "Mobile Navbar Request Quote" });
                }}
                className="mt-2 bg-[#1B4332] text-white text-center px-5 py-3.5 rounded-full font-semibold hover:bg-[#143A28] transition-colors min-h-[44px] flex items-center justify-center"
              >
                Request Quote
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
