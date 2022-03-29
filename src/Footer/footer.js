import React from 'react'
import { Container,Grid,Typography } from '@material-ui/core';
import { Box } from '@material-ui/core';
import PetsOutlinedIcon from "@material-ui/icons/PetsOutlined";
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  footer1: {
    flexGrow: 1,
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

const Footer = () => {
    const classes =useStyles();
    return (
      <>
        <footer>
          <Container>
            <Grid container direction="row">
              <Grid item className={classes.footer1}>
                <Box component="span" className={classes.box}>
                  <Typography variant="h6" className={classes.title}>
                    Pup-Blog
                  </Typography>
                  <PetsOutlinedIcon className={classes.icon} />
                </Box>
              </Grid>
              <Grid item justifyContent="flex-end">
                <Typography>@2022 Copyright</Typography>
              </Grid>
            </Grid>
          </Container>
        </footer>
      </>
    );
}

export default Footer
