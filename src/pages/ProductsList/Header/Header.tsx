import { StyledFlexBox } from "./styled";
import { Box, Button, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import AddProductDialog from "./AddProductDialog";
import SortDropdown from "../../../components/SortDropdown";
import { SortOrder } from "../../../types/sortOrder";

type Props = {
  productsLength: number;
  nameSort: SortOrder;
  setNameSort: (value: SortOrder) => void;
  countSort: SortOrder;
  setCountSort: (value: SortOrder) => void;
};

const Header = ({
  productsLength,
  nameSort,
  setNameSort,
  countSort,
  setCountSort,
}: Props) => {
  const [isAddProductDialogOpen, setIsAddProductDialogOpen] = useState(false);

  return (
    <Box>
      <StyledFlexBox>
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

        <Button
          onClick={() => setIsAddProductDialogOpen(true)}
          variant="contained"
          startIcon={<AddIcon />}
        >
          Add product
        </Button>

        <AddProductDialog
          isDialogOpen={isAddProductDialogOpen}
          handleClose={() => setIsAddProductDialogOpen(false)}
        />
      </StyledFlexBox>

      <StyledFlexBox sx={{ gap: 2, justifyContent: "flex-start" }}>
        <SortDropdown
          label="Sort by name"
          value={nameSort}
          onChange={setNameSort}
          options={[
            { value: "none", label: "None" },
            { value: "asc", label: "Ascending ↑" },
            { value: "desc", label: "Descending ↓" },
          ]}
        />

        <SortDropdown
          label="Sort by count"
          value={countSort}
          onChange={setCountSort}
          options={[
            { value: "none", label: "None" },
            { value: "asc", label: "Ascending ↑" },
            { value: "desc", label: "Descending ↓" },
          ]}
        />
      </StyledFlexBox>
    </Box>
  );
};

export default Header;
