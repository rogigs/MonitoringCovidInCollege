import * as React from "react";
import { styled } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import {
  ErrorOutlineSharp,
  CheckCircleOutlineOutlined,
  WarningOutlined,
} from "@material-ui/icons";
import DESIGN_SYSTEM from "~/css/designSystem";
import ButtonMUI from "../Button";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: DESIGN_SYSTEM.spaces.space,
  },
  "& .MuiDialogActions-root": {
    padding: DESIGN_SYSTEM.spaces.space,
  },
  "& .center": {
    display: "flex",
    justifyContent: "center",
  },
  "& .icon": {
    paddingTop: DESIGN_SYSTEM.spaces.space,
  },
}));

const icons = {
  danger: <ErrorOutlineSharp sx={{ color: "red" }} fontSize="large" />,
  success: (
    <CheckCircleOutlineOutlined sx={{ color: "green" }} fontSize="large" />
  ),
  warning: <WarningOutlined sx={{ color: "yellow" }} fontSize="large" />,
};

const DialogMUI = ({
  open,
  onClose,
  children,
  buttonName,
  title,
  icon,
  ...props
}) => (
  <div>
    <BootstrapDialog
      open={open}
      onClose={onClose}
      aria-labelledby="customized-dialog-title"
      {...props}
    >
      {icon && <div className="center icon">{icons[icon]}</div>}
      <DialogTitle className="center">{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        <ButtonMUI autoFocus type="submit" onClick={onClose}>
          {buttonName}
        </ButtonMUI>
      </DialogActions>
    </BootstrapDialog>
  </div>
);

export default DialogMUI;
