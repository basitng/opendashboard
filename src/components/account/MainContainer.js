import React from "react";
import {
  Avatar,
  Box,
  Button,
  Container,
  Fab,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import {
  EmailOutlined,
  PersonOutline,
  PhoneOutlined,
  UpdateOutlined,
} from "@material-ui/icons";
import ErrorBoundary from "../../ErrorBoundary";
import _UpdateProfile from "./Modal";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "calc(100% - 23%)",
    marginLeft: "19rem",
    marginTop: theme.spacing(20),
    overflowX: "hidden",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      marginLeft: 0,
    },
  },
  extendedIcon: {
    position: "fixed",
    bottom: "5%",
    right: "3%",
    zIndex: 100,
  },
  box: {
    width: "60%",
    background: "#212121",
    padding: theme.spacing(2),
    [theme.breakpoints.down("xs")]: {
      width: "90%",
    },
  },
  avatar: {
    width: 200,
    height: 200,
  },
}));
export default function _MainContainer() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleModalOpen = () => setOpen(true);
  return (
    <div>
      <_UpdateProfile handleOpen={open} setHandleOpen={setOpen} />
      <Container className={classes.container}>
        <Grid conteiner>
          <Grid item xs={12} md={12}>
            <Box className={classes.box}>
              <Grid container>
                <Grid item={12} md={6}>
                  <div className={classes.avatarWrapper}>
                    <Avatar className={classes.avatar} />
                  </div>
                </Grid>
                <Grid item={12} md={6}>
                  <List className={classes.info}>
                    <ListItem button>
                      <ListItemIcon>
                        <PersonOutline />
                      </ListItemIcon>
                      <ListItemText primary="George Nwankwo" />
                    </ListItem>
                    <ListItem button>
                      <ListItemIcon>
                        <EmailOutlined />
                      </ListItemIcon>
                      <ListItemText primary="georgenwankwo@gmail.com" />
                    </ListItem>
                    <ListItem button>
                      <ListItemIcon>
                        <PhoneOutlined />
                      </ListItemIcon>
                      <ListItemText primary="08143164300" />
                    </ListItem>
                    <ListItem>
                      <ErrorBoundary>
                        <Fab
                          className={classes.btn}
                          variant="extended"
                          color="secondary"
                          onClick={handleModalOpen}
                        >
                          <UpdateOutlined />
                          Update Profile
                        </Fab>
                      </ErrorBoundary>
                    </ListItem>
                  </List>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
