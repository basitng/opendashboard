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
  const classes = useStyles();
  return (
    <div>
      <Container>
        <List className={classes.List}>
          <ListItem button>
            <ListItemIcon>
              <LocationCityOutlined />
            </ListItemIcon>
            <ListItemText primary="Billing Address" />
            <ListItemSecondaryAction>
              <ArrowForwardIos className={classes.icon} />
            </ListItemSecondaryAction>
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemIcon>
              <LocalShippingOutlined />
            </ListItemIcon>
            <ListItemText primary="Set shipping prices" />
            <ListItemSecondaryAction>
              <ArrowForwardIos className={classes.icon} />
            </ListItemSecondaryAction>
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemIcon>
              <CallOutlined />
            </ListItemIcon>
            <ListItemText primary="Add Call Order Number" />
            <ListItemSecondaryAction>
              <ArrowForwardIos className={classes.icon} />
            </ListItemSecondaryAction>
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemIcon>
              <SecurityOutlined />
            </ListItemIcon>
            <ListItemText primary="Change Password" />
            <ListItemSecondaryAction>
              <ArrowForwardIos className={classes.icon} />
            </ListItemSecondaryAction>
          </ListItem>
          <Divider />
          <ListItem button>
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
