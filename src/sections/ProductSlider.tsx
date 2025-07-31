"use client";

import { useEffect, useState } from "react";
import CardSlider from "@/components/CardSlider";
import Card from "@/components/Card";

type ProductType = {
  _id: string;
  name: string;
  price?: string;
  description?: string;
  imageUrl?: string;
};

export default function ProductSlider() {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/products");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error("Failed to load products:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section id="products">
      <h2>Featured Treats</h2>
      {loading && <p>Loading products...</p>}
      <CardSlider>
        {products.map((product) => (
          <Card
            key={product._id}
            title={product.name}
            content={product.description}
            meta={product.price}
            image={product.imageUrl}
          />
        ))}
      </CardSlider>
    </section>
  );
}
