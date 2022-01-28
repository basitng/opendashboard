import {
  Badge,
  Container,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  withStyles,
} from "@material-ui/core";
import { grey, indigo, orange } from "@material-ui/core/colors";
import {
  CardGiftcardOutlined,
  CategoryOutlined,
  DashboardOutlined,
  MessageOutlined,
  NotificationsOutlined,
  PersonAddDisabledOutlined,
  PersonAddOutlined,
  SettingsOutlined,
  ShoppingBasketOutlined,
  TrendingUpOutlined,
} from "@material-ui/icons";
import React from "react";
import { Link, NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  sideBar: {
    minWidth: "23%",
    height: "100%",
    background: "#222",
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  ul: {
    lineHeight: "2rem",
  },
  li: {
    marginBottom: theme.spacing(1),
    color: "#555",
    "&:hover": {
      background: indigo[400],
      color: indigo[200],
      width: "95%",
      borderTopRightRadius: "27rem",
      borderBottomRightRadius: "27rem",
    },
  },
  li2: {
    background: indigo[600],
    width: "95%",
    borderTopRightRadius: "27rem",
    borderBottomRightRadius: "27rem",
    color: indigo[200],
  },
  divider: {
    margin: "10px 0px",
  },
  iconActive: {
    color: indigo[200],
  },
  icon: {
    color: grey[500],
    "&:hover": {
      color: indigo[200],
    },
  },
  active: {
    background: indigo[600],
    width: "95%",
    borderTopRightRadius: "27rem",
    borderBottomRightRadius: "27rem",
    color: indigo[200],
  },
}));
export default function _SideBar() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Drawer
        elevation={4}
        container={<Container />}
        open={true}
        classes={{
          paper: classes.sideBar,
        }}
        variant="permanent"
      >
        <List className={classes.ul}>
          <ListItem
            className={classes.li}
            button
            to="/"
            component={NavLink}
            activeClassName={classes.active}
          >
            <ListItemIcon className={classes.iconActive}>
              <DashboardOutlined />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem
            className={classes.li}
            button
            to="/order"
            component={NavLink}
            activeClassName={classes.active}
          >
            <ListItemIcon className={classes.icon}>
              <Badge badgeContent={"20"}>
                <ShoppingBasketOutlined />
              </Badge>
            </ListItemIcon>
            <ListItemText primary="Orders" />
          </ListItem>
          <ListItem
            className={classes.li}
            button
            to="/sales"
            component={NavLink}
            activeClassName={classes.active}
          >
            <ListItemIcon className={classes.icon}>
              <Badge badgeContent={"10"}>
                <TrendingUpOutlined />
              </Badge>
            </ListItemIcon>
            <ListItemText primary="Sales" />
          </ListItem>
          <ListItem
            className={classes.li}
            button
            to="/product"
            component={NavLink}
            activeClassName={classes.active}
          >
            <ListItemIcon className={classes.icon}>
              <CardGiftcardOutlined />
            </ListItemIcon>
            <ListItemText primary="Products" />
          </ListItem>
          <ListItem
            className={classes.li}
            button
            to="/category"
            component={NavLink}
            activeClassName={classes.active}
          >
            <ListItemIcon className={classes.icon}>
              <CategoryOutlined />
            </ListItemIcon>
            <ListItemText primary="Category" />
          </ListItem>

          <Divider className={classes.divider} />

          <ListItem
            className={classes.li}
            button
            to="/reviews"
            component={NavLink}
            activeClassName={classes.active}
          >
            <ListItemIcon className={classes.icon}>
              <Badge color="secondary" badgeContent={"99+"}>
                <MessageOutlined />
              </Badge>
            </ListItemIcon>
            <ListItemText primary="Reviews" />
          </ListItem>
          <ListItem
            className={classes.li}
            button
            to="/profile"
            component={NavLink}
            activeClassName={classes.active}
          >
            <ListItemIcon className={classes.icon}>
              <PersonAddOutlined />
            </ListItemIcon>
            <ListItemText primary="Account" />
          </ListItem>
          <ListItem
            className={classes.li}
            button
            to="/notification"
            component={NavLink}
            activeClassName={classes.active}
          >
            <ListItemIcon className={classes.icon}>
              <Badge color="secondary" badgeContent={"99+"}>
                <NotificationsOutlined />
              </Badge>
            </ListItemIcon>
            <ListItemText primary="Notifications" />
          </ListItem>
          <ListItem
            className={classes.li}
            button
            to="/"
            component={NavLink}
            activeClassName={classes.active}
          >
            <ListItemIcon className={classes.icon}>
              <SettingsOutlined />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>

          <ListItem
            className={classes.li}
            button
            to="/"
            component={NavLink}
            activeClassName={classes.active}
          >
            <ListItemIcon className={classes.icon}>
              <PersonAddDisabledOutlined />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem>
        </List>
      </Drawer>
    </React.Fragment>
  );
}
