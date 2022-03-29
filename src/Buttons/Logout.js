import React from "react";
import { makeStyles } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { useAuth0 } from "@auth0/auth0-react";

const useStyles = makeStyles((theme) => ({
  btn: {
    // backgroundColor: "#EBF0EB",
    // color: "#000000",
    borderRadius: "15%",
  },
}));

const Logout = () => {
  const { logout, isAuthenticated } = useAuth0();
  const classes = useStyles();

  return (
    isAuthenticated && (
      <Button onClick={() => logout()} color="secondary" className={classes.btn}>
        Logout
      </Button>
    )
  );
};

export default Logout;
