import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import TableProducts from "@/components/TableProducts";
import { ProductProvider } from "@/context/ProductContext";
import { Product } from "@/interfaces/product";
import { useRouter } from "next/navigation";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

const renderWithProvider = (ui: React.ReactElement) => {
  return render(<ProductProvider>{ui}</ProductProvider>);
};

describe("TableProducts", () => {
  it("should render CircularProgress when products are empty", () => {
    renderWithProvider(<TableProducts products={[]} />);

    expect(screen.getByRole("progressbar")).toBeInTheDocument();
  });

  it("should render products in the table", async () => {
    const mockProducts: Product[] = [
      {
        id: 11,
        title:
          "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
        price: 109,
        category: "electronics",
        description:
          "3D NAND flash are applied to deliver high transfer spe...",
        rating: { rate: 4.5, count: 10 },
      },
    ];

    renderWithProvider(<TableProducts products={mockProducts} />);

    await waitFor(() => {
      expect(
        screen.getByText(
          "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5"
        )
      ).toBeInTheDocument();
    });
  });
});
