"use client";
import { CircularProgress, Paper } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import { Product } from "@/interfaces/product";
import { columns } from "./Columns";

interface TableProductsProps {
  products: Product[];
  sortOption?: "priceAsc" | "priceDesc" | null;
}

export default function TableProducts({
  products,
  sortOption,
}: TableProductsProps) {
  if (!products || products.length === 0) {
    return (
      <div className="text-gray-600 flex items-center justify-center mt-14">
        <CircularProgress />
      </div>
    );
  }

  const sortedProducts = React.useMemo(() => {
    if (sortOption === "priceAsc") {
      return [...products].sort((a, b) => (a.price || 0) - (b.price || 0));
    } else if (sortOption === "priceDesc") {
      return [...products].sort((a, b) => (b.price || 0) - (a.price || 0));
    }
    return products;
  }, [products, sortOption]);

  return (
    <Paper sx={{ width: "100%" }}>
      <DataGrid
        rows={sortedProducts}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 6 },
          },
        }}
        pageSizeOptions={[6, 10]}
        disableRowSelectionOnClick
        sx={{ border: 0 }}
      />
    </Paper>
  );
}
