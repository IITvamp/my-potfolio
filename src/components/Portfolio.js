import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import project1 from "../images/portfolioPic.png";
import project2 from "../images/Project2.png";
import project3 from "../images/Project3.png";


const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
    height: "100%",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "3rem auto",
  },
}));

const projects = [
  {
    name: "My Portfolio",
    description: `My portfolio website with a simple ui revealing my projects, work experience, and a lot more about me. Also integrated a contact form where you can write your message for me and can send it to me on whatsapp by simply pressing the send button on contact form itself.`,
    image: project1,
    codeURL: "https://github.com/IITvamp/my-potfolio",
    LiveDemoURL: "https://my-potfolio-tau.vercel.app/",
  },
  {
    name: "NewsShorts",
    description: `NewsShorts, Inshorts clone with features like user login and signup using JWT, nested comment system, create, delete, update posts functionality, create and update comments functionality, user Profile page, loading page and many more to come.`,
    image: project2,
    codeURL: "https://github.com/IITvamp/my-social-media-app",
    LiveDemoURL: "https://newsshorts.vercel.app/",
  },
  {
    name: "Scrum Board",
    description: `A simple scrum board application where you can categorise your tasks in various different lists according to your needs. you can perform crud(create, read, update and delete) operation on lists as well as the tasks inside the lists.`,
    image: project3,
    codeURL: "https://github.com/IITvamp/scrum-board-frontend",
    LiveDemoURL: "https://scrum-board-frontend.vercel.app/",
  },
];

const Portfolio = () => {

  const classes = useStyles();

  const openURL = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <Box component="div" className={classes.mainContainer}>
      <Grid container justify="center">
        {projects.map((project, i) => (
          <Grid item xs={12} sm={8} md={4} key={i}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 1"
                  height="140"
                  image={project.image}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {project.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {project.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  onClick={() => openURL(project.codeURL)}
                >
                  Code
                </Button>
                <Button
                  size="small"
                  color="primary"
                  onClick={() => openURL(project.LiveDemoURL)}
                >
                  Live Demo
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Portfolio;
