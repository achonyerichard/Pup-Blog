import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import PetsOutlinedIcon from "@material-ui/icons/PetsOutlined";
import { Box } from "@material-ui/core";
import { Link } from "react-router-dom";
import Logout from "../Buttons/Logout";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {},
  menuItem: {
    marginRight: theme.spacing(3),
    textDecoration: "none",
    color: "inherit",
  },
  box: {
    display: "flex",
    flexDirection: "row",
    flexGrow: 1,
    alignItems: "center",
  },
}));

const Nav = () => {
  const classes = useStyles();

  return (
    <>
      <AppBar position="static" color="primary" elevation={0}>
        <Toolbar>
          <Box component="span" className={classes.box}>
            <Typography variant="h6" className={classes.title}>
              Pup-Blog
            </Typography>
            <PetsOutlinedIcon className={classes.icon} />
          </Box>

          <Link className={classes.menuItem} color="inherit" to="/home">
            Home
          </Link>
          <Link className={classes.menuItem} color="inherit" to="/blog">
            Blog
          </Link>
          <Logout />
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Nav;
