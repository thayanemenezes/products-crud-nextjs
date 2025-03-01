import React from "react";
import {
  screen,
  render,
  fireEvent,
  act,
  waitFor,
} from "@testing-library/react";
import ProductForm from "@/components/ProductForm";
import { ProductProvider } from "@/context/ProductContext";
import { CategoryProvider } from "@/context/CategoryContext";
import { useRouter } from "next/navigation";

jest.mock("next/navigation", () => {
  return {
    __esModule: true,
    useRouter: () => ({
      push: jest.fn(),
    }),
  };
});

const renderWithProvider = (ui: React.ReactElement) => {
  return render(
    <ProductProvider>
      <CategoryProvider>{ui}</CategoryProvider>
    </ProductProvider>
  );
};

describe("create new product form", () => {
  it("should call onSubmit when the form is submitted", async () => {
    const onSubmit = jest.fn();
    renderWithProvider(<ProductForm onSubmit={onSubmit} />);
    fireEvent.change(screen.getByLabelText("Título"), {
      target: { value: "Novo Produto" },
    });
    fireEvent.change(screen.getByLabelText("Preço"), {
      target: { value: "59.9" },
    });
    fireEvent.change(screen.getByLabelText("Imagem"), {
      target: { value: "imagem.jpg" },
    });
    fireEvent.change(screen.getByLabelText("Descrição"), {
      target: { value: "Descrição do produto" },
    });

    const categorySelect = screen.getByLabelText("Categoria");
    fireEvent.mouseDown(categorySelect);

    const electronicsOption = await screen.findByText("electronics");
    fireEvent.click(electronicsOption);

    await act(async () => {
      fireEvent.submit(screen.getByRole("form"));
    });

    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledWith({
        title: "Novo Produto",
        price: 59.9,
        image: "imagem.jpg",
        category: "electronics",
        description: "Descrição do produto",
      });
    });
  });
});
