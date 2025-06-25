import CircularProgress from "@mui/material/CircularProgress";
import { StyledLoader } from "./styled";

export default function Loader() {
  return (
    <StyledLoader>
      <CircularProgress />
    </StyledLoader>
  );
}
