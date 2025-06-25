import { Product } from "../../../types/product";
import { SortOrder } from "../../../types/sortOrder";

export const sortProducts = (
  products: Product[],
  nameSort: SortOrder,
  countSort: SortOrder
) => {
  const sortedProducts = [...products];

  if (nameSort !== "none") {
    sortedProducts.sort((a, b) =>
      nameSort === "asc"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)
    );
  }

  if (countSort !== "none") {
    sortedProducts.sort((a, b) =>
      countSort === "asc" ? a.count - b.count : b.count - a.count
    );
  }

  return sortedProducts;
};
