import React from "react";
import type { Metadata } from "next";
import "../styles/globals.css";
import NavBar from "@/components/NavBar";
import { ProductProvider } from "@/context/ProductContext";
import { CategoryProvider } from "@/context/CategoryContext";

export const metadata: Metadata = {
  title: "CRUD de Produtos",
  description: "Criar, ler, atualizar e deletar produtos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <NavBar />
        <ProductProvider>
          <CategoryProvider>
            <main>{children}</main>
          </CategoryProvider>
        </ProductProvider>
      </body>
    </html>
  );
}
