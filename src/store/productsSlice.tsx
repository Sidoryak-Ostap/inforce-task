import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../types/product";

type ProductsState = {
  products: Product[];
};
const initialState: ProductsState = {
  products: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct(state, action: PayloadAction<Product>) {
      state.products.push(action.payload);
    },
    removeProduct(state, action: PayloadAction<string>) {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },
  },
});

export const { addProduct, removeProduct } = productsSlice.actions;
export default productsSlice.reducer;
