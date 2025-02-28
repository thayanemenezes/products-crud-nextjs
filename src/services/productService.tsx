import { Product } from "@/interfaces/product";

const BASE_URL = "https://fakestoreapi.com/products";

export const getCategoriesProduct = async () => {
  const response = await fetch("https://fakestoreapi.com/products/categories");
  return response.json();
};

export const getProducts = async () => {
  const response = await fetch(BASE_URL);
  return response.json();
};

export const createProduct = async (product: Product) => {
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  });
  return response.json();
};

export const updateProductApi = async (id: number, product: Product) => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  });
  return response.json();
};

export const deleteProductApi = async (id: number) => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });
  return response.json();
};
