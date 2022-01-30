import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Hidden,
  IconButton,
  Link,
  makeStyles,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import {
  MenuOutlined,
  NotificationsOutlined,
  SettingsOutlined,
} from "@material-ui/icons";
import React from "react";
import { useLocation } from "react-router-dom";
import _SideBar from "../mobile/SideBar";

const useStyles = makeStyles((theme) => ({
  appBar: {
    width: `calc(100% - 23% )`,
    // background: "#212121",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  avatar: {
    backgroundColor: grey[600],
  },
  icon: {
    fontSize: theme.spacing(4),
    marginRight: theme.spacing(1),
  },
  MenuItem: {
    color: "#fff",
  },
}));

export default function _AppBar() {
  const location = useLocation();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);

  const handleSideDrawerOpen = () => {
    setOpen(true);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const classes = useStyles();

  return (
    <div>
      <Hidden mdUp>
        <_SideBar handleOpen={open} setHandleOpen={setOpen} />
      </Hidden>
      <AppBar elevation={4} className={classes.appBar}>
        <Toolbar>
          <Typography variant="h5" color={"textSecondary"}>
            {location.pathname}
          </Typography>
          <Typography style={{ flex: 1 }} />
          <Hidden mdUp>
            <IconButton size="small" onClick={handleSideDrawerOpen}>
              <MenuOutlined />
            </IconButton>
            <IconButton size="small" onClick={handleClick}>
              <Avatar className={classes.avatar} />
            </IconButton>
          </Hidden>
          <Hidden xsDown>
            <Box component={Link} to="/notification">
              <IconButton className={classes.icon}>
                <Badge badgeContent={1} color="secondary">
                  <NotificationsOutlined />
                </Badge>
              </IconButton>
            </Box>
            <IconButton className={classes.icon}>
              <SettingsOutlined />
            </IconButton>
          </Hidden>
        </Toolbar>
      </AppBar>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        className={classes.Menu}
      >
        <MenuItem component={Link} to="/profile" className={classes.MenuItem}>
          Profile
        </MenuItem>
        <MenuItem component={Link} to="/" className={classes.MenuItem}>
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
}
