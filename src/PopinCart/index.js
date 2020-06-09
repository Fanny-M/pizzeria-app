import React from "react";
import {
  DialogContent,
  DialogContentText,
  DialogTitle,
  DialogActions,
  Button,
  Dialog,
} from "@material-ui/core";
import { bool } from "prop-types";
export default function PopinCart({ open }) {
  return (
    <Dialog
      open={open}
      //onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Passercommande</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Récapitulatif des pizzas en commande
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button color="primary"> Annuler</Button>
        <Button color="primary" autoFocus>
          Commander
        </Button>
      </DialogActions>
    </Dialog>
  );
}
PopinCart.prototype = {
  open: bool,
};
PopinCart.defaultProps = {
  open: false,
};
