import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import { useState } from 'react';





const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    position: "relative",
    marginTop: "2rem",
    backgroundColor: "primary",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: "#0A0A0A",
  },
  badge: {
    color: 'primary',
    position: "absolute",
    marginLeft: "2rem",
    top: 40,
    right: "5rem",
    height: "200px",
    width: "200px",
    padding: "20rem 10rem",
  },
  
  text: {
    color: "#EDF2F2",
  },
  like: {
    color: "#D13079",
  },
}));

const BlogCard = (props) => {
  const { id, name, breed, about, link,} = props.blog;
  const [like, setLike] = useState(false);

  const onLike = (e) => {
    setLike(!like);
    console.log("why");
  };
 
  console.log(props);

  const classes = useStyles();
  

  return (
    <Container  key={id}>
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              {name.charAt(0).toUpperCase()}
            </Avatar>
          }
          value="bold"
          title={name}
          
        />
        <CardMedia className={classes.media} image={link} title="Paella dish" />
        <Badge
          className={classes.badge}
          color="primary"
          badgeContent={breed}
          showZero
        ></Badge>

        <CardContent type="div" className="card_content">
          <Typography variant="body2" className={classes.text} component="p">
            {about.slice(0, 150) + "..."}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton
            onClick={() => onLike()}
            aria-label="add to favorites"
            className={like ? classes.like : null}
          >
            <FavoriteIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Container>
  );
};

export default BlogCard;
