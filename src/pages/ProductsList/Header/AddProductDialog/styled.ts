import { Dialog } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledCreateLessonDialog = styled(Dialog)(() => ({
  "& .MuiDialog-paper": {
    maxWidth: "400px",
    width: "100%",
  },
}));

export const StyledForm = styled("form")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
  padding: theme.spacing(1, 0),
}));
