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
              color="secondary"
              className={classes.TextField}
              type={"text"}
              fullWidth
              label="Product Name"
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <TextField
              variant="outlined"
              color="secondary"
              className={classes.TextField}
              type="number"
              fullWidth
              label="Product Price"
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <FormControl
              variant="outlined"
              color="secondary"
              className={classes.TextField}
              fullWidth
              className={classes.formControl}
            >
              <InputLabel id="demo-simple-select-outlined-label">
                Category
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={age}
                onChange={handleChange}
                label="Age"
              >
                <MenuItem value="">
                  <em>Others</em>
                </MenuItem>
                <MenuItem value={10}>Mobile Phone</MenuItem>
                <MenuItem value={20}>Laptops</MenuItem>
                <MenuItem value={30}>Charges</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={12}>
            <FormControl
              variant="outlined"
              color="secondary"
              className={classes.TextField}
              fullWidth
              className={classes.formControl}
            >
              <InputLabel id="demo-simple-select-outlined-label">
                Choose Discount
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={age}
                onChange={handleChange}
                label="Age"
              >
                <MenuItem value="">
                  <em>No discount</em>
                </MenuItem>
                <MenuItem value={10}>2%</MenuItem>
                <MenuItem value={10}>5%</MenuItem>
                <MenuItem value={10}>6%</MenuItem>
                <MenuItem value={10}>7%</MenuItem>
                <MenuItem value={10}>8%</MenuItem>
                <MenuItem value={10}>9%</MenuItem>
                <MenuItem value={10}>10%</MenuItem>
                <MenuItem value={20}>20%</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={12}>
            <input
              accept="image/*"
              className={classes.input}
              id="icon-button-file"
              type="file"
            />
            <label htmlFor="icon-button-file">
              <IconButton
                component={Paper}
                color="secondary"
                aria-label="upload picture"
                component="span"
                className={classes.IconButton}
              >
                <AddOutlined />
              </IconButton>
            </label>
          </Grid>
          <Grid item xs={12} md={12}>
            <Button variant="contained" color="secondary" size="large">
              Add Product
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}
