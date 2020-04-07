import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import Particles from 'react-particles-js'
import { makeStyles } from '@material-ui/styles'
import { Box } from '@material-ui/core'
import { ImageSearch } from '@material-ui/icons'

const useStyles = makeStyles({
  particlesCanvas: {
    position: "relative"
  }
})

const Home = () => {
  const classes = useStyles()
  return (
    <Box style={{minHeight: '100vw', margin: '0'}} className="boxy">
    <Navbar page="Home"/>
      <Header />
      <Particles canvasClassName={classes.particlesCanvas} />
    </Box>
  )
}

export default Home
