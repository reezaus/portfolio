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

const useStyles = makeStyles((theme) => ({
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
  cardMedia: {
    height: 140
  },
  blueHeader: {
    backgroundColor: '#3f51b5',
    opacity: '.9',
    zIndex: '0 !important',
    marginTop: '-13rem',
    clipPath: 'polygon(0 25%, 100% 0, 100% 75%, 0 100%)',
    height: '60vh',
    textAlign: 'center',
    width: '100vw'
  },
  orangeHeader: {
    backgroundColor: 'rgba(255, 99, 71, 1)', 
    zIndex: '0 !important',
    marginTop: '-24vh',
    marginBottom: '-8vh',
    clipPath: 'polygon(0 25%, 100% 0, 100% 75%, 0 100%)',
    height: '60vh',
    textAlign: 'center',
    width: '100vw',
  },
  [theme.breakpoints.up('xl')]: {
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
      maxWidth: 518,
      margin: '-28vw auto 10vh auto',
      zIndex: 5,
    },
    cardContent: {
      padding: 25
    },
    cardActions: {
      paddingLeft: 20,
      paddingBottom: 10,
    },
    cardMedia: {
      height: 210,  
    },
    blueHeader: {
      zIndex: '0 !important',
      marginTop: '-20vh',
      marginBottom: '-5rem',
      clipPath: 'polygon(0 25%, 100% 0, 100% 75%, 0 100%)',
      height: '60vh',
      textAlign: 'center',
      width: '100vw'
    },
    orangeHeader: {
      marginTop: '-30vh',
      marginBottom: '-8vh'
    },
    "@global": {
      html: {
        [theme.breakpoints.up("xl")]: {
          fontSize: 24
        }
      }
    }
  },
}));

const PortfolioMini = () => {
  const classes = useStyles();

  return (
    <Box component="div" className={classes.mainContainer}>
      <Grid
        container
        justify="center"
        style={{ maxWidth: '1600px', margin: 'auto' }}
      >
        {/* Project 1 */}
        <Grid item xs={12} sm={8} md={6} lg={6} style={{ marginBottom: '10vw' }}>
          <Card className={classes.cardContainer}>
            <CardActionArea href="https://crwn-apparelite.herokuapp.com/">
              <CardMedia
                className={classes.CardMedia}
                component="img"
                alt="Project 4"
                height="140"
                image={project4}
              />
              <CardContent className={classes.cardContent}>
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
            <CardActions className={classes.cardActions}>
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
          lg={6}
          style={{ marginTop: '10vw', marginBottom: '10vw' }}
        >
          <Card className={classes.cardContainer}>
            <CardActionArea href="https://thawing-dusk-15894.herokuapp.com/">
              <CardMedia
                className={classes.cardMedia}
                component="img"
                alt="Project 1"
                image={project1}
              />
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5">
                  Unsplash Image Search Web Client
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Slick and modern front-end for the Unsplash image API using
                  Semantic UI
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardActions}>
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
                className={classes.cardMedia}
                component="img"
                alt="Project 3"
                image={project3}
              />
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5">
                  Contact Keeper
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Simple CRUD contacts archiver build with MongoDB, Express and
                  the React Context API
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardActions}>
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
                className={classes.cardMedia}
                component="img"
                alt="Project 2"
                image={project2}
              />
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5">
                  Github Finder
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Github user profile finder utilizing Github API built with
                  React
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardActions}>
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
        <div style={{ filter: 'drop-shadow(1px 1px 1px rgba(0,0,0,0.5))'}}>
        <div className={classes.orangeHeader}>
          <Typography
            variant="h2"
            style={{ color: 'white', paddingTop: '27vh' }}
          >
            Experience
          </Typography>
        </div>
        </div>
      </Experience>
      <Contact>
      <div style={{ filter: 'drop-shadow(1px 1px 1px rgba(0,0,0,0.5))'}}>
        <div className="blue-header">
          <Typography
            variant="h2"
            style={{ color: 'white', paddingTop: '27vh', lineHeight: '1.08' }}
            className={classes.blueHeader}
          >
            Contact
          </Typography>
        </div>
        </div>
      </Contact>
    </Box>
  );
};

export default PortfolioMini;
