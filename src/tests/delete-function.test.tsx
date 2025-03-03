import React from "react";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";

import { useProduct } from "@/context/ProductContext";
import { Product } from "@/interfaces/product";
import DeleteButton from "@/components/UI/DeleteButton";

jest.mock("@/context/ProductContext", () => ({
  useProduct: jest.fn(),
}));

const mockProduct: Product = {
  id: 1,
  category: "electronics",
  title: "Produto Teste",
  description: "Descrição do produto teste",
  price: 100,
};

describe("delete button action", () => {
  it("should open the dialog when delete button clicked", () => {
    const mockDeleteProduct = jest.fn();
    (useProduct as jest.Mock).mockReturnValue({
      deleteProduct: mockDeleteProduct,
    });

    render(<DeleteButton product={mockProduct} />);

    const deleteButton = screen.getByRole("button", { name: /delete/i });
    fireEvent.click(deleteButton);

    const dialogTitle = screen.getByText(/Confirmar Exclusão/i);
    expect(dialogTitle).toBeInTheDocument();
  });

  it("should call delete function when confirming", () => {
    const mockDeleteProduct = jest.fn();
    (useProduct as jest.Mock).mockReturnValue({
      deleteProduct: mockDeleteProduct,
    });

    render(<DeleteButton product={mockProduct} />);

    const deleteButton = screen.getByRole("button", { name: /delete/i });
    fireEvent.click(deleteButton);

    const confirmButton = screen.getByRole("button", { name: /Excluir/i });
    fireEvent.click(confirmButton);

    expect(mockDeleteProduct).toHaveBeenCalledWith(mockProduct.id);
  });

  it("should close the dialog when Cancelar is clicked", async () => {
    const mockDeleteProduct = jest.fn();
    (useProduct as jest.Mock).mockReturnValue({
      deleteProduct: mockDeleteProduct,
    });

    render(<DeleteButton product={mockProduct} />);

    const deleteButton = screen.getByRole("button", { name: /delete/i });
    fireEvent.click(deleteButton);

    const dialogTitle = screen.getByText(/Confirmar Exclusão/i);
    expect(dialogTitle).toBeInTheDocument();

    const cancelButton = screen.getByRole("button", { name: /Cancelar/i });
    fireEvent.click(cancelButton);

    await waitFor(() => {
      expect(
        screen.queryByText(/Tem certeza que deseja excluir o produto/i)
      ).not.toBeInTheDocument();
    });
  });
});
