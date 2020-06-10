import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  CardHeader,
  CardContent,
  CardMedia,
  Card,
  Typography
} from '@material-ui/core';
import Navbar from './Navbar';
import army from '../images/army.jpg';
import react from '../images/reactjs.jpg';

const useStyles = makeStyles(theme => ({
  mainContainer: {
    margin: 0,
    paddingTop: '8%',
    background: '#E5E5E5',
    width: '100%',
    position: 'relative'
  },
  timeLine: {
    position: 'relative',
    paddingTop: '3rem',
    padding: '1.5rem',
    margin: '0 auto',
    '&:before': {},
    '&:after': {
      content: "''",
      display: 'table',
      clear: 'both'
    },
    [theme.breakpoints.up('md')]: {
      padding: '2rem',
      '&:before': {
        content: "''",
        position: 'absolute',
        height: '90%',
        border: '1px solid tan',
        right: '50%',
        bottom: '455px'
      }
    }
  },
  timeLineItem: {
    padding: '1rem',
    position: 'relative', //important
    margin: '.3rem 1.5rem 3rem .5rem',
    left: '0',
    clear: 'both',
    '&:after': {
      content: "''"
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
      left: '0'
    },
    [theme.breakpoints.up('md')]: {
      width: '44%',
      margin: '1rem',
      '&:nth-of-type(2n)': {
        float: 'right',
        margin: '1rem'
      } // keeps item floating left or right
      // '&:nth-of-type(2n):before': {
      //   right: 'auto',
      //   left: '-0.625rem',
      //   borderColor: 'transparent transparent transparent transparent'
      // }
    }
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
      display: 'none'
    },
    [theme.breakpoints.up('md')]: {
      textAlign: 'center',
      margin: '0 auto',
      '&:nth-of-type(2n)': {
        float: 'none',
        margin: '0 auto'
      },
      '&:nth-of-type(2n):before': {
        display: 'none'
      }
    }
  }
}));

const Resume = () => {
  const classes = useStyles();
  return (
    <>
      <Navbar page="Experience" />
      <Box component="header" className={classes.mainContainer}>
        <Box component="div" className={classes.timeLine}>
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2019
          </Typography>
          <Card
            component="div"
            className={`${classes.timeLineItem} animated-left-card`}
            style={{ marginBottom: '1.5rem', marginTop: '1.5rem', padding: 0 }}
          >
          <CardMedia
            component="img"
            alt="Project 1"
            height="140"
            image={army}
          />
          <div style={{ padding: '16px'}}>
            <CardHeader
              title="Heavy Signal Platoon Leader"
              subheader="United States Army Reserve"
            ></CardHeader>
            <CardContent>
              <ul>
                <li>
                  <Typography>
                    Primary planner for platoon of soldiers’ training and
                    operations
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
            2020
          </Typography>
          <Card
            component="div"
            className={`${classes.timeLineItem} animated-right-card`}
            style={{ marginBottom: '1.5rem', marginTop: '1.5rem', padding: 0 }}
          >
          <CardMedia
            component="img"
            alt="Project 1"
            height="140"
            image={react}
          />
          <div style={{ padding: '16px'}}>
            <CardHeader
              title="Full Stack Developer"
              subheader="Freelance"
            ></CardHeader>
            <CardContent>
              <ul>
                <li>
                  <Typography>
                    Build sites that have high creative or experimental value
                  </Typography>
                </li>
                <li>
                  <Typography>
                    Prototype and execute front end animations and transitions
                  </Typography>
                </li>
                <li>
                  <Typography>
                    Rapid iteration of deployment and refactoring for optimal
                    performance
                  </Typography>
                </li>
              </ul>
            </CardContent>
          </div>
          </Card>
        </Box>
      </Box>
    </>
  );
};

export default Resume;
