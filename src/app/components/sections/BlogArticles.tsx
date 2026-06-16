"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/data/blogPosts";

export default function BlogArticles() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  // Separate featured (first) from the rest
  const featured = blogPosts[0];
  const remaining = blogPosts.slice(1);

  return (
    <section
      id="blog-articles"
      ref={sectionRef}
      className="relative py-20 md:py-24 overflow-hidden bg-[#FAFAFA]"
      aria-label="Blog Articles"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-[0.022]" style={{ backgroundImage: "repeating-linear-gradient(0deg, #1B4332 0px, #1B4332 1px, transparent 1px, transparent 48px), repeating-linear-gradient(90deg, #1B4332 0px, #1B4332 1px, transparent 1px, transparent 48px)" }} />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#1B4332]/[0.04] blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* ═══ FEATURED ARTICLE ═══ */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <div className="inline-flex items-center gap-2 mb-5">
            <span className="w-8 h-px bg-[#D4A017]" />
            <p className="text-[#D4A017] uppercase tracking-[5px] text-[11px] font-bold">
              Featured Guide
            </p>
            <span className="w-8 h-px bg-[#D4A017]" />
          </div>
        </motion.div>

        <motion.article
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="group relative bg-white border border-[#E5E7EB] rounded-2xl overflow-hidden hover:shadow-[0_16px_48px_rgba(27,67,50,0.10)] transition-all duration-300 mb-14"
        >
          <Link href={`/blog/${featured.slug}`} className="grid md:grid-cols-2 gap-0">
            <div className="relative h-56 sm:h-72 md:h-full min-h-[240px] bg-[#1B4332] overflow-hidden">
              <Image
                src={featured.heroImage}
                alt={featured.heroImageAlt}
                fill
                className="absolute inset-0 object-cover object-center transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width:768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent md:bg-gradient-to-r md:from-black/40 md:via-black/10 md:to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="inline-block px-3 py-1 text-[9px] uppercase tracking-[0.2em] font-semibold text-white bg-[#D4A017]/90 rounded-sm">
                  {featured.category}
                </span>
              </div>
            </div>
            <div className="p-7 md:p-9 flex flex-col justify-center">
              <span className="text-[10px] font-semibold text-[#D4A017] uppercase tracking-[0.15em] mb-2">{featured.readTime}</span>
              <h2 className="text-xl md:text-2xl font-bold text-[#111827] mb-3 leading-tight group-hover:text-[#1B4332] transition-colors">
                {featured.title}
              </h2>
              <p className="text-sm text-gray-500 leading-relaxed mb-6">{featured.excerpt}</p>
              <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.12em] text-[#1B4332] hover:text-[#D4A017] transition-colors group/link">
                Read Article
                <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </div>
          </Link>
        </motion.article>

        {/* ═══ PRODUCT GUIDES ═══ */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.15 }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <div className="inline-flex items-center gap-2 mb-5">
            <span className="w-8 h-px bg-[#D4A017]" />
            <p className="text-[#D4A017] uppercase tracking-[5px] text-[11px] font-bold">
              Export Knowledge Center
            </p>
            <span className="w-8 h-px bg-[#D4A017]" />
          </div>
          <h2 className="text-3xl sm:text-4xl text-[#1B4332] font-bold leading-tight">
            Product-Focused{" "}
            <span className="text-[#D4A017]">Export Guides</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {remaining.map((article, i) => (
            <motion.article
              key={article.slug}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.08, ease: "easeOut" }}
              className="group relative bg-white border border-[#E5E7EB] hover:border-[#1B4332]/20 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_12px_40px_rgba(27,67,50,0.08)] flex flex-col"
            >
              <Link href={`/blog/${article.slug}`} className="flex flex-col flex-1">
                {/* Image at top */}
                <div className="relative w-full h-44 overflow-hidden bg-[#1B4332]">
                  <Image
                    src={article.heroImage}
                    alt={article.heroImageAlt}
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="inline-block px-2 py-0.5 text-[8px] uppercase tracking-[0.15em] font-semibold text-white bg-[#D4A017]/90 rounded-sm">
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-5 sm:p-6 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] text-gray-400">{article.readTime}</span>
                  </div>
                  <h3 className="text-base font-bold text-[#111827] mb-2 leading-snug group-hover:text-[#1B4332] transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed flex-1 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-[#1B4332] hover:text-[#D4A017] transition-colors mt-auto group/link">
                    Read More
                    <svg className="w-3 h-3 transition-transform duration-300 group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
