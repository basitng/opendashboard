import {
  Card,
  CardContent,
  Container,
  Grid,
  IconButton,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import { cyan, green, grey, indigo, orange } from "@material-ui/core/colors";
import {
  CardGiftcardOutlined,
  PeopleAltOutlined,
  ShoppingBasketOutlined,
  TrendingUpOutlined,
} from "@material-ui/icons";
import React from "react";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: "5rem",
  },
  content: {
    background: grey[700],
  },
  iconWrapper: {
    width: 35,
    height: 35,
    background: green[600],
    borderRadius: 10,
  },
  iconWrapper2: {
    width: 35,
    height: 35,
    background: orange[600],
    borderRadius: 10,
  },
  iconWrapper3: {
    width: 35,
    height: 35,
    background: indigo[600],
    borderRadius: 10,
  },
  iconWrapper4: {
    width: 35,
    height: 35,
    background: cyan[600],
    borderRadius: 10,
  },
  p: {
    paddingLeft: 10,
  },
  h4: {
    fontSize: 20,
  },
}));
export default function _Topper() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={6} md={3}>
            <Card>
              <CardContent className={classes.content}>
                <IconButton component={Paper} className={classes.iconWrapper}>
                  <PeopleAltOutlined />
                </IconButton>
                <Typography className={classes.p} variant="p">
                  Total Users
                </Typography>
                <Typography className={classes.h4} align="center" variant="h4">
                  1000
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6} md={3}>
            <Card>
              <CardContent className={classes.content}>
                <IconButton component={Paper} className={classes.iconWrapper2}>
                  <ShoppingBasketOutlined />
                </IconButton>
                <Typography className={classes.p} variant="p">
                  Total Orders
                </Typography>
                <Typography className={classes.h4} align="center" variant="h4">
                  1900
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6} md={3}>
            <Card>
              <CardContent className={classes.content}>
                <IconButton component={Paper} className={classes.iconWrapper3}>
                  <TrendingUpOutlined />
                </IconButton>
                <Typography className={classes.p} variant="p">
                  Total Sales
                </Typography>
                <Typography className={classes.h4} align="center" variant="h4">
                  $1000.000
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6} md={3}>
            <Card>
              <CardContent className={classes.content}>
                <IconButton component={Paper} className={classes.iconWrapper4}>
                  <CardGiftcardOutlined />
                </IconButton>
                <Typography className={classes.p} variant="p">
                  Total Products
                </Typography>
                <Typography className={classes.h4} align="center" variant="h4">
                  3000
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
