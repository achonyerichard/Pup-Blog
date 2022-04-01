import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";
import Layout from "../Layout";
const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: "block",
    border: "1px solid white",
    color: "secondary",
  },
  text: {
    marginTop: "2rem",
    margin: "auto",
    alignItems: "cgenter",
    textAlign: "center",
    color: "white",
  },
  form: {
    maxWidth: "60ch",
    // display: 'flex',
    margin: "auto",
    color: "secondary",
    border: " 5px white",
  },
  btn: {
    margin: "auto",
  },
});

const Blog = ({ blogData, setBlogData }) => {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [link, setLink] = useState("");
  const [details, setDetails] = useState("");
  const [creator, setCreator] = useState("");
  const [nameError, setNameError] = useState(false);
  const [breedError, setBreedError] = useState(false);
  const [linkError, setLinkError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);
  const [creatorError, setCreatorError] = useState(false);

  const navigate = useNavigate();

  const isFirstRenderRef = React.useRef(true);
  useEffect(() => {
    if (isFirstRenderRef.current) {
      isFirstRenderRef.current = false;
      return;
    }

    console.log(blogData);
  }, [blogData]);

  const clearFormInputs = () => {
    setName("");
    setBreed("");
    setLink("");
    setDetails("");
    setCreator("");
    // ...
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setNameError(false);
    setBreedError(false);
    setLinkError(false);
    setDetailsError(false);
    setCreatorError(false);

    if (!name) setNameError(true);
    if (!breed) setBreedError(true);
    if (!link) setLinkError(true);
    if (!details) setDetailsError(true);
    if (!creator) setCreatorError(true);

    if (name && breed && link && details && creator) {
      // console.log(name,breed,link,details,creator);
      const formData = {
        id: Date.now().toString(),
        name,
        breed,
        link,
        about: details,
        creator,
      };
      // console.log(formData);

      setBlogData([formData, ...blogData]);

      clearFormInputs();
      navigate("/home");
    }
  };

  return (
    <Layout>
      <Container className={classes.blog}>
        <Typography variant="h6" component="h2" className={classes.text}>
          Create a New Pup-Blog
        </Typography>
        <form
          noValidate
          autoComplete="off"
          action="submit"
          className={classes.form}
          onSubmit={handleSubmit}
          color="secondary"
        >
          <TextField
            label="Dog Name"
            InputLabelProps={{ className: "input_label" }}
            InputProps={{ className: "text" }}
            color="secondary"
            variant="filled"
            className={classes.field}
            fullWidth
            required
            onChange={(e) => setName(e.target.value)}
            error={nameError}
          />
          <TextField
            label="Breed"
            InputLabelProps={{ className: "input_label" }}
            InputProps={{ className: "text" }}
            color="secondary"
            variant="filled"
            className={classes.field}
            fullWidth
            required
            onChange={(e) => setBreed(e.target.value)}
            error={breedError}
          />
          <TextField
            label="Enter a Valid URL"
            InputLabelProps={{ className: "input_label" }}
            InputProps={{ className: "text" }}
            color="secondary"
            variant="filled"
            className={classes.field}
            fullWidth
            required
            onChange={(e) => setLink(e.target.value)}
            error={linkError}
          />
          <TextField
            label="Details"
            InputLabelProps={{ className: "input_label" }}
            InputProps={{ className: "text" }}
            color="secondary"
            variant="filled"
            className={classes.field}
            fullWidth
            required
            multiline
            rows={4}
            onChange={(e) => setDetails(e.target.value)}
            error={detailsError}
          />
          <TextField
            label="Creator"
            InputLabelProps={{ className: "input_label" }}
            InputProps={{ className: "text" }}
            color="secondary"
            variant="filled"
            className={classes.field}
            fullWidth
            required
            onChange={(e) => setCreator(e.target.value)}
            error={creatorError}
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            className="btn"
          >
            Submit
          </Button>
        </form>
      </Container>
    </Layout>
  );
};

export default Blog;
