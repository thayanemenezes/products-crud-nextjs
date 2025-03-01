const apiUrl = "https://fakestoreapi.com/products/categories";

export const getCategoriesProduct = async () => {
  const response = await fetch(apiUrl);
  return response.json();
};
