"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { useProductStore } from "@/context/ProductContext";
import { Product } from "@/interfaces/product";
import { toast } from "react-hot-toast";
import { useEffect } from "react";

export const useFormContainer = <T extends z.ZodTypeAny>(
  schema: T,
  defaultValues: any,
  productId?: number
) => {
  const router = useRouter();
  const { addProduct, updateProduct, categories, fetchProductCategories } =
    useProductStore();

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
    fetchProductCategories();
  }, [fetchProductCategories]);

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

  const handleUpdateProduct = async (data: Product) => {
    try {
      if (productId === undefined) {
        throw new Error("ID do produto não fornecido.");
      }

      await updateProduct(productId, data);
      toast.success("Produto atualizado com sucesso! 🎉");
      setTimeout(() => {
        router.push("/");
      }, 3000);
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : JSON.stringify(error);

      toast.error(
        `Erro ao atualizar produto: ${errorMessage || "Tente novamente."}`
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
    handleUpdateProduct,
    handleCancel,
    categories,
    errors,
  };
};
