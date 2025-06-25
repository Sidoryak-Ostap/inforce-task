import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

type Props = {
  isDialogOpen: boolean;
  handleCloseDialog: () => void;
  handleConfirmAction: () => void;
  title: string;
  content?: string;
  actionBtnName: string;
  loading?: boolean;
};

const ConfirmActionDialog = ({
  title,
  content = "",
  handleConfirmAction,
  isDialogOpen,
  handleCloseDialog,
  actionBtnName,
  loading,
}: Props) => {
  return (
    <Dialog onClose={handleCloseDialog} open={isDialogOpen}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{content}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCloseDialog} color="secondary">
          Cancel
        </Button>
        <Button onClick={handleConfirmAction} color="error" disabled={loading}>
          {actionBtnName}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmActionDialog;
