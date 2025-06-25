import { createAsyncThunk } from "@reduxjs/toolkit";
import { Product } from "../../types/product";
import apiClient from "../../api/axiosConfig";
import { API_ROUTES } from "../../constants/apiRoutes";

export const fetchProducts = createAsyncThunk<Product[]>(
  "products/fetchProducts",
  async () => {
    const response = await apiClient.get(API_ROUTES.PRODUCTS.GET);
    return response.data;
  }
);

export const deleteProduct = createAsyncThunk<string, string>(
  "products/deleteProduct",
  async (productId) => {
    await apiClient.delete(API_ROUTES.PRODUCTS.DELETE(productId));
    return productId;
  }
);

export const createProduct = createAsyncThunk<Product, Product>(
  "products/createProduct",
  async (productData) => {
    const response = await apiClient.post(
      API_ROUTES.PRODUCTS.CREATE,
      productData
    );
    return response.data;
  }
);
