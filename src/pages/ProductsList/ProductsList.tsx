import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchProducts } from "../../store/products/productsThunks";
import Loader from "../../components/Loader";
import { Box, Grid } from "@mui/material";
import { StyledProductsList } from "./styled";
import Container from "@mui/material/Container";
import ProductCard from "./ProductCard";
import Header from "./Header";
import { SortOrder } from "../../types/sortOrder";
import { sortProducts } from "./Header/helper";

const ProductsList = () => {
  const [nameSort, setNameSort] = useState<SortOrder>("asc");
  const [countSort, setCountSort] = useState<SortOrder>("asc");

  const handleChangeNameSort = (value: SortOrder) => setNameSort(value);
  const handleChangeCountSort = (value: SortOrder) => setCountSort(value);

  const dispatch = useAppDispatch();
  const { products, loading, error } = useAppSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <Loader />;
  if (error) return <Box>An error occurred: {error}</Box>;

  const sortedProducts =
    nameSort || countSort
      ? sortProducts(products, nameSort, countSort)
      : products;

  return (
    <StyledProductsList>
      <Container maxWidth="lg">
        <Header
          nameSort={nameSort}
          setNameSort={handleChangeNameSort}
          countSort={countSort}
          setCountSort={handleChangeCountSort}
          productsLength={products.length}
        />
        <Grid container spacing={2}>
          {sortedProducts.map((product) => (
            <Grid
              sx={{ display: "flex" }}
              key={product.id}
              size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
            >
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>

        {!loading && !error && products.length === 0 && (
          <Box>There are no products available</Box>
        )}
      </Container>
    </StyledProductsList>
  );
};

export default ProductsList;
