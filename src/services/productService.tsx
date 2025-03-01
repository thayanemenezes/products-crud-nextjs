import { Product } from "@/interfaces/product";

const apiUrl = "https://fakestoreapi.com/products";

export const getProducts = async () => {
  const response = await fetch(apiUrl);
  return response.json();
};

export const createProduct = async (product: Product) => {
  const response = await fetch(apiUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  });
  return response.json();
};

export const updateProductApi = async (id: number, product: Product) => {
  const response = await fetch(`${apiUrl}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  });
  return response.json();
};

export const deleteProductApi = async (id: number) => {
  const response = await fetch(`${apiUrl}/${id}`, {
    method: "DELETE",
  });
  return response.json();
};
