"use client";
import { useProductStore } from "@/context/ProductContext";
import { Product } from "@/interfaces/product";
import { Paper, Typography } from "@mui/material";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const VisualizeProduct = () => {
  const { id } = useParams();
  const { products } = useProductStore();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (products.length > 0) {
      const foundProduct = products.find((p) => p.id === Number(id));
      if (foundProduct) {
        setProduct(foundProduct);
      } else {
        setError("Product not found");
      }
      setLoading(false);
    }
  }, [products, id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div className="mt-20 p-8">
      <div>Voltar</div>
      <Paper className="p-8 flex items-center gap-16">
        <img src={product.image} alt={product.title} className="max-w-xs" />
        <div className="flex flex-col">
          <Typography variant="h4" gutterBottom>
            {product.title}
          </Typography>
          <Typography variant="body1" mb={8} gutterBottom>
            <strong>Category:</strong> {product.category}
          </Typography>
          <Typography variant="body1" gutterBottom>
            {product.description}
          </Typography>
          <Typography variant="h4" mt={6} gutterBottom>
            ${product.price}
          </Typography>
        </div>
      </Paper>
    </div>
  );
};

export default VisualizeProduct;
