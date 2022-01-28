import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import {
  Fab,
  Grid,
  IconButton,
  makeStyles,
  Paper,
  TextField,
} from "@material-ui/core";
import {} from "@material-ui/styles";
import { grey } from "@material-ui/core/colors";
import { AddOutlined } from "@material-ui/icons";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="top" ref={ref} {...props} />;
});

const useStyles = makeStyles((theme) => ({
  TextField: {
    color: grey[300],
  },
  Dialog: {
    background: "#212121",
  },
  input: {
    display: "none",
  },
  IconButton: {
    background: "#212121",
    width: 40,
    height: 40,
    borderRadius: 8,
  },
}));
export default function _UpdateProfile({ handleOpen, setHandleOpen }) {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
    setHandleOpen(false);
  };
  React.useEffect(() => {
    if (handleOpen) {
      setOpen(true);
    } else {
      setOpen(false);
      setHandleOpen(false);
    }
  });
  const classes = useStyles();
  return (
    <div>
      {/* <Button variant="filled" color="primary" onClick={handleClickOpen}>
        Slide in alert dialog
      </Button> */}
      <Dialog
        classes={classes.Dialog}
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle style={{ color: "#fff" }} id="alert-dialog-slide-title">
          {"Update Profile"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <Grid container spacing={2}>
              <Grid item xs={12} md={12}>
                <TextField
                  variant="filled"
                  fullWidth
                  className={classes.TextField}
                  color="secondary"
                  label="Username"
                  type="text"
                />
              </Grid>
              <Grid item xs={12} md={12}>
                <TextField
                  variant="filled"
                  fullWidth
                  className={classes.TextField}
                  color="secondary"
                  label="Email address"
                  type="email"
                />
              </Grid>
              <Grid item xs={12} md={12}>
                <TextField
                  variant="filled"
                  fullWidth
                  className={classes.TextField}
                  color="secondary"
                  label="Phone number"
                  type="number"
                />
              </Grid>
              <Grid item xs={12} md={12}>
                <TextField
                  variant="filled"
                  fullWidth
                  className={classes.TextField}
                  color="secondary"
                  label="Old password"
                  type="password"
                />
              </Grid>
              <Grid item xs={12} md={12}>
                <TextField
                  variant="filled"
                  fullWidth
                  className={classes.TextField}
                  color="secondary"
                  label="New Password"
                  type="password"
                />
              </Grid>
              <Grid item xs={12} md={12}>
                <input
                  accept="image/*"
                  className={classes.input}
                  id="icon-button-file"
                  type="file"
                />
                <label htmlFor="icon-button-file">
                  <IconButton
                    component={Paper}
                    color="secondary"
                    aria-label="upload picture"
                    component="span"
                    className={classes.IconButton}
                  >
                    <AddOutlined />
                  </IconButton>
                </label>
              </Grid>
              <Grid item xs={12} md={12}>
                <Fab variant="extended" color="secondary">
                  Update Profile
                </Fab>
              </Grid>
            </Grid>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {/* <Button onClick={handleClose} color="primary">
            Disagree
          </Button>
          <Button onClick={handleClose} color="primary">
            Agree
          </Button> */}
        </DialogActions>
      </Dialog>
    </div>
  );
}
