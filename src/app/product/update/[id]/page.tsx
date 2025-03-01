"use client";
import { ProductForm } from "@/components/ProductForm";
import { Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { useParams, useRouter } from "next/navigation";
import { useProduct } from "@/context/ProductContext";
import { Product } from "@/interfaces/product";
import { useFormContainer } from "@/hooks/useFormContainer";
import { productSchema } from "@/schemas/productSchema";

const UpdateProduct = () => {
  const { id } = useParams();
  const router = useRouter();
  const { products } = useProduct();
  const [product, setProduct] = useState<Product | null>(null);
  const { handleUpdateProduct } = useFormContainer(
    productSchema,
    product,
    Number(id)
  );

  useEffect(() => {
    if (products.length > 0) {
      const foundProduct = products.find((p) => p.id === Number(id));
      if (foundProduct) {
        setProduct(foundProduct);
      }
    }
  }, [products, id]);

  const handleCancel = () => {
    router.push("/");
  };

  if (!product) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="mt-20 p-8">
      <Toaster />
      <Paper className="p-8">
        <h1 className="text-gray-500 text-lg mb-8">Editar Produto</h1>
        <ProductForm
          defaultValues={product}
          onSubmit={handleUpdateProduct}
          onCancel={handleCancel}
        />
      </Paper>
    </div>
  );
};

export default UpdateProduct;
