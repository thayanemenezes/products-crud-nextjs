import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { ProductProvider } from "@/context/ProductContext";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import React from "react";
import Home from "@/app/page";

jest.mock("@mui/material", () => ({
  ...jest.requireActual("@mui/material"),
  Button: jest.fn(({ children, onClick }) => (
    <button onClick={onClick}>{children}</button>
  )),
  Menu: jest.fn(({ children, open }) => (
    <div>{open && <div>{children}</div>}</div>
  )),
  MenuItem: jest.fn(({ children, onClick }) => (
    <div onClick={onClick}>{children}</div>
  )),
  CircularProgress: jest.fn(() => <div>Loading...</div>),
}));

jest.mock("@/components/Dropdown", () => ({
  __esModule: true,
  default: ({
    onFilterChange,
  }: {
    onFilterChange: (option: string) => void;
  }) => (
    <div>
      <button onClick={() => onFilterChange("priceAsc")}>Menor Preço</button>
      <button onClick={() => onFilterChange("priceDesc")}>Maior Preço</button>
    </div>
  ),
}));

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

const theme = createTheme();

describe("Home Component", () => {
  test("Sorts products by lowest price when 'Lowest Price' option is clicked", async () => {
    render(
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ProductProvider>
          <Home />
        </ProductProvider>
      </ThemeProvider>
    );

    fireEvent.click(screen.getByText("Menor Preço"));

    await waitFor(() => {
      const rows = screen.getAllByRole("row");
      expect(rows[1]).toHaveTextContent("Opna Women's Short Sleeve Moisture");
      expect(rows[2]).toHaveTextContent(
        "MBJ Women's Solid Short Sleeve Boat Neck V"
      );
    });
  });

  test("Sorts products by highest price when 'Highest Price' option is clicked", async () => {
    render(
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ProductProvider>
          <Home />
        </ProductProvider>
      </ThemeProvider>
    );

    fireEvent.click(screen.getByText("Maior Preço"));

    await waitFor(() => {
      const rows = screen.getAllByRole("row");
      expect(rows[1]).toHaveTextContent(
        "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED "
      );
      expect(rows[2]).toHaveTextContent(
        "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet"
      );
    });
  });
});
