"use client";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import {
  getProducts,
  createProduct as createProductApi,
  getCategoriesProduct,
  deleteProductApi,
  updateProductApi,
} from "../services/productService";
import { Product, ProductContextType } from "@/interfaces/product";

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);

  const fetchProductCategories = async () => {
    const data = await getCategoriesProduct();
    setCategories(data);
  };

  const fetchProducts = async () => {
    const data = await getProducts();
    setProducts(data);
  };

  const addProduct = async (product: Product) => {
    const newProduct = await createProductApi(product);
    setProducts((prevProducts) => [...prevProducts, newProduct]);
  };

  const deleteProduct = async (id: number) => {
    await deleteProductApi(id);
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== id)
    );
  };

  const updateProduct = async (id: number, updatedProduct: Product) => {
    try {
      const data = await updateProductApi(id, updatedProduct);

      setProducts((prevProducts) =>
        prevProducts.map((product) =>
          product.id === id ? { ...product, ...data } : product
        )
      );
    } catch (error) {
      console.error("Erro ao atualizar o produto:", error);
      throw error;
    }
  };

  console.log(products);

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider
      value={{
        products,
        fetchProducts,
        addProduct,
        categories,
        fetchProductCategories,
        deleteProduct,
        updateProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProductStore = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProductStore must be used within a ProductProvider");
  }
  return context;
};
