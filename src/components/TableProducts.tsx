"use client";
import { CircularProgress, Paper } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import { Product } from "@/interfaces/product";
import { columns } from "./Columns";

export default function TableProducts({ products }: { products: Product[] }) {
  if (!products || products.length === 0) {
    return (
      <div className="text-gray-600 flex items-center justify-center mt-14">
        <CircularProgress />
      </div>
    );
  }

  const sortedProducts = [...products].sort((a, b) => {
    const ratingA = a.rating?.rate || 0;
    const ratingB = b.rating?.rate || 0;
    return ratingB - ratingA;
  });

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
