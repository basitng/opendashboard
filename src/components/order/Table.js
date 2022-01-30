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
import { green, grey, purple, red } from "@material-ui/core/colors";
import { CheckOutlined, VisibilityOutlined } from "@material-ui/icons";

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
  const handleClick = () => {
    console.log("hi");
  };
  return (
    <Container className={classes.container}>
      <TableContainer component={Paper} elevation={10}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow style={{ background: purple[400] }}>
              <TableCell>Name</TableCell>
              <TableCell>Product</TableCell>
              <TableCell>Delivery date</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Area</TableCell>
              <TableCell>Payment</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>View</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow className={classes.row}>
              <TableCell component={"th"} scope="row">
                Ajaga Abdul Basit
              </TableCell>
              <TableCell>Gionee</TableCell>
              <TableCell>12-10-2021</TableCell>
              <TableCell>07062602401</TableCell>
              <TableCell>99 adeola thanni street</TableCell>
              <TableCell>Ikorodu</TableCell>
              <TableCell style={{ color: green[300] }}>Paid</TableCell>
              <TableCell onClick={handleClick}>
                <Button
                  variant="contained"
                  color="secondary"
                  startIcon={<CheckOutlined />}
                >
                  Yes
                </Button>
              </TableCell>
              <TableCell>
                <IconButton>
                  <VisibilityOutlined color="secondary" />
                </IconButton>
              </TableCell>
            </TableRow>
            <TableRow className={classes.row}>
              <TableCell component={"th"} scope="row">
                Bilal Adeyemi
              </TableCell>
              <TableCell>Iphone 12(pro max)</TableCell>
              <TableCell>12-4-2021</TableCell>
              <TableCell>09062602401</TableCell>
              <TableCell>99 adeola thanni street</TableCell>
              <TableCell>Festac</TableCell>
              <TableCell style={{ color: green[300] }}>Paid</TableCell>
              <TableCell onClick={handleClick}>
                <Button
                  variant="contained"
                  color="secondary"
                  startIcon={<CheckOutlined />}
                >
                  Yes
                </Button>
              </TableCell>
              <TableCell>
                <IconButton>
                  <VisibilityOutlined color="secondary" />
                </IconButton>
              </TableCell>
            </TableRow>
            <TableRow className={classes.row}>
              <TableCell component={"th"} scope="row">
                Bashua muhammed
              </TableCell>
              <TableCell>Samsung</TableCell>
              <TableCell>12-6-2021</TableCell>
              <TableCell>07062602401</TableCell>
              <TableCell>13 lekki street</TableCell>
              <TableCell>Ikorodu</TableCell>
              <TableCell style={{ color: red[300] }}>Pending</TableCell>
              <TableCell onClick={handleClick}>
                <Button
                  variant="contained"
                  color="secondary"
                  startIcon={<CheckOutlined />}
                >
                  Yes
                </Button>
              </TableCell>
              <TableCell>
                <IconButton>
                  <VisibilityOutlined color="secondary" />
                </IconButton>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
