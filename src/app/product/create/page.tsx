"use client";
import { ProductForm } from "@/components/ProductForm";
import { useFormContainer } from "@/hooks/useFormContainer";
import { productSchema } from "@/schemas/productSchema";
import { Paper } from "@mui/material";
import React from "react";
import { Toaster } from "react-hot-toast";

const CreateProduct = () => {
  const defaultValues = {
    title: "",
    price: 0,
    image: "",
    description: "",
    category: "",
  };
  const { handleCreateProduct, handleCancel } = useFormContainer(
    productSchema,
    defaultValues
  );
  return (
    <div className="mt-20 p-8">
      <Toaster />
      <Paper className="p-8">
        <h1 className="text-gray-500 text-lg mb-8">Novo produto</h1>
        <ProductForm onSubmit={handleCreateProduct} onCancel={handleCancel} />
      </Paper>
    </div>
  );
};

export default CreateProduct;
