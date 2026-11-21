import type { Product } from "../types/product";

const API_URL = "https://dummyjson.com/products";

// Fetch all products
export const getProducts = async (): Promise<Product[]> => {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  const data = await response.json();

  return data.products;
};

// Fetch a single product by ID
export const getProductById = async (id: string): Promise<Product> => {
  const response = await fetch(`${API_URL}/${id}`);

  if (!response.ok) {
    throw new Error("Failed to fetch product details");
  }

  const data = await response.json();

  return data;
};
