import React from "react";
import { Fab, makeStyles, Paper } from "@material-ui/core";
import _GraphContainer from "../GraphContainer";
import AddIcon from "@material-ui/icons/Add";
import { Link } from "react-router-dom";
import _System from "./System";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "calc(100% - 23%)",
    marginLeft: "19rem",
    overflowX: "hidden",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      marginLeft: 0,
      marginTop: "3.5rem",
    },
  },

  extendedIcon: {
    position: "fixed",
    bottom: "5%",
    right: "3%",
    zIndex: 100,
  },
}));
export default function _MainContainer() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <_System />
      <Paper elevation={10}>
        <Fab
          component={Link}
          to="/product"
          color="secondary"
          className={classes.extendedIcon}
        >
          <AddIcon />
        </Fab>
      </Paper>
    </div>
  );
}
