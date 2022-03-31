import React from "react";
import Layout from "../Layout";
import { useParams } from "react-router-dom";
import {Container,Typography} from'@material-ui/core';
import { Grid } from "@material-ui/core";


const Dogs = ({ blogsData }) => {
  const { id } = useParams();
  console.log(blogsData);
  const singleData = blogsData.filter((blog) => blog.id == id);
  console.log(singleData);
  return (
    <Layout>
      {singleData.map((single) => (
        <div key={id} className="dogbody">
          <Container>
            <Grid>
              <Grid item xs={12} md={6}>
                <div>
                  <img src={single.link} height='100px' width='100px' alt="" />
                </div>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h1">{single.name}</Typography>
                <Typography variant="h3">{single.breed}</Typography>
                <Typography variant="body1">{single.about}</Typography>
                <Typography variant="body1">{single.creator}</Typography>
              </Grid>
            </Grid>
          </Container>
        </div>
      ))}
    </Layout>
  );
};

export default Dogs;
