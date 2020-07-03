import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  CardHeader,
  CardContent,
  CardMedia,
  Card,
  Typography,
} from '@material-ui/core';
import Navbar from './Navbar';
import army from '../images/armySMALL.jpg';
import react from '../images/reactjsSMALL.jpg';
import bio from '../images/bio.jpg';

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    margin: 0,
    paddingTop: '8%',
    background: '#E5E5E5',
    width: '100%',
    position: 'relative',
  },
  timeLine: {
    position: 'relative',
    paddingTop: '3rem',
    padding: '1rem',
    margin: '0 auto',
    '&:before': {},
    '&:after': {
      content: "''",
      display: 'table',
      clear: 'both',
    },
    [theme.breakpoints.up('md')]: {
      padding: '2rem',
      '&:before': {
        content: "''",
        position: 'absolute',
        height: '64%',
        border: '1px solid tan',
        right: '50%',
        bottom: '660px',
      },
    },
  },
  timeLineItem: {
    padding: '1rem',
    position: 'relative', //important
    // margin: '.3rem 1.5rem 3rem .5rem',
    margin: '.3rem auto 0rem auto',
    left: '0',
    clear: 'both',
    '&:after': {
      content: "''",
      // position: 'absolute'
    },
    '&:before': {
      content: "''",
      position: 'absolute',
      right: '50%',
      borderStyle: 'solid',
      borderColor: 'transparent',
      borderWidth: '0.625rem',
      transform: 'rotate(45deg)',
      left: '0',
    },
    [theme.breakpoints.up('md')]: {
      width: '44%',
      margin: '1rem',
      '&:nth-of-type(2n)': {
        float: 'right',
        margin: '1rem',
      }, // keeps item floating left or right
      // '&:nth-of-type(2n):before': {
      //   right: 'auto',
      //   left: '-0.625rem',
      //   borderColor: 'transparent transparent transparent transparent'
      // }
    },
  },
  timeLineYear: {
    boxShadow: '5px 10px 20px rgba(0,0,0,.2)',
    textAlign: 'center',
    borderRadius: '1.5rem',
    maxWidth: '9.375rem',
    margin: '0 3rem 0 auto',
    fontSize: '1.8rem',
    background: 'tomato',
    color: 'white',
    lineHeight: 1,
    padding: '1rem',
    '&:before': {
      display: 'none',
    },
    [theme.breakpoints.up('md')]: {
      textAlign: 'center',
      margin: '0 auto',
      '&:nth-of-type(2n)': {
        float: 'none',
        margin: '0 auto',
      },
      '&:nth-of-type(2n):before': {
        display: 'none',
      },
    },
  },
}));

export const Experience = ({ children, homepage}) => {
  const classes = useStyles();
  return (
    <Box component="header" className={classes.mainContainer}>
    {children}
      <Box component="div" className={classes.timeLine}>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2020
        </Typography>
        <Card
          component="div"
          className={`${classes.timeLineItem} ${!homepage ? 'animated-left-card' : ''}`}
          style={{ marginBottom: '1.5rem', marginTop: '1.5rem', padding: 0 }}
        >
          <CardMedia
            component="img"
            alt="Project 1"
            height="140"
            image={react}
          />
          <div style={{ padding: '16px' }}>
            <CardHeader
              title="Full Stack Developer"
              subheader="Freelance"
            ></CardHeader>
            <CardContent>
              <ul>
                <li>
                  <Typography>
                    Build modern frontend interfaces with centralized state
                    management that are intuitive and responsively designed
                  </Typography>
                </li>
                <li>
                  <Typography>
                    Knowledge of ES6+, Webpack and best refactoring practices
                    for low overhead and optimal performance
                  </Typography>
                </li>
                <li>
                  <Typography>
                    Extensive Knowledge of React/Redux, Node/Express, MongoDB
                  </Typography>
                </li>
              </ul>
            </CardContent>
          </div>
        </Card>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2019
        </Typography>
        <Card
          component="div"
          className={`${classes.timeLineItem} ${!homepage ? 'animated-right-card' : ''}`}
          style={{ marginBottom: '1.5rem', marginTop: '1.5rem', padding: 0 }}
        >
          <CardMedia
            component="img"
            alt="Project 1"
            height="140"
            image={army}
          />
          <div style={{ padding: '16px' }}>
            <CardHeader
              title="Heavy Signal Platoon Leader"
              subheader="United States Army Reserve"
            ></CardHeader>
            <CardContent>
              <ul>
                <li>
                  <Typography>
                    Primary planner for a platoon of soldiers’ training and operations  
                  </Typography>
                </li>
                <li>
                  <Typography>
                    Manage 5 million dollars’ worth of vehicles and equipment
                  </Typography>
                </li>
                <li>
                  <Typography>
                    Supervisor of all event execution including large vehicular
                    movements and mass network communication equipment setup
                  </Typography>
                </li>
              </ul>
            </CardContent>
          </div>
        </Card>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2018
        </Typography>
        <Card
          component="div"
          className={`${classes.timeLineItem}`}
          style={{ marginBottom: '1.5rem', marginTop: '1.5rem', padding: 0, zIndex: 2 }}
        >
          <CardMedia component="img" alt="Project 1" height="140" image={bio} />
          <div style={{ padding: '16px' }}>
            <CardHeader
              title="Bachelor of Science in Biochemistry and Molecular Biology"
              subheader="University of California, Davis"
            ></CardHeader>
            <CardContent>
              <ul>
                <li>
                  <Typography>
                    Utilized R programming language for visualization of large
                    t-test to PCA and clustering, and RNA sequence datasets
                  </Typography>
                </li>
                <li>
                  <Typography>
                    Conducted bioinformatical analyses with Python's PyLab for
                    plotting
                  </Typography>
                </li>
                <li>
                  <Typography>
                    Lab experience consisting of PCR, Bradford Assay, A280
                    assay, SDS PAGE, Western blot analysis
                  </Typography>
                </li>
              </ul>
            </CardContent>
          </div>
        </Card>
      </Box>
    </Box>
  );
};

const Resume = () => {
  
  return (
    <>
      <Navbar page="Experience" />
      <Experience />
    </>
  );
};

export default Resume;
