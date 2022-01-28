import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Button, Container, IconButton } from "@material-ui/core";
import { green, grey, red } from "@material-ui/core/colors";
import { VisibilityOutlined } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
    background: "#121212",
    color: grey[200],
  },
  container: {
    marginTop: theme.spacing(15),
  },
  row: {
    "&:hover": {
      background: grey[700],
    },
  },
}));

export default function _Tables() {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <TableContainer component={Paper} elevation={10}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow style={{ background: green[900] }}>
              <TableCell>Month</TableCell>
              <TableCell>Total products</TableCell>
              <TableCell>Total Delivery</TableCell>
              <TableCell>Total Sells</TableCell>
              <TableCell>Loss</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow className={classes.row}>
              <TableCell component={"th"} scope="row">
                January
              </TableCell>
              <TableCell>100</TableCell>
              <TableCell>100</TableCell>
              <TableCell style={{ color: green[300] }}>$12,000</TableCell>
              <TableCell style={{ color: red[300] }}>-$10</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
