import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { cyan, grey, indigo, red } from "@material-ui/core/colors";
import { DeleteOutline, EditOutlined } from "@material-ui/icons";
import { Container, IconButton } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
    background: "#121212",
    color: grey[200],
    [theme.breakpoints.down("xs")]: {
      minWidth: "100%",
    },
  },
  container: {
    marginTop: theme.spacing(15),
  },
}));

export default function _Tables() {
  const classes = useStyles();
  const handleClick = () => {
    console.log("hi");
  };
  return (
    <Container className={classes.container}>
      <TableContainer component={Paper} elevation={10}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow style={{ background: indigo[900] }}>
              <TableCell>ID</TableCell>
              <TableCell>Category Name</TableCell>
              <TableCell>Edit Category</TableCell>
              <TableCell>Delete Category</TableCell>
              <TableCell>Added on</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow className={classes.row}>
              <TableCell component={"th"} scope="row">
                4
              </TableCell>
              <TableCell>Phones</TableCell>

              <TableCell>
                <IconButton>
                  <EditOutlined color="primary" />
                </IconButton>
              </TableCell>
              <TableCell>
                <IconButton>
                  <DeleteOutline color="secondary" />
                </IconButton>
              </TableCell>
              <TableCell>12-09-2021</TableCell>
            </TableRow>
            <TableRow className={classes.row}>
              <TableCell component={"th"} scope="row">
                4
              </TableCell>
              <TableCell>Phones</TableCell>

              <TableCell>
                <IconButton>
                  <EditOutlined color="primary" />
                </IconButton>
              </TableCell>
              <TableCell>
                <IconButton>
                  <DeleteOutline color="secondary" />
                </IconButton>
              </TableCell>
              <TableCell>12-09-2021</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
