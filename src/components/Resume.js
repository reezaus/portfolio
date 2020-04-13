import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  CardHeader,
  CardContent,
  Card,
  Typography
} from '@material-ui/core';
import Navbar from './Navbar';

const useStyles = makeStyles(theme => ({
  mainContainer: {
    margin: '0%',
    paddingTop: '10%',
    background: '#FAFAFA',
    height: '100vh',
    width: '100%',
    position: 'absolute'
  },
  timeLine: {
    position: 'relative',
    paddingTop: '3rem',
    padding: '1.5rem',
    margin: '0 auto',
    '&:before': {
      content: "''",
      position: 'absolute',
      height: '90%',
      border: '1px solid tan',
      right: '40px',
      top: 0
    },
    // '&:after': {
    //   content: "''",
    //   display: 'table',
    //   clear: 'both'
    // },
    [theme.breakpoints.up('md')]: {
      padding: '2rem',
      '&:before': {
        left: 'calc(50% - 1px)',
        right: 'auto'
      }
    }
  },
  timeLineItem: {
    padding: '1rem',
    position: 'relative',
    margin: '1rem 3rem 1rem 1rem',
    clear: 'both',
    '&:after': {
      content: "''",
      position: 'absolute'
    },
    '&:before': {
      content: "''",
      position: 'absolute',
      right: '-0.625rem',
      top: 'calc(50% - 5px)',
      borderStyle: 'solid',
      borderColor: 'tomato tomato transparent transparent',
      borderWidth: '0.625rem',
      transform: 'rotate(45deg)'
    },
    [theme.breakpoints.up('md')]: {
      width: '44%',
      margin: '1rem',
      '&:nth-of-type(2n)': {
        float: 'right',
        margin: '1rem'
      },
      '&:nth-of-type(2n):before': {
        right: 'auto',
        left: '-0.625rem',
        borderColor: 'transparent transparent tomato tomato'
      }
    }
  },
  timeLineYear: {
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
      <Navbar page="Resume" />
      <Box component="header" className={classes.mainContainer}>
        <Box component="div" className={classes.timeLine}>
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2019
          </Typography>
          <Card component="div" className={classes.timeLineItem}>
            <CardHeader
              title="Heavy Signal Platoon Leader"
              subheader="United States Army Reserve"
            ></CardHeader>
            <CardContent>
              <Typography>
                Primary planner for platoon of soldiers’ training and operations
                <br />
                <br />
                Manage 5 million dollars’ worth of vehicles and equipment
                <br />
                <br />
                Supervisor of all event execution including large vehicular
                movements and mass network communication equipment setup
              </Typography>
            </CardContent>
          </Card>
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2020
          </Typography>
          <Card component="div" className={classes.timeLineItem}>
            <CardHeader
              title="Full Stack Developer"
              subheader="Freelance"
            ></CardHeader>
            <CardContent>
              <Typography>
                Build sites that have high creative or experimental value
                <br />
                <br />
                Prototype and execute front end animations and transitions
                <br />
                <br />
                Rapid iteration of deployment and refactoring for optimal
                performance
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </>
  );
};

export default Resume;
