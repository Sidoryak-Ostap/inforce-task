import { Box, Card } from "@mui/material";
import { lighten, styled } from "@mui/material/styles";

export const StyledCard = styled(Card)(() => ({
  width: "100%",
  position: "relative",
  cursor: "pointer",

  "&:hover .delete-icon-box": {
    opacity: 1,
  },
}));

export const StyledProductImage = styled("img")(() => ({
  width: "100%",
  objectFit: "cover",
  height: "200px",
}));

export const StyledChipBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(1),
  flexWrap: "wrap",
  marginTop: theme.spacing(1),
  fontWeight: 700,
}));

export const StyledDeleteIconBox = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 10,
  right: 10,
  cursor: "pointer",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "50%",
  backgroundColor: theme.palette.common.white,
  padding: theme.spacing(0.5),
  transition: "0.4s ease",
  opacity: 0,

  "&:hover": {
    backgroundColor: lighten(theme.palette.error.main, 0.7),
  },
}));
