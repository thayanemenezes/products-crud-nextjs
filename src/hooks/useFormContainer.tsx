"use client";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Product } from "@/interfaces/product";
import { toast } from "react-hot-toast";
import { useProductStore } from "../context/ProductContext";
import { useEffect } from "react";

export const useFormContainer = <T extends z.ZodTypeAny>(schema: T) => {
  const router = useRouter();
  const { addProduct, categories, fetchCategories } = useProductStore();

  const defaultValues = {
    title: "",
    price: 0,
    image: "",
    description: "",
    category: "",
  };

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues,
    mode: "onChange",
  });

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  const handleCreateProduct = (data: Product) => {
    try {
      const productWithId = {
        ...data,
        id: Math.floor(Math.random() * 1000000),
      };

      addProduct(productWithId);
      toast.success("Produto criado com sucesso! 🎉");
      setTimeout(() => {
        router.push("/");
      }, 3000);
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : JSON.stringify(error);

      toast.error(
        `Erro ao criar produto: ${errorMessage || "Tente novamente."}`
      );
    }
  };

  const handleCancel = () => {
    router.back();
  };

  return {
    control,
    handleSubmit,
    handleCreateProduct,
    handleCancel,
    categories,
    errors,
  };
};
