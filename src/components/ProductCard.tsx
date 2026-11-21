
import { Link } from "react-router";
import type { Product } from "../types/product";

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      to={`/products/${product.id}`}
      className="group overflow-hidden rounded-xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl"
    >
      <img
        src={product.thumbnail}
        alt={product.title}
        className="h-56 w-full object-cover transition duration-300 group-hover:scale-105"
      />

      <div className="p-6">
        <p className="mb-2 text-sm capitalize text-gray-500">
          {product.category}
        </p>

        <h2 className="mb-3 text-xl font-semibold text-gray-900">
          {product.title}
        </h2>

        <p className="mb-4 line-clamp-2 text-gray-600">
          {product.description}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-gray-900">
            ${product.price}
          </span>

          <span className="text-sm text-yellow-600">
            ⭐ {product.rating}
          </span>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
