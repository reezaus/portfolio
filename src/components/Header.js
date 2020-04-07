import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Typography, Grid } from '@material-ui/core'
import Typed from 'react-typed'


// CSS Styles
const useStyles = makeStyles( theme => ({
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1)
  },
  title: {
    color: "F9AA33"
  },
  subtitle: {
    color: "tan",
    marginBottom: "3rem"
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50% )",
    width: "100%",
    textAlign: "center",
    zIndex: 1
  }
}))

const Header = () => {
  const classes = useStyles()
  return (
    <Box className={ classes.typedContainer}>
      <Grid container justify="center">
        <h1 style={{color: 'tomato',textAlign: "center", fontFamily: "elixia", lineHeight:'6rem', fontSize: '7rem', fontWeight: "100"}}>JOSEPH <br />REED</h1> 
      </Grid>
      <Typography variant="h4" style={{padding: 'auto'}}>
        <div className="terminal">
          <div style={{float: "left"}}>>_&nbsp;</div>
          <div>
            <Typed
              strings = { ["npx josephereed", "Web Design", "Web Development", "MERN Stack"] }
              typeSpeed={40}
              backSpeed={40}
              loop
              />
          </div>
        </div>
      </Typography>
    </Box>
  )
}

export default Header;
