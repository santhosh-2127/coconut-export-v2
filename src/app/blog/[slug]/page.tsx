import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { blogPosts, type BlogPost } from "@/data/blogPosts";
import { BreadcrumbSchema } from "@/lib/schemas";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

/* ─── Helpers ──────────────────────────────────────────────────────── */

function getPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

function getRelatedPosts(post: BlogPost): BlogPost[] {
  return post.relatedSlugs
    .map((s) => getPost(s))
    .filter((p): p is BlogPost => p !== undefined);
}

/* ─── Metadata (dynamic) ────────────────────────────────────────────── */

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const post = getPost(slug);
  if (!post) return { title: "Not Found" };

  return {
    title: `${post.title} — Coconut Export Knowledge Center`,
    description: post.excerpt,
    keywords: [
      "coconut export guide",
      post.slug.replace(/-/g, " "),
      "B2B coconut sourcing",
      "coconut import guide",
      "India coconut export",
    ],
    openGraph: {
      title: `${post.title} | Global Coco Exports`,
      description: post.excerpt,
      images: [
        {
          url: post.ogImage,
          width: 1200,
          height: 630,
          alt: post.heroImageAlt,
        },
      ],
      url: `https://www.globalcocoexports.com/blog/${post.slug}`,
      type: "article",
      locale: "en_IN",
      siteName: "Global Coco Exports",
      publishedTime: post.publishDate,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.ogImage],
    },
    alternates: {
      canonical: `https://www.globalcocoexports.com/blog/${post.slug}`,
    },
  };
}

/* ─── Section renderers ────────────────────────────────────────────── */

function SectionText({
  section,
}: {
  section: (typeof blogPosts)[0]["sections"][0];
}) {
  return (
    <div className="mb-10 last:mb-0">
      {section.heading && (
        <h2 className="text-xl sm:text-2xl font-bold text-[#1B4332] mb-4">
          {section.heading}
        </h2>
      )}
      {section.content && (
        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
          {section.content}
        </p>
      )}
    </div>
  );
}

function SectionImage({
  section,
}: {
  section: (typeof blogPosts)[0]["sections"][0];
}) {
  return (
    <div className="mb-10 last:mb-0">
      {section.heading && (
        <h2 className="text-xl sm:text-2xl font-bold text-[#1B4332] mb-4">
          {section.heading}
        </h2>
      )}
      <div className="relative w-full h-56 sm:h-72 md:h-80 rounded-xl overflow-hidden bg-[#1B4332]">
        <Image
          src={section.image || ""}
          alt={section.imageAlt || ""}
          fill
          className="object-cover object-center"
          sizes="(max-width:768px) 100vw, 800px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
      </div>
    </div>
  );
}

