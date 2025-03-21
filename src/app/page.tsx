"use client";
import React from "react";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import DropdownMenu from "@/components/Dropdown";
import TableProducts from "@/components/TableProducts";
import { Add } from "@mui/icons-material";
import { useProduct } from "@/context/ProductContext";
import { useFilter } from "@/hooks/useFilter";

export default function Home() {
  const router = useRouter();
  const { products, fetchProducts } = useProduct();
  const { handleSortChange, sortOption } = useFilter();

  useEffect(() => {
    if (products.length === 0) {
      fetchProducts();
    }
  }, []);

  const handleButtonClick = () => {
    router.push("/product/create");
  };

  return (
    <div className="h-full mt-20">
      <div className="p-8 flex flex-col">
        <div className="flex justify-end items-center gap-4 mb-5">
          <DropdownMenu onFilterChange={handleSortChange} />
          <Button
            className="bg-green-600 text-gray-50 my-5 w-44"
            onClick={handleButtonClick}
            endIcon={<Add />}
          >
            Novo Produto
          </Button>
        </div>
        <TableProducts products={products} sortOption={sortOption} />
      </div>
      <div className="text-gray-600 text-center text-[12px] absolute right-0 left-0 bottom-3">
        Desenvolvido com 🩵 por Thayane Menezes
      </div>
    </div>
  );
}
