import { StyledAddButton, StyledProductsListHeader } from "./styled";
import { Box, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import AddProductDialog from "./AddProductDialog";

type Props = {
  productsLength: number;
};

const Header = ({ productsLength }: Props) => {
  const [isAddProductDialogOpen, setIsAddProductDialogOpen] = useState(false);

  return (
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
          Products in catalog {productsLength}
        </Typography>
      </Box>

      <StyledAddButton
        onClick={() => setIsAddProductDialogOpen(true)}
        variant="contained"
        startIcon={<AddIcon />}
      >
        Add product
      </StyledAddButton>

      <AddProductDialog
        isDialogOpen={isAddProductDialogOpen}
        handleClose={() => setIsAddProductDialogOpen(false)}
      />
    </StyledProductsListHeader>
  );
};

export default Header;
