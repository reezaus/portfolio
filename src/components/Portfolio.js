import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography
} from '@material-ui/core';
import Navbar from './Navbar';
import project1 from '../images/las-cazuelas-logo.jpg';
import project2 from '../images/githubFinder.png';
import project3 from '../images/ContactKeeper.png';
import project4 from '../images/project4.png';

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  },
  mainContainer: {
    margin: '0',
    paddingTop: '5%',
    background: '#E5E5E5',
    height: '100vw',
    width: '100%',
    position: 'absolute'
  },
  cardContainer: {
    maxWidth: 345,
    margin: '5rem auto'
  }
}));

const Portfolio = () => {
  const classes = useStyles();

  return (
    <Box component="div" className={classes.mainContainer}>
      <Navbar page="Portfolio" />
      <Grid container justify="center">
        {/* Project 1 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project 1"
                height="140"
                image={project1}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Las Cazuelas Restaurant
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Full restaurant homepage with customized ordering
                  functionality and admin dashboard built with Nodemailer,
                  Express, React, and Bootstrap.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              {/* <Button size="small" color="primary">
                Preview
              </Button> */}
              <Button
                href="https://vast-inlet-20675.herokuapp.com/"
                size="small"
                color="primary"
              >
                Live Demo
              </Button>
            </CardActions>
          </Card>
        </Grid>
        {/* Project 2 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project 4"
                height="140"
                image={project4}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  CRWN Clothing
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Storefront for clothing brand built with react and redux,
                  custom styling, and backend authentication through Firebase,
                  with payment authentication handled with stripe API.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                href="https://crwn-apparelite.herokuapp.com/"
              >
                Live Demo
              </Button>
            </CardActions>
          </Card>
        </Grid>

        {/* Project 3 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project 3"
                height="140"
                image={project3}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Contact Keeper
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Simple CRUD contacts archiver build with MongoDB, Express,
                  React, Node and the React Context API.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              {/* <Button size="small" color="primary">
                Preview
              </Button> */}
              <Button
                size="small"
                color="primary"
                href="https://nameless-escarpment-65829.herokuapp.com/login"
              >
                Live Demo
              </Button>
            </CardActions>
          </Card>
        </Grid>
        {/* Project 4 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project 2"
                height="140"
                image={project2}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Github Finder
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Github user profile finder utilizing github public api built
                  with react.js
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              {/* <Button size="small" color="primary">
                Preview
              </Button> */}
              <Button
                size="small"
                color="primary"
                href="https://5ea165e0e8e85af9568e1fed--githubfinder20300.netlify.app/"
              >
                Live Demo
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Portfolio;
