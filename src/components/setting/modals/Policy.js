import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import { Grid, makeStyles, TextField } from "@material-ui/core";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

const useStyles = makeStyles((theme) => ({
  TextField: {},
  Dialog: {
    minWidth: "50%",
    [theme.breakpoints.down("xs")]: {
      minWidth: "90%",
    },
  },
}));

export default function _Policiy({ handleClick, setHandleClick }) {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  const handleClose = () => {
    setOpen(false);
    setHandleClick(false);
  };

  React.useEffect(() => {
    if (handleClick) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [handleClick]);

  const handleSubmit = () => {
    console.log("Submitted");
  };
  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
        classes={{ paper: classes.Dialog }}
      >
        <form onSubmit={handleSubmit}>
          <DialogTitle id="alert-dialog-slide-title">
            {"Add Terms and Policies"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                  <TextField
                    variant="filled"
                    label="Policy and Terms"
                    color="secondary"
                    type="text"
                    helperText="Make sure you have the right policies"
                    fullWidth
                    multiline
                  />
                </Grid>
              </Grid>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button variant="contained" color="secondary">
              Update
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
