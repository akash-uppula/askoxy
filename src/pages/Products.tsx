
import { useEffect, useState } from "react";

import { getProducts } from "../services/productService";
import type { Product } from "../types/product";
import ProductCard from "../components/ProductCard";

function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        setError(
          error instanceof Error
            ? error.message
            : "Something went wrong"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <section className="flex min-h-[60vh] items-center justify-center px-6 text-center">
        <h2 className="text-2xl font-semibold">
          Loading products...
        </h2>
      </section>
    );
  }

  if (error) {
    return (
      <section className="px-6 py-20 text-center">
        <p className="text-red-500">{error}</p>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-gray-50 px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900">
            Products
          </h1>

          <p className="text-gray-600">
            Explore our collection of products
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;
