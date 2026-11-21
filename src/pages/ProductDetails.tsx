import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";

import { getProductById } from "../services/productService";
import type { Product } from "../types/product";

function ProductDetails() {
  const { id } = useParams<{ id: string }>();

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      if (!id) {
        setError("Invalid product ID");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError("");

        const data = await getProductById(id);

        setProduct(data);
      } catch (error) {
        setError(
          error instanceof Error ? error.message : "Something went wrong",
        );
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center px-6 text-center">
        <h2 className="text-2xl font-semibold">Loading product details...</h2>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="py-20 text-center">
        <p className="mb-4 text-red-500">{error || "Product not found"}</p>

        <Link to="/products" className="text-blue-600 underline">
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gray-50 px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <Link
          to="/products"
          className="inline-block rounded-lg bg-black px-6 py-3 text-white transition hover:bg-gray-800 mb-6"
        >
          Back to Products
        </Link>

        <div className="grid gap-12 rounded-xl bg-white p-8 shadow-md md:grid-cols-2">
          {/* Product Image */}
          <div>
            <img
              src={product.thumbnail}
              alt={product.title}
              className="h-96 w-full rounded-xl object-contain"
            />
          </div>

          {/* Product Information */}
          <div>
            <p className="mb-3 text-sm capitalize text-gray-500">
              {product.category}
            </p>

            <h1 className="mb-4 text-3xl font-bold text-gray-900">
              {product.title}
            </h1>

            {product.brand && (
              <p className="mb-3 text-gray-600">Brand: {product.brand}</p>
            )}

            <p className="mb-6 leading-7 text-gray-600">
              {product.description}
            </p>

            <div className="mb-6 flex items-center gap-6">
              <span className="text-3xl font-bold text-gray-900">
                ${product.price}
              </span>

              <span className="text-yellow-600">⭐ {product.rating}</span>
            </div>

            <p className="mb-6 text-gray-600">
              Stock available: {product.stock}
            </p>

            <button className="rounded-lg bg-black px-8 py-3 text-white transition hover:bg-gray-800">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;
