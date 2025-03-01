export interface Product {
  id?: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image?: string;
  rating?: {
    rate: number;
    count: number;
  };
}

export interface ProductFormUpdate {
  id?: number;
  title: string;
  price: number;
  description: string;
  image?: string;
}

export interface ProductContextType {
  products: Product[];
  deleteProduct: (id: number) => Promise<void>;
  updateProduct: (id: number, updateProduct: Product) => Promise<void>;
  fetchProducts: () => Promise<void>;
  addProduct: (product: Product) => Promise<void>;
}

export interface CategoriesContextValue {
  categories: string[];
  fetchProductCategories: () => Promise<void>;
}
