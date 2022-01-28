import React from "react";
import { Fab, makeStyles, Paper } from "@material-ui/core";
import _GraphContainer from "../GraphContainer";
import AddIcon from "@material-ui/icons/Add";
import _ProductTab from "./Tab";

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
}));
export default function _MainContainer() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <_ProductTab />
    </div>
  );
}
