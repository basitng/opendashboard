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
import { Link, useLocation } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    "&$selected": {
      background: indigo[600],
      width: "95%",
      borderTopRightRadius: "27rem",
      borderBottomRightRadius: "27rem",
      color: indigo[200],
    },
  },
  selected: {},
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
  li2: {},
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
}));

export default function _SideBar() {
  const classes = useStyles();
  const location = useLocation();
  const CustomList = ({ to, primary, icon, badge }) => (
    <ListItem
      button
      component={Link}
      to={to}
      selected={to === location.pathname}
      className={classes.li}
      classes={{ root: classes.root, selected: classes.selected }}
      // onClick={() => console.log("clicked")}
    >
      {badge ? (
        <ListItemIcon className={classes.icon}>
          <Badge badgeContent={badge} color="secondary">
            {icon}{" "}
          </Badge>
        </ListItemIcon>
      ) : (
        <ListItemIcon className={classes.icon}>{icon}</ListItemIcon>
      )}
      <ListItemText primary={primary} />
    </ListItem>
  );
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
          <CustomList to="/" icon={<DashboardOutlined />} primary="Dashboard" />

          <CustomList
            to="/order"
            icon={<ShoppingBasketOutlined />}
            primary="Orders"
          />
          <CustomList
            to="/sales"
            icon={<TrendingUpOutlined />}
            primary="Sales"
            badge={4}
          />
          <CustomList
            to="/product"
            icon={<CardGiftcardOutlined />}
            primary="Products"
            badge={20}
          />
          <CustomList
            to="/category"
            icon={<CategoryOutlined />}
            primary="Category"
          />

          <Divider className={classes.divider} />

          <CustomList
            to="/reviews"
            icon={<MessageOutlined />}
            primary="Reviews"
            badge={40}
          />
          <CustomList
            to="/profile"
            icon={<PersonAddOutlined />}
            primary="Account"
          />
          <CustomList
            to="/notification"
            icon={<NotificationsOutlined />}
            primary="Notifications"
            badge={99}
          />
          <CustomList
            to="/settings"
            icon={<SettingsOutlined />}
            primary="Settings"
          />

          <CustomList
            to="/"
            icon={<PersonAddDisabledOutlined />}
            primary="Logout"
          />
        </List>
      </Drawer>
    </React.Fragment>
  );
}
