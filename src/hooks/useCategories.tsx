"use client";
import { useEffect } from "react";
import { useCategoriesContext } from "@/context/CategoryContext";

export const useCategories = () => {
  const { categories, fetchProductCategories } = useCategoriesContext();

  useEffect(() => {
    fetchProductCategories();
  }, [fetchProductCategories]);

  return {
    categories,
  };
};
