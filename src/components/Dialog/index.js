import * as React from "react";
import Button from "@material-ui/core/Button";
import { styled } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const DialogMUI = ({
  open,
  onClose,
  children,
  buttonName,
  title,
  ...props
}) => {
  return (
    <div>
      <BootstrapDialog
        open={open}
        onClose={onClose}
        aria-labelledby="customized-dialog-title"
        {...props}
      >
        <DialogTitle sx={{ m: 0, p: 2 }}>{title}</DialogTitle>
        <DialogContent dividers>{children}</DialogContent>
        <DialogActions>
          <Button autoFocus onClick={onClose}>
            {buttonName}
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
};

export default DialogMUI;
