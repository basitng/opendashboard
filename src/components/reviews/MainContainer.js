import React from "react";
import { Fab, Grid, makeStyles, Paper } from "@material-ui/core";
import _ReviewCard from "./Card";
import { AddOutlined } from "@material-ui/icons";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "calc(100% - 23%)",
    marginLeft: "19rem",
    overflowX: "hidden",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      marginLeft: 0,
    },
  },
  extendedIcon: {
    position: "fixed",
    bottom: "5%",
    right: "3%",
    zIndex: 100,
  },
  grid: {
    marginTop: "5rem",
    marginLeft: "1rem",
  },
}));
export default function _MainContainer() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Grid container className={classes.grid}>
        <Grid item xs={12} md={4}>
          <_ReviewCard />
        </Grid>
        <Grid item xs={12} md={4}>
          <_ReviewCard />
        </Grid>
        <Grid item xs={12} md={4}>
          <_ReviewCard />
        </Grid>
      </Grid>
      <Paper elevation={10}>
        <Fab
          component={Link}
          to="/product"
          color="secondary"
          className={classes.extendedIcon}
        >
          <AddOutlined />
        </Fab>
      </Paper>
    </div>
  );
}
