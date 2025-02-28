"use client";
import { ProductForm } from "@/components/ProductForm";
import { Paper } from "@mui/material";
import React from "react";
import { Toaster } from "react-hot-toast";

const CreateProduct = () => {
  return (
    <div className="mt-20 p-8">
      <Toaster />
      <Paper className="p-8">
        <h1 className="text-gray-500 text-lg mb-8">Novo produto</h1>
        <ProductForm />
      </Paper>
    </div>
  );
};

export default CreateProduct;
