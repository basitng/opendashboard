import React from "react";
import { Fab, makeStyles, Paper } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { Link } from "react-router-dom";
import _List from "./List";

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
}));
export default function _MainContainer() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <_List />
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
