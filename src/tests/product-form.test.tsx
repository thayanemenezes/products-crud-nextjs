import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import ProductForm from "@/components/ProductForm";
import { useCategories } from "@/hooks/useCategories";
import { ProductProvider } from "@/context/ProductContext";
import { useRouter } from "next/navigation";

const renderWithProvider = (ui: React.ReactElement) => {
  return render(<ProductProvider>{ui}</ProductProvider>);
};

jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

jest.mock("@/hooks/useCategories", () => ({
  useCategories: jest.fn(() => ({
    categories: [
      "electronics",
      "jewelery",
      "men's clothing",
      "women's clothing",
    ],
  })),
}));

jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

describe("product form category select", () => {
  it("should render the category select correctly", () => {
    renderWithProvider(<ProductForm onSubmit={jest.fn()} />);

    expect(screen.getByLabelText("Categoria")).toBeInTheDocument();
  });

  it("should allow selecting a category", async () => {
    renderWithProvider(<ProductForm onSubmit={jest.fn()} />);

    const select = screen.getByLabelText("Categoria");

    fireEvent.mouseDown(select);
    const option = screen.getByText("electronics");
    fireEvent.click(option);

    await waitFor(() => {
      expect(select).toHaveTextContent("electronics");
    });
  });

  it("should display an error if no data in inputs", async () => {
    renderWithProvider(<ProductForm onSubmit={jest.fn()} />);

    const submitButton = screen.getByRole("button", { name: /Enviar/i });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText("Título é obrigatório")).toBeInTheDocument();
    });
  });
});
