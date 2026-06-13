import { products } from "@/data/products";
import ProductPageClient from "@/app/components/product/ProductPageClient";

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default function ProductPage() {
  return <ProductPageClient />;
}
