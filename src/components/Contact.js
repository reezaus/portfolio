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
import SendIcon from '@material-ui/icons/Send'

const useStyles = makeStyles({
  mainContainer: {
    background: "#E5E5E5",
    height: "100%",
    width: "100%",
    position: "absolute"
  },
  cardContainer: {
    margin: "2.5rem",
    marginTop: "10%",
    minWidth: "40%",
    padding: '1.25rem',
    maxWidth: 345
  }
})
const Contact = () => {
  const classes = useStyles()
  
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [message, setMessage] = React.useState('')

  const handleNameChange = (event) => {
    setName(event.target.value)
  }
  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const handleMessageChange = (event) => {
    setMessage(event.target.value)
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
            <form action="/" method="POST">
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
                rows="3"
                multiline
                onChange={handleMessageChange}
                fullWidth
                margin="normal"
              />
              <Button type="submit" color="primary" style={{marginTop: '2rem'}}variant="contained" fullWidth={true} endIcon={<SendIcon/>} className={classes.button}>
              Contact Me
              </Button>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </Box>
  )
}

export default Contact
