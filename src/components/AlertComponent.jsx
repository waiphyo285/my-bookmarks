import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertComponent(props) {
  const { open, handleClose } = props;

  return (
    <div>
      <Dialog
        open={open || false}
        keepMounted
        TransitionComponent={Transition}
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Would you do this?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            This action is currently restricted because it is not allowed.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button size="small" variant="contained" onClick={handleClose}>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
