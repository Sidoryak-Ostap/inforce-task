import { RouteObject, Navigate } from "react-router-dom";
import App from "../App";
import ProductsList from "../pages/ProductsList/ProductsList";
import ProductDetails from "../pages/ProductDetails/ProductDetails";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to="/products" replace />,
      },
      {
        path: "products",
        element: <ProductsList />,
      },
      {
        path: "products/:id",
        element: <ProductDetails />,
      },
    ],
  },
];
