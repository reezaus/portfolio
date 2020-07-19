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
import project1 from '../images/imageSearch.png';
import project2 from '../images/githubFinder.png';
import project3 from '../images/ContactKeeper.png';
import project4 from '../images/project4.png';
import { Experience } from './Resume';
import Contact from './Contact';

const useStyles = makeStyles({
  mainContainer: {
    top: '100%',
    background: '#E5E5E5',
    height: '86vh',
    width: '100%',
    position: 'absolute',
    paddingBottom: '0',
    marginTop: '30vw',
  },
  cardContainer: {
    maxWidth: 345,
    margin: '-30vw auto 10vh auto',
    zIndex: 5,
  },
});

const PortfolioMini = () => {
  const classes = useStyles();

  return (
    <Box component="div" className={classes.mainContainer}>
      <Grid
        container
        justify="center"
        style={{ maxWidth: '1200px', margin: 'auto' }}
      >
        {/* Project 1 */}
        <Grid item xs={12} sm={8} md={6} style={{ marginBottom: '10vw' }}>
          <Card className={classes.cardContainer}>
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
        <Grid
          item
          xs={12}
          sm={8}
          md={6}
          style={{ marginTop: '10vw', marginBottom: '10vw' }}
        >
          <Card className={classes.cardContainer}>
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
        <Grid
          item
          xs={12}
          sm={8}
          md={6}
          style={{ zIndex: 2, marginTop: '10vw' }}
        >
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
                  Simple CRUD contacts archiver build with MongoDB, Express and
                  the React Context API
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
        <Grid
          item
          xs={12}
          sm={8}
          md={6}
          style={{ zIndex: 2, marginTop: '20vw', marginBottom: '-5vh' }}
        >
          <Card className={classes.cardContainer}>
            <CardActionArea href="https://infallible-lalande-1d6690.netlify.app/">
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
                href="https://infallible-lalande-1d6690.netlify.app/"
              >
                VISIT
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
      <Experience homepage>
        <div className="orange-header">
          <Typography
            variant="h2"
            style={{ color: 'white', paddingTop: '27vh' }}
          >
            Experience
          </Typography>
        </div>
      </Experience>
      <Contact>
        <div className="blue-header">
          <Typography
            variant="h2"
            style={{ color: 'white', paddingTop: '27vh', lineHeight: '1.08' }}
          >
            Contact
          </Typography>
        </div>
      </Contact>
    </Box>
  );
};

export default PortfolioMini;
