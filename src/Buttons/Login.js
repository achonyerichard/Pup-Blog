import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  btn: {
    backgroundColor: "#111212",
    color: "#E4EDED",
    borderRadius:"15%",
   
  },
}));

const Login = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <>
      {isAuthenticated && navigate("/home")}
      {!isAuthenticated && (
        <Button className={classes.btn} onClick={() => loginWithRedirect()} >Login</Button>
      )}
    </>
  );

  // !isAuthenticated &&(
  //   <Button
  //   onClick={()=>loginWithRedirect()}
  //   color="inherit" className={classes.btn}>
  //     Login
  //   </Button>

  //   )

  // )
};

export default Login;
