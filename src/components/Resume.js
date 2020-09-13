import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  CardHeader,
  CardContent,
  CardMedia,
  Card,
  Container,
  Typography,
} from '@material-ui/core';
import army from '../images/armySMALL.jpg';
import react from '../images/reactjsSMALL.jpg';
import bio from '../images/bio.jpg';
import marble from '../images/marble.jpg';

export const Experience = ({ children, homepage }) => {
  let myPadding;
  if (homepage) {
    myPadding = 0;
  } else {
    myPadding = '8%';
  }
  const useStyles = makeStyles((theme) => ({
    mainContainer: {
      margin: 0,
      paddingTop: myPadding,
      width: '100%',
      position: 'relative',
    },
    timeLine: {
      position: 'relative',
      paddingTop: '3rem',
      padding: '2rem',
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
      [theme.breakpoints.up('xl')]: {
        padding: '2rem',
        '&:before': {
          content: "''",
          position: 'absolute',
          height: '64%',
          border: '1px solid tan',
          right: '50%',
          bottom: '820px',
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
      [theme.breakpoints.up('lg')]: {
        width: '66%',
        margin: '-10vw',
        '&:nth-of-type(2n)': {
          float: 'right',
          margin: '-10vw',
        }, // keeps item floating left or right
        // '&:nth-of-type(2n):before': {
        //   right: 'auto',
        //   left: '-0.625rem',
        //   borderColor: 'transparent transparent transparent transparent'
        // }
      },
    },
    timeLineYear: {
      boxShadow: '5px 10px 20px rgba(0,0,0,.25)',
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
  const classes = useStyles();
  return (
    <>
      {children}
      <Box
        component="header"
        className={classes.mainContainer}
        style={{ maxWidth: '1200px', margin: 'auto' }}
      >
        <Box component="div" className={classes.timeLine}>
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2020
          </Typography>
          <Card
            component="div"
            className={`${classes.timeLineItem} ${
              !homepage ? 'animated-left-card' : ''
            }`}
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
                      Build fast, scalable and powerful microservice-based
                      web-apps running in Docker containers executed in a
                      Kubernetes cluster.
                    </Typography>
                  </li>
                  <li>
                    <Typography>
                      Extensive Knowledge of Javascript, React (Hooks/Redux),
                      Node, Express, MongoDB, Docker, and Kubernetes.
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
            className={`${classes.timeLineItem} ${
              !homepage ? 'animated-right-card' : ''
            }`}
            style={{ marginBottom: '1.5rem', marginTop: '1.5rem', padding: 0 }}
          >
            <CardMedia
              component="img"
              alt="Project 1"
              height="140"
              image={marble}
            />
            <div style={{ padding: '16px' }}>
              <CardHeader
                title="Frontend Developer"
                subheader="Marble Creators"
              ></CardHeader>
              <CardContent>
                <ul>
                  <li>
                    <Typography>
                      Collaborate with designers and back-end developers to improve in app
                      notifications, email notifications, messaging, and other
                      general bug fixes.
                    </Typography>
                  </li>
                  <li>
                    <Typography>
                    Work with the UI Designer on artistic digital design and provide animations, CSS, and final HTML output
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
            className={`${classes.timeLineItem} ${
              !homepage ? 'animated-left-card' : ''
            }`}
            style={{
              marginBottom: '1.5rem',
              marginTop: '1.5rem',
              padding: 0,
              zIndex: 2,
            }}
          >
            <CardMedia
              component="img"
              alt="Project 1"
              height="140"
              image={bio}
            />
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
    </>
  );
};

const Resume = () => {
  return (
    <Container>
      <Experience />
    </Container>
  );
};

export default Resume;
