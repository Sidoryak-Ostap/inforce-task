import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchProducts } from "../../store/products/productsThunks";
import Loader from "../../components/Loader";
import { Box, Grid } from "@mui/material";

import { StyledProductsList } from "./styled";
import Container from "@mui/material/Container";
import ProductCard from "./ProductCard";
import Header from "./Header";

const ProductsList = () => {
  const dispatch = useAppDispatch();
  const { products, loading, error } = useAppSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <Loader />;
  if (error) return <Box>An error occurred: {error}</Box>;

  const sortedProductsByName = products.length
    ? [...products].sort((a, b) => a.name.localeCompare(b.name))
    : [];

  return (
    <StyledProductsList>
      <Container maxWidth="lg">
        <Header productsLength={products.length} />
        <Grid container spacing={2}>
          {sortedProductsByName.map((product) => (
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
