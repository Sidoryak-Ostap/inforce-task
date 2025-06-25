import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

export const StyledProductsList = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(5),
  paddingBottom: theme.spacing(5),
}));
export const StyledProductsListHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: theme.spacing(4),
}));

export const StyledAddButton = styled(Button)(() => ({}));
