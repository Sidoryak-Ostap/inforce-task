import { useParams } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";
import {
  Container,
  Typography,
  CardContent,
  Grid,
  Paper,
  Divider,
  Chip,
  IconButton,
} from "@mui/material";
import {
  StyledBackButtonBox,
  StyledCard,
  StyledImage,
  StyledLink,
  StyledProductDetailsBox,
} from "./styled";

import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { products } = useAppSelector((state) => state.products);
  const product = products.find((item) => item.id === id);

  if (!product) {
    return (
      <Container maxWidth="md">
        <Typography variant="h5" color="error" mt={4}>
          Product not found.
        </Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="md">
      <StyledBackButtonBox>
        <StyledLink to="/products">
          <IconButton color="primary">
            <KeyboardBackspaceIcon />
          </IconButton>{" "}
          Back to products
        </StyledLink>
      </StyledBackButtonBox>

      <StyledProductDetailsBox>
        <StyledCard>
          <StyledImage src={product.imageUrl} alt={product.name} />

          <CardContent sx={{ flex: 1 }}>
            <Typography variant="h4" gutterBottom>
              {product.name}
            </Typography>

            <Divider sx={{ my: 2 }} />

            <Grid container spacing={2}>
              <Grid size={6}>
                <Paper sx={{ p: 2, textAlign: "center" }} elevation={2}>
                  <Typography variant="subtitle1">Weight</Typography>
                  <Typography variant="h6">{product.weight}</Typography>
                </Paper>
              </Grid>

              <Grid size={6}>
                <Paper sx={{ p: 2, textAlign: "center" }} elevation={2}>
                  <Typography variant="subtitle1">Count</Typography>
                  <Typography variant="h6">{product.count}</Typography>
                </Paper>
              </Grid>

              <Grid size={12}>
                <Paper sx={{ p: 2, textAlign: "center" }} elevation={2}>
                  <Typography variant="subtitle1">Size</Typography>
                  <Typography variant="h6">
                    {product.size.width} x {product.size.height}
                  </Typography>
                </Paper>
              </Grid>
            </Grid>

            <Divider sx={{ my: 2 }} />

            <Typography variant="subtitle2">Comments:</Typography>

            {product.comments.length > 0 ? (
              product.comments.map((commentId) => {
                return (
                  <Chip
                    key={commentId}
                    label={`Comment ID: ${commentId}`}
                    sx={{ mr: 1, mb: 1 }}
                    color="primary"
                    variant="outlined"
                  />
                );
              })
            ) : (
              <Typography variant="body2">No comments yet.</Typography>
            )}
          </CardContent>
        </StyledCard>
      </StyledProductDetailsBox>
    </Container>
  );
};

export default ProductDetails;
