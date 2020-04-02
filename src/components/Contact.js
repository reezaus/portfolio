import React from 'react'
import Navbar from './Navbar'
import { makeStyles } from '@material-ui/core/styles'
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography
} from '@material-ui/core'

const useStyles = makeStyles({
  mainContainer: {
    background: "#233",
    height: "100%",
    width: "100%",
    position: "absolute"
  },
  cardContainer: {
    margin: "5rem auto",
    minWidth: "40%",
    padding: '2rem'
  }
})
const Contact = () => {
  const classes = useStyles()
  
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [message, setMessage] = React.useState('')

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const handleMessageChange = (event) => {
    setMessage(event.target.value)
  }
  const handleNameChange = (event) => {
    setEmail(event.target.value)
  }



  return (
    <Box component="div" className={classes.mainContainer} >
      <Navbar page="Contact" />
      <Grid container justify="center">
        <Card className={classes.cardContainer}>
          <CardContent>
            <Typography variant="h5" style={{textAlign: 'center'}}>
              Get in touch
            </Typography>
            <br />
            <form>
            <TextField
                value={name} 
                label="Name" 
                onChange={handleNameChange}
                fullWidth
                multiline
                />
              <br />
              <br />
              <TextField
                value={email} 
                label="Email" 
                onChange={handleEmailChange}
                fullWidth
                multiline
                />
                <br/>
              <TextField
                value={message}
                label="Message"
                rows="4"
                multiline
                onChange={handleMessageChange}
                label="Message"
                multiline
                fullWidth
                margin="normal"
              />
              <br/>
              <br/>
              <Button style={{margin: '0  0'}} variant="contained">Send</Button>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </Box>
  )
}

export default Contact
