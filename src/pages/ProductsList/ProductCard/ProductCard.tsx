import { Product } from "../../../types/product";
import {
  CardContent,
  Typography,
  Chip,
  Button,
  IconButton,
} from "@mui/material";
import {
  StyledCard,
  StyledChipBox,
  StyledDeleteIconBox,
  StyledProductImage,
} from "./styled";

import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import ConfirmActionDialog from "../../../components/ConfirmActionDialog";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { deleteProduct } from "../../../store/products/productsThunks";
type Props = {
  product: Product;
};

const ProductCard = ({ product }: Props) => {
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState<boolean>(false);
  const { name, imageUrl, count, weight, id } = product;

  const dispatch = useAppDispatch();
  const { loading } = useAppSelector((state) => state.products);

  const handleDeleteClick = () => setIsDeleteDialogOpen(true);
  const handleCloseDeleteDialog = () => setIsDeleteDialogOpen(false);

  const handleConfirmDelete = () => {
    dispatch(deleteProduct(id));
    handleCloseDeleteDialog();
  };

  return (
    <StyledCard>
      <StyledDeleteIconBox className="delete-icon-box">
        <IconButton onClick={handleDeleteClick} size="small" color="error">
          <DeleteIcon />
        </IconButton>
      </StyledDeleteIconBox>

      <StyledProductImage src={imageUrl} alt={name} />

      <CardContent>
        <Typography variant="h6" gutterBottom>
          {name}
        </Typography>

        <StyledChipBox>
          <Chip
            label={`In stock: ${count}`}
            color={count > 0 ? "info" : "default"}
          />
          <Chip label={`Weight: ${weight}`} />
        </StyledChipBox>

        <Button
          sx={{ fontWeight: 700, width: "100%", mt: 3 }}
          variant="contained"
        >
          View details
        </Button>
      </CardContent>

      <ConfirmActionDialog
        isDialogOpen={isDeleteDialogOpen}
        handleCloseDialog={handleCloseDeleteDialog}
        handleConfirmAction={handleConfirmDelete}
        title="Confirm Deletion"
        content="Are you sure you want to delete this product?"
        actionBtnName="Delete"
        loading={loading}
      />
    </StyledCard>
  );
};

export default ProductCard;
