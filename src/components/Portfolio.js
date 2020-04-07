import React from 'react'
import Navbar from './Navbar'
import { makeStyles } from '@material-ui/core/styles'
import {
  Box,
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography
} from '@material-ui/core'
import project1 from '../images/las-cazuelas-logo.jpg'
import project2 from '../images/javascript-fullstack.jpg'
import project3 from '../images/react-redux.jpg'
import project4 from '../images/mern-stack.jpg'

const useStyles = makeStyles({
  mainContainer: {
    background: "#E5E5E5",
    minHeight: "100%",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "5rem auto"
  },
  muiCardMediaImg: {
    objectFit: "cover"
  }
})

const Portfolio = () => { 
  const classes = useStyles()
  return (
    <Box component="div" className={classes.mainContainer}>
      <Navbar page="Portfolio"/>
      <Grid container justify="center">
        {/* Project 1 */}
        <Grid item xs={12} sm={8} md={6} >
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia 
                className={classes.muiCardMediaImg}
                component="img"
                alt="project"
                height="140"
                image={project1}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Las Cazuelas Restaurant
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Restaurant homepage built with Node, Express, React, and Boostrap. 
                </Typography>
              </CardContent>
            </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Preview
                </Button>
                <Button href="https://vast-inlet-20675.herokuapp.com/" size="small" color="primary">
                  Live Demo
                </Button>
              </CardActions>
          </Card>
        </Grid>
        {/* Project 2 */}
        <Grid item xs={12} sm={8} md={6} >
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia 
                component="img"
                alt="project"
                height="140"
                image={project2}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Project 2
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus cum eaque doloremque pariatur minima exercitationem deleniti iusto natus officia asperiores cumque autem voluptates laudantium ratione harum dolore, dignissimos sed repudiandae.
                </Typography>
              </CardContent>
            </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Preview
                </Button>
                <Button size="small" color="primary">
                  Live Demo
                </Button>
              </CardActions>
          </Card>
        </Grid>
        {/* Project 3 */}
        <Grid item xs={12} sm={8} md={6} >
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia 
                component="img"
                alt="project"
                height="140"
                image={project3}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Project 3
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus cum eaque doloremque pariatur minima exercitationem deleniti iusto natus officia asperiores cumque autem voluptates laudantium ratione harum dolore, dignissimos sed repudiandae.
                </Typography>
              </CardContent>
            </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Preview
                </Button>
                <Button size="small" color="primary">
                  Live Demo
                </Button>
              </CardActions>
          </Card>
        </Grid>
        {/* Project 4 */}
        <Grid item xs={12} sm={8} md={6} >
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia 
                component="img"
                alt="project"
                height="140"
                image={project4}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Project 4
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus cum eaque doloremque pariatur minima exercitationem deleniti iusto natus officia asperiores cumque autem voluptates laudantium ratione harum dolore, dignissimos sed repudiandae.
                </Typography>
              </CardContent>
            </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Preview
                </Button>
                <Button size="small" color="primary">
                  Live Demo
                </Button>
              </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Portfolio
