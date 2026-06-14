import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { products } from "@/data/products";
import { ProductSchema, BreadcrumbSchema } from "@/lib/schemas";

interface Props {
  params: Promise<{ slug: string }>;
  children: React.ReactNode;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return { title: "Product Not Found" };

  const ogImage = product.images.hero?.src ?? "/images/og-image.jpg";

  return {
    title: `${product.name} — Premium Bulk Exporter`,
    description: product.shortDescription,
    keywords: [
      `${product.name.toLowerCase()} exporter`,
      `${product.name.toLowerCase()} bulk export`,
      `${product.name.toLowerCase()} from India`,
      `${product.category.toLowerCase()} supplier`,
      `wholesale ${product.name.toLowerCase()}`,
      `buy ${product.name.toLowerCase()} wholesale`,
      `${product.name.toLowerCase()} export price`,
    ],
    openGraph: {
      title: `${product.name} — Premium Bulk Exporter | Global Coco Exports`,
      description: product.shortDescription,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 1400,
          alt: `${product.name} — Premium Bulk Exporter | Global Coco Exports`,
        },
      ],
      url: `https://www.globalcocoexports.com/products/${product.slug}`,
      type: "website",
      locale: "en_IN",
    siteName: "Global Coco Exports",
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} — Premium Bulk Exporter | Global Coco Exports`,
      description: product.shortDescription,
      images: [ogImage],
    },
    alternates: {
      canonical: `https://www.globalcocoexports.com/products/${product.slug}`,
    },
  };
}

export default async function ProductLayout({ params, children }: Props) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  return (
    <>
      {children}
      <ProductSchema
        productName={product.name}
        description={product.shortDescription}
        image={product.images.hero.src}
        sku={`GCE-PROD-${product.id}`}
        offers={{
          priceCurrency: "USD",
          price: "0",
          availability: "https://schema.org/InStock",
        }}
        category={product.category}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Products", url: "/#products" },
          { name: product.name, url: `/products/${product.slug}` },
        ]}
      />
    </>
  );
}
