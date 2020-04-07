import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Box } from '@material-ui/core'
import Navbar from './Navbar'

const useStyles = makeStyles(theme => ({
  mainContainer: {
    background: "#E5E5E5",
    minHeight: "100%",
    position: "relative"
  },
  timeLine: {
    position: "relative",
    padding: "1rem",
    margin: "0 auto",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "1px solid tan",
      right: "40px",
      top: 0
    },
    "&:after": {
      content: "''",
      display: "table",
      clear: "both"
    },
    [theme.breakpoints.up("md")]:{
      padding: "2rem",
      "&:before": {
        left: "calc(50% - 1px)",
        right: "auto"
      }
    } 
  },
  timeLineItem: {
    padding: "1rem",
    borderBottom: "2px solid tan",
    position: "relative",
    margin: "1rem 3rem 1rem 1rem",
    clear: "both",
    "&:after": {
      content: "''",
      position: "absolute"
    },
    "&:before": {
      content: "''",
      position: "absolute",
      right: "-0.625rem",
      top: "calc(50% - 5px)",
      borderStyle: "solid",
      borderColor: "tomato tomato transparent transparent",
      borderWidth: "0.625rem",
      transform: "rotate(45deg)"
    },
    [theme.breakpoints.up("md")]: {
      width: "44%",
      margin: "1rem",
      "&:nth-of-type(2n)": {
        float: "right",
        margin: "1rem",
        borderColor: "tan"
      },
      "&:nth-of-type(2n):before": {
        right: "auto",
        left: "-0.625rem",
        borderColor: "transparent transparent tomato tomato"
      }    
    }
  },
  timeLineYear: {
    textAlign: "center",
    maxWidth: "9.375rem",
    margin: "0 3rem 0 auto",
    fontSize: "1.8rem",
    background: "tomato",
    color: "white",
    lineHeight: 1,
    padding: "0.5rem 0 1rem",
    "&:before": {
      display: "none"
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      margin: "0 auto",
      "&:nth-of-type(2n)": {
        float: "none",
        margin: "0 auto"
      },
      "&:nth-of-type(2n):before": {
        display: "none"
      }
    }
  },
  heading: {
    color: "tomato",
    padding: "2rem 0",
    textTransform: "uppercase"
  },
  subHeading: {
    color: "tomato",
    padding: "0",
    textTransform: "uppercase"
  }
}));

const Resume = () => {
  const classes = useStyles()

  return (
    <>
      <Navbar page="Resume"/>
      <Box
        component="div" 
        className={ classes.mainContainer }>
        <Typography 
          variant="h4" 
          align="center" 
          className={classes.heading}>
          Working Experience
        </Typography>
        <Box 
          component="div" 
          className={ classes.timeLine }>
          <Typography 
            variant="h2" 
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}>2019</Typography>
          <Box 
            component="div" 
            className={ classes.timeLineItem}>
            <Typography 
              variant="h5" 
              align="center" 
              className={classes.subHeading}>
              Heavy Signal Platoon Leader
            </Typography>
            <Typography 
              variant="body1" 
              align="center"
              style={{color: "#4A6572"}}
              >
              United States Army Reserve
            </Typography>
            <Typography 
              variant="subtitle1" 
              align="center"
              style={{color: "#344955"}}
              >
              - Primary planner for platoon of
soldiers’ training and operations <br />
              - Manage 5 million dollars’ worth of vehicles
and equipment <br />
              - Supervisor of all event execution including
large vehicular movements and mass
network communication equipment setup
            </Typography>
          </Box>
          <Typography 
            variant="h2" 
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}>2020</Typography>
          <Box 
            component="div" 
            className={ classes.timeLineItem}>
            <Typography 
              variant="h5" 
              align="center" 
              className={classes.subHeading}>
              Full Stack Developer
            </Typography>
            <Typography 
              variant="body1" 
              align="center"
              style={{color: "#4A6572"}}
              >
              Freelance/Opensource
            </Typography>
            <Typography 
              variant="subtitle1" 
              align="center"
              style={{color: "#344955"}}
              >
              - Build sites that have high creative or experimental value <br />
              - Prototype and execute front end animations and transitions <br />
              - Rapid iteration of deployment and
refactoring for optimal performance  
            </Typography>
          </Box>
        </Box>
      </Box>
      
    </>
  )
}

export default Resume
