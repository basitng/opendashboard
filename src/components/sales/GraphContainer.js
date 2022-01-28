import React from "react";
import { Chart, ArcElement } from "chart.js";
import { makeStyles } from "@material-ui/core";
import { Doughnut, Bar, Line } from "react-chartjs-2";
import {
  brown,
  cyan,
  green,
  indigo,
  orange,
  pink,
  purple,
} from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",

    paddingTop: "6rem",
    display: "grid",
    placeContent: "center",
  },
  graph: {
    width: 800,
    [theme.breakpoints.down("xs")]: {
      width: 400,
    },
  },
}));
export default function _GraphContainer() {
  const classes = useStyles();
  const data = {
    labels: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    datasets: [
      {
        data: [12, 19, 3, 67, 3, 8, 65],
        label: "Sales Analysis",
        fontFamily: "andika",
        backgroundColor: [
          orange[200],
          indigo[200],
          green[400],
          pink[100],
          cyan[100],
          purple[200],
          brown[200],
        ],
        borderColor: "#fff",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <div className={classes.container}>
        <div className={classes.graph}>
          <Line data={data} />
        </div>
      </div>
    </div>
  );
}

Chart.register(ArcElement);
