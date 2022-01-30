import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import { Button, IconButton, Paper } from "@material-ui/core";
import { AddOutlined, PhotoCamera } from "@material-ui/icons";
import { grey } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  TextField: {
    color: grey[500],
  },
  formControl: {
    color: grey[500],
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  input: {
    display: "none",
  },
  IconButton: {
    background: "#212121",
    width: 40,
    height: 40,
    borderRadius: 8,
  },
  form: {
    width: "60%",
    [theme.breakpoints.down("xs")]: {
      width: "95%",
    },
  },
}));

export default function _CreateProduct() {
  const classes = useStyles();
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <form className={classes.form}>
        <Grid container justifyContent="center" spacing={2} alignItems="center">
          <Grid item xs={12} md={12}>
            <TextField
              variant="outlined"
              className={classes.TextField}
              type={"text"}
              fullWidth
              label="Category Name"
              color="secondary"
            />
          </Grid>

          <Grid item xs={12} md={12}>
            <Button variant="contained" color="secondary" size="large">
              Add{" "}
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}
