import {
  Container,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import {
  ArrowForwardIos,
  CallOutlined,
  LocalShippingOutlined,
  LocationCityOutlined,
  PolicyOutlined,
  SecurityOutlined,
} from "@material-ui/icons";
import React from "react";
import _Billing from "./modals/Billing";
import _Order from "./modals/Order";
import _Password from "./modals/Password";
import _Policiy from "./modals/Policy";
import _Shipping from "./modals/Shipping";

const useStyles = makeStyles((theme) => ({
  List: {
    marginTop: theme.spacing(10),
    marginLeft: theme.spacing(5),
    [theme.breakpoints.down("xs")]: {
      marginLeft: theme.spacing(1),
    },
  },
  icon: {
    color: grey[400],
    fontSize: 20,
  },
}));
export default function _List() {
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const [open4, setOpen4] = React.useState(false);
  const [open5, setOpen5] = React.useState(false);

  const handleBillingOpen = () => setOpen(true);
  const handleShippingOpen = () => setOpen2(true);
  const handleOrderOpen = () => setOpen3(true);
  const handlePasswordOpen = () => setOpen4(true);
  const handlePolicyOpen = () => setOpen5(true);

  const classes = useStyles();
  return (
    <div>
      <_Billing handleClick={open} setHandleClick={setOpen} />
      <_Shipping handleClick={open2} setHandleClick={setOpen2} />
      <_Order handleClick={open3} setHandleClick={setOpen3} />
      <_Password handleClick={open4} setHandleClick={setOpen4} />
      <_Policiy handleClick={open5} setHandleClick={setOpen5} />
      <Container>
        <List className={classes.List}>
          <ListItem onClick={handleBillingOpen} button>
            <ListItemIcon>
              <LocationCityOutlined />
            </ListItemIcon>
            <ListItemText primary="Billing Address" />
            <ListItemSecondaryAction>
              <ArrowForwardIos className={classes.icon} />
            </ListItemSecondaryAction>
          </ListItem>
          <Divider />
          <ListItem button onClick={handleShippingOpen}>
            <ListItemIcon>
              <LocalShippingOutlined />
            </ListItemIcon>
            <ListItemText primary="Set shipping prices" />
            <ListItemSecondaryAction>
              <ArrowForwardIos className={classes.icon} />
            </ListItemSecondaryAction>
          </ListItem>
          <Divider />
          <ListItem button onClick={handleOrderOpen}>
            <ListItemIcon>
              <CallOutlined />
            </ListItemIcon>
            <ListItemText primary="Add Call Order Number" />
            <ListItemSecondaryAction>
              <ArrowForwardIos className={classes.icon} />
            </ListItemSecondaryAction>
          </ListItem>
          <Divider />
          <ListItem button onClick={handlePasswordOpen}>
            <ListItemIcon>
              <SecurityOutlined />
            </ListItemIcon>
            <ListItemText primary="Change Password" />
            <ListItemSecondaryAction>
              <ArrowForwardIos className={classes.icon} />
            </ListItemSecondaryAction>
          </ListItem>
          <Divider />
          <ListItem button onClick={handlePolicyOpen}>
            <ListItemIcon>
              <PolicyOutlined />
            </ListItemIcon>
            <ListItemText primary="Add Terms Policies" />
            <ListItemSecondaryAction>
              <ArrowForwardIos className={classes.icon} />
            </ListItemSecondaryAction>
          </ListItem>
          <Divider />
        </List>
      </Container>
    </div>
  );
}
