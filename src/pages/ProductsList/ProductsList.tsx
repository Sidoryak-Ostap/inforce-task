import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchProducts } from "../../store/products/productsThunks";
import Loader from "../../components/Loader";
import { Box, Grid } from "@mui/material";

import {
  StyledAddButton,
  StyledProductsList,
  StyledProductsListHeader,
} from "./styled";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import AddIcon from "@mui/icons-material/Add";
import ProductCard from "./ProductCard";

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
        <StyledProductsListHeader>
          <Box>
            <Typography sx={{ fontSize: "2rem", fontWeight: 700 }}>
              Products
            </Typography>
            <Typography
              sx={{
                color: (theme) => theme.palette.grey[400],
                fontSize: "1.2rem",
              }}
            >
              Products in catalog {products.length}
            </Typography>
          </Box>

          <StyledAddButton variant="contained" startIcon={<AddIcon />}>
            Add product
          </StyledAddButton>
        </StyledProductsListHeader>

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
          <Box>Немає продуктів</Box>
        )}
      </Container>
    </StyledProductsList>
  );
};

export default ProductsList;
