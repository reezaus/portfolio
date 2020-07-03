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
  Typography,
} from '@material-ui/core';
import Navbar from './Navbar';
import project1 from '../images/imageSearch.png';
import project2 from '../images/githubFinder.png';
import project3 from '../images/ContactKeeper.png';
import project4 from '../images/project4.png';

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  mainContainer: {
    margin: '0',
    paddingTop: '3%',
    background: '#E5E5E5',
    height: '100vh',
    width: '100%',
    position: 'absolute',
  },
  cardContainer: {
    maxWidth: 345,
    margin: '2rem auto 0rem auto',
  },
}));

const Portfolio = () => {
  const classes = useStyles();

  return (
    <Box component="div" className={classes.mainContainer}>
      <Navbar page="Projects" />
      <Grid container justify="center">
        {/* Project 1 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer} style={{ marginTop: '4rem', marginBottom: '-2rem'}}>
            <CardActionArea href="https://crwn-apparelite.herokuapp.com/">
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
                  Storefront for clothing brand built with React and Redux,
                  custom styling, and back-end authentication through Firebase,
                  with payment authentication handled through Stripe API
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                href="https://crwn-apparelite.herokuapp.com/"
              >
                VISIT
              </Button>
            </CardActions>
          </Card>
        </Grid>
        {/* Project 2 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer} style={{ marginTop: '4rem'}}>
            <CardActionArea href="https://thawing-dusk-15894.herokuapp.com/">
              <CardMedia
                component="img"
                alt="Project 1"
                height="140"
                image={project1}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Unsplash Image Search Web Client
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Slick and modern front-end for the Unsplash image API using
                  Semantic UI
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              {/* <Button size="small" color="primary">
                Preview
              </Button> */}
              <Button
                href="https://thawing-dusk-15894.herokuapp.com/"
                size="small"
                color="primary"
              >
                VISIT
              </Button>
            </CardActions>
          </Card>
        </Grid>

        {/* Project 3 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea href="https://nameless-escarpment-65829.herokuapp.com/login">
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
                  Simple CRUD contacts archiver build with MongoDB, Express and the React Context API
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
                VISIT
              </Button>
            </CardActions>
          </Card>
        </Grid>
        {/* Project 4 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer} style={{ marginBottom: '2rem'}}>
            <CardActionArea href="https://5ea165e0e8e85af9568e1fed--githubfinder20300.netlify.app/">
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
                  Github user profile finder utilizing Github API built with
                  React
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
                Visit
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Portfolio;