function SectionList({
  section,
}: {
  section: (typeof blogPosts)[0]["sections"][0];
}) {
  return (
    <div className="mb-10 last:mb-0">
      {section.heading && (
        <h2 className="text-xl sm:text-2xl font-bold text-[#1B4332] mb-4">
          {section.heading}
        </h2>
      )}
      <ul className="space-y-2.5">
        {section.items?.map((item, i) => (
          <li key={i} className="flex items-start gap-3 text-sm sm:text-base text-gray-600 leading-relaxed">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#D4A017] shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SectionCallout({
  section,
}: {
  section: (typeof blogPosts)[0]["sections"][0];
}) {
  return (
    <div className="mb-10 last:mb-0">
      <div className="relative p-5 sm:p-6 bg-[#1B4332]/[0.04] border-l-4 border-[#D4A017] rounded-r-xl">
        {section.calloutLabel && (
          <span className="inline-block px-2.5 py-0.5 mb-3 text-[9px] font-bold uppercase tracking-[0.16em] text-[#D4A017] bg-[#D4A017]/10 rounded-sm">
            {section.calloutLabel}
          </span>
        )}
        {section.content && (
          <p className="text-sm sm:text-base text-[#111827] leading-relaxed">
            {section.content}
          </p>
        )}
      </div>
    </div>
  );
}

function renderSection(
  section: (typeof blogPosts)[0]["sections"][0],
  index: number,
) {
  switch (section.type) {
    case "text":
      return <SectionText key={index} section={section} />;
    case "image":
      return <SectionImage key={index} section={section} />;
    case "list":
      return <SectionList key={index} section={section} />;
    case "callout":
      return <SectionCallout key={index} section={section} />;
    default:
      return null;
  }
}

/* ─── Page component ───────────────────────────────────────────────── */

export default async function BlogArticlePage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const post = getPost(slug);
  if (!post) notFound();

  const relatedPosts = getRelatedPosts(post);

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: post.title, url: `/blog/${post.slug}` },
        ]}
      />
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative pt-28 pb-12 md:pt-36 md:pb-16 bg-[#0C1A12] overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(212,160,23,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(212,160,23,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute -top-48 right-[-10%] w-[600px] h-[600px] rounded-full bg-[#D4A017]/[0.06] blur-[140px] pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-2 mb-5">
            <span className="w-8 h-px bg-[#D4A017]" />
            <span className="text-[#D4A017] text-[11px] font-semibold uppercase tracking-[0.2em]">
              {post.category}
            </span>
          </div>
          <h1 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold text-white leading-[1.12] tracking-[-0.02em] mb-4">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-3 text-white/50 text-sm">
            <span>{post.readTime}</span>
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <span>{new Date(post.publishDate).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</span>
          </div>
        </div>
      </section>

      {/* ── Hero Image ── */}
      <div className="bg-[#FAFAFA]">
        <div className="max-w-5xl mx-auto px-6 -mt-8">
          <div className="relative w-full h-48 sm:h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg bg-[#1B4332]">
            <Image
              src={post.heroImage}
              alt={post.heroImageAlt}
              fill
              className="object-cover object-center"
              sizes="(max-width:768px) 100vw, 900px"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          </div>
        </div>
      </div>

      {/* ── Article Content ── */}
      <article className="bg-[#FAFAFA] py-10 md:py-14">
        <div className="max-w-3xl mx-auto px-6">
          {/* Intro */}
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-10 font-medium">
            {post.intro}
          </p>

          {/* Table of Contents */}
          <div className="mb-12 p-5 sm:p-6 bg-white border border-gray-100 rounded-xl shadow-sm">
            <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#D4A017] mb-4">
              Table of Contents
            </h2>
            <nav>
              <ul className="space-y-2">
                {post.tableOfContents.map((item, i) => (
                  <li key={i}>
                    <span className="flex items-center gap-3 text-sm text-gray-600">
                      <span className="w-5 h-5 rounded-full bg-[#1B4332]/10 flex items-center justify-center text-[10px] font-bold text-[#1B4332] shrink-0">
                        {i + 1}
                      </span>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Sections */}
          <div className="space-y-0">{post.sections.map((section, i) => renderSection(section, i))}</div>

          {/* Divider */}
          <hr className="my-12 border-gray-200" />

          {/* Key Takeaways */}
          <div className="mb-12">
            <h2 className="text-xl sm:text-2xl font-bold text-[#1B4332] mb-5">
              Key Takeaways
            </h2>
            <div className="space-y-3">
              {post.keyTakeaways.map((takeaway, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-4 bg-white border border-gray-100 rounded-xl shadow-sm"
                >
                  <span className="mt-0.5 w-6 h-6 rounded-full bg-[#D4A017]/20 flex items-center justify-center shrink-0">
                    <svg
                      className="w-3 h-3 text-[#D4A017]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </span>
                  <p className="text-sm text-gray-600 leading-snug">{takeaway}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#0a1f16] via-[#0d2d1f] to-[#0a1a12] text-center">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
              Need Bulk Pricing or Export Assistance?
            </h3>
            <p className="text-white/60 text-sm sm:text-base mb-6 max-w-lg mx-auto">
              Our export team is ready to help with product specifications, FOB/CIF pricing, and shipment planning.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#D4A017] text-[#0C1A12] font-bold text-sm tracking-[0.06em] uppercase rounded-xl hover:bg-[#E4B42A] transition-all duration-300 active:scale-[0.98]"
            >
              Request Export Quotation
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </article>

      {/* ── Related Articles ── */}
      {relatedPosts.length > 0 && (
        <section className="bg-white py-14 md:py-18">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-8 h-px bg-[#D4A017]" />
                <p className="text-[#D4A017] uppercase tracking-[5px] text-[11px] font-bold">
                  Related Articles
                </p>
                <span className="w-8 h-px bg-[#D4A017]" />
              </div>
              <h2 className="text-2xl sm:text-3xl text-[#1B4332] font-bold">
                More Export{" "}
                <span className="text-[#D4A017]">Knowledge</span>
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {relatedPosts.map((related, i) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="group bg-white border border-gray-100 hover:border-[#1B4332]/20 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_12px_40px_rgba(27,67,50,0.08)]"
                >
                  <div className="relative w-full h-40 overflow-hidden bg-[#1B4332]">
                    <Image
                      src={related.heroImage}
                      alt={related.heroImageAlt}
                      fill
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                    <div className="absolute top-3 left-3">
                      <span className="inline-block px-2 py-0.5 text-[8px] uppercase tracking-[0.15em] font-semibold text-white bg-[#D4A017]/90 rounded-sm">
                        {related.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <span className="text-[10px] text-gray-400">{related.readTime}</span>
                    <h3 className="text-sm font-bold text-[#111827] mt-1 mb-2 leading-snug group-hover:text-[#1B4332] transition-colors line-clamp-2">
                      {related.title}
                    </h3>
                    <p className="text-[12px] text-gray-500 leading-relaxed line-clamp-2">
                      {related.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </>
  );
}
