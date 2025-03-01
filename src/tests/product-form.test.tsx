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

jest.mock("@/hooks/useCategories", () => ({
  useCategories: () => ({
    categories: ["electronics", "jewelery", "men's clothing"],
  }),
}));

jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: jest.fn(),
    back: jest.fn(),
  }),
}));

jest.mock("@/services/productService", () => ({
  getProducts: jest.fn(() => Promise.resolve([])),
  createProduct: jest.fn(),
  deleteProductApi: jest.fn(),
  updateProductApi: jest.fn(),
}));

const renderWithProvider = (ui: React.ReactElement) => {
  return render(<ProductProvider>{ui}</ProductProvider>);
};

describe("create new product form", () => {
  it("should render form components correctly", () => {
    const onSubmit = jest.fn();

    const defaultValues = {
      title: "",
      price: 0,
      image: "",
      description: "",
      category: "electronics",
    };

    renderWithProvider(
      <ProductForm defaultValues={defaultValues} onSubmit={onSubmit} />
    );

    expect(screen.getByLabelText("Título")).toBeInTheDocument();
    expect(screen.getByLabelText("Preço")).toBeInTheDocument();
    expect(screen.getByLabelText("Descrição")).toBeInTheDocument();
    expect(screen.getByLabelText("Imagem")).toBeInTheDocument();
    expect(screen.getByDisplayValue("electronics")).toBeInTheDocument();
  });

  it("should call onSubmit when the form is submitted", async () => {
    const onSubmit = jest.fn();
    render(
      <ProductProvider>
        <ProductForm onSubmit={onSubmit} />
      </ProductProvider>
    );

    fireEvent.change(screen.getByLabelText("Título"), {
      target: { value: "Novo Produto" },
    });
    fireEvent.change(screen.getByLabelText("Preço"), {
      target: { value: "59.9" },
    });
    fireEvent.change(screen.getByLabelText("Imagem"), {
      target: { value: "imagem.jpg" },
    });
    fireEvent.change(screen.getByLabelText("Categoria"), {
      target: { value: "electronics" },
    });
    fireEvent.change(screen.getByLabelText("Descrição"), {
      target: { value: "Descrição do produto" },
    });

    await act(async () => {
      fireEvent.click(screen.getByText("Enviar"));
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
