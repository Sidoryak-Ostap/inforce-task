import { Box, Card } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

export const StyledProductDetailsBox = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
}));

export const StyledCard = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  boxShadow: theme.shadows[3],
  [theme.breakpoints.up("sm")]: {
    flexDirection: "row",
  },
}));

export const StyledImage = styled("img")(({ theme }) => ({
  height: "300px",
  objectFit: "cover",
  width: "100%",

  [theme.breakpoints.up("sm")]: {
    width: "300px",
  },
}));

export const StyledBackButtonBox = styled(Box)(() => ({
  position: "absolute",
  top: 20,
  left: 20,
  display: "flex",
  alignItems: "center",
}));

export const StyledLink = styled(Link)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: theme.palette.primary.main,
}));
