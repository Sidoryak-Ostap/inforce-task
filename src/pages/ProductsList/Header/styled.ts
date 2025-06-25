import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const StyledFlexBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: theme.spacing(4),
}));
