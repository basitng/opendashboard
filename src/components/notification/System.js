import { Button, Grid, IconButton, makeStyles } from "@material-ui/core";
import { green } from "@material-ui/core/colors";
import { CloseOutlined } from "@material-ui/icons";
import { Alert } from "@material-ui/lab";
import React from "react";

export default function _System() {
  const useStyles = makeStyles((theme) => ({
    container: {
      margin: "6rem 2rem",
      //   display: "grid",
      //   placeContent: "center",
    },
    alert: {
      width: "90%",
      background: green[900],
    },
  }));
  const classes = useStyles();
  return (
    <div>
      <Grid container spacing={1} className={classes.container}>
        <Grid item xs={12} md={12}>
          <Alert
            className={classes.alert}
            action={
              <IconButton color="inherit" size="small">
                <CloseOutlined />
              </IconButton>
            }
          >
            This is a success alert — check it out!
          </Alert>
        </Grid>
        <Grid item xs={12} md={12}>
          <Alert
            className={classes.alert}
            action={
              <IconButton color="inherit" size="small">
                <CloseOutlined />
              </IconButton>
            }
          >
            This is a success alert — check it out!
          </Alert>
        </Grid>
      </Grid>
    </div>
  );
}
