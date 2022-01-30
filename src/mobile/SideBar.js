import {
  Badge,
  Container,
  Divider,
  SwipeableDrawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
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
    minWidth: "70%",
    // minWidth: "23%",
    height: "100%",
    background: "#222",
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
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
export default function _SideBar({ handleOpen, setHandleOpen }) {
  const [open, setOpen] = React.useState(false);
  const location = useLocation();

  const handleClose = () => {
    setOpen(false);
    setHandleOpen(false);
  };

  React.useEffect(() => {
    if (handleOpen) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [handleOpen]);

  const classes = useStyles();
  const CustomList = ({ to, primary, icon, badge }) => (
    <ListItem
      button
      component={Link}
      to={to}
      selected={to === location.pathname}
      className={classes.li}
      classes={{ root: classes.root, selected: classes.selected }}
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
      <SwipeableDrawer
        onClose={handleClose}
        elevation={4}
        open={open}
        classes={{
          paper: classes.sideBar,
        }}
        variant="temporary"
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
          />
          <CustomList
            to="/product"
            icon={<CardGiftcardOutlined />}
            primary="Products"
            badge={12}
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
            badge={20}
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
      </SwipeableDrawer>
    </React.Fragment>
  );
}
