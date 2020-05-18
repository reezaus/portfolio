import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid, Box } from "@material-ui/core";
import Typed from "react-typed";

//  CSS STYLES
const useStyles = makeStyles(theme => ({
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1)
  },
  title: {
    color: "tomato",
    fontFamily: 'Julius Sans One',
    fontSize: '5rem',
    lineHeight: '6rem'
  },
  subtitle: {
    color: "tan",
    marginBottom: "3rem"
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
    textAlign: "center",
    zIndex: 1
  }
}));

const Header = () => {
  const classes = useStyles();
  return (
    <Box className={classes.typedContainer}>
      <Grid container justify="center">
      </Grid>
      <Typography className={classes.title} variant="h4">
        &nbsp;JOSEPH <br/>REED
      </Typography>
      <br />
      <br />
      <Typography className={classes.subtitle} variant="h5">
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
  );
};

export default Header;
