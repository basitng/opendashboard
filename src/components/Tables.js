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
import { grey } from "@material-ui/core/colors";
import { DeleteOutline, EditOutlined } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
    background: grey[600],
  },
  container: {
    marginTop: theme.spacing(5),
  },
}));

export default function _Tables() {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <TableContainer component={Paper} elevation={10}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Product name</TableCell>
              <TableCell>Created</TableCell>
              <TableCell>Edit</TableCell>
              <TableCell>Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell component={"th"} scope="row">
                123
              </TableCell>
              <TableCell>Gionee</TableCell>
              <TableCell>12-10-2021</TableCell>
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
            </TableRow>
            <TableRow>
              <TableCell component={"th"} scope="row">
                123
              </TableCell>
              <TableCell>Gionee</TableCell>
              <TableCell>12-10-2021</TableCell>
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
            </TableRow>
            <TableRow>
              <TableCell component={"th"} scope="row">
                123
              </TableCell>
              <TableCell>Gionee</TableCell>
              <TableCell>12-10-2021</TableCell>
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
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
