import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import Particles from 'react-particles-js'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  particlesCanvas: {
    position: "relative"
  }
})

const Home = () => {
  const classes = useStyles()
  return (
    <div className='benis'>
    <Navbar page="Home"/>
      <Header />
      <Particles canvasClassName={classes.particlesCanvas} />
    </div>
  )
}

export default Home
