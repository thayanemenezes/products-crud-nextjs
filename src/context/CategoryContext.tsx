"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import { CategoriesContextValue } from "@/interfaces/product";
import { getCategoriesProduct } from "@/services/categoriesService";

const CategoriesContext = createContext<CategoriesContextValue | undefined>(
  undefined
);

export const CategoryProvider = ({ children }: { children: ReactNode }) => {
  const [categories, setCategories] = useState<string[]>([]);

  const fetchProductCategories = async () => {
    const data = await getCategoriesProduct();
    setCategories(data);
  };

  return (
    <CategoriesContext.Provider
      value={{
        categories,
        fetchProductCategories,
      }}
    >
      {children}
    </CategoriesContext.Provider>
  );
};

export const useCategoriesContext = () => {
  const context = useContext(CategoriesContext);
  if (!context) {
    throw new Error("useCategories must be used within a CategoryProvider");
  }
  return context;
};
