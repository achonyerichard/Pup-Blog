import React, { useState, useCallback } from "react";
import Grid from "@material-ui/core/Grid";
import Login from "../Buttons/Login";
import "./Landing.css";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";
import { Container } from "@material-ui/core";
import Gallery from "react-photo-gallery-react17";
import Carousel, { Modal, ModalGateway } from "react-images";
import {photos} from '../photos';
import AppBar from "@material-ui/core/AppBar";
import PetsOutlinedIcon from "@material-ui/icons/PetsOutlined";
import { Box } from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";

const useStyles = makeStyles((theme) => ({
  welcome: {
    fontSize: "2rem",
    color: "white",
    marginTop: "3rem",
    marginBottom: "1rem",
    "@media (min-width:480px)": {
      fontSize: "5.7rem",
      marginTop: "3rem",
    },
    // [welcome.breakpoints.up("md")]: {
    //   fontSize: "2.4rem",
    // },
  },
  text: {
    color: "white",
    fontWeight: "300",
    marginBottom: "0.5rem",
  },
  grid_img: {
    marginTop: "3rem",
  },
  img: {
    width: "100%",
    margin: "auto",
    marginTop: "2rem",
  },
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
  main_grid: {
    margin: "auto",
  },
  footer1:{
    flexGrow:1,
  }
}));

const Landing = () => {
  const classes = useStyles();
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };
  return (
    <div className="page">
      <>
        <AppBar position="static" color="primary" elevation={0}>
          <Toolbar>
            <Box component="span" className={classes.box}>
              <Typography variant="h6" className={classes.title}>
                Pup-Blog
              </Typography>
              <PetsOutlinedIcon className={classes.icon} />
            </Box>
            <Login />
          </Toolbar>
        </AppBar>

        <Container>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={12} className={classes.main_grid}>
              <Typography className={classes.welcome} variant="h1">
                Welcome to Pup-Blog.
              </Typography>
              <Typography className={classes.text} variant="body1">
                Create a mini-blog about your favorite mutt and share your
                experiences with other dog lovers.
              </Typography>
              <Login />
            </Grid>
            <Grid>
              <Grid item xs={12} md={12} className={classes.img}>
                <Gallery photos={photos} onClick={openLightbox} />
                <ModalGateway>
                  {viewerIsOpen ? (
                    <Modal onClose={closeLightbox}>
                      <Carousel
                        currentIndex={currentImage}
                        views={photos.map((x) => ({
                          ...x,
                          srcset: x.srcSet,
                          caption: x.title,
                        }))}
                      />
                    </Modal>
                  ) : null}
                </ModalGateway>
              </Grid>
            </Grid>
          </Grid>
        </Container>
        <footer className="footer">
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
              <Grid item >
                <Typography>@2022 Copyright</Typography>
              </Grid>
            </Grid>
          </Container>
        </footer>
      </>
    </div>
  );
};

export default Landing;
