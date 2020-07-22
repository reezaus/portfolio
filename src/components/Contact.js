import React from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import SendIcon from '@material-ui/icons/Send';
import Typography from '@material-ui/core/Typography';

export const Contact = ({ children, homepage }) => {
  let myMargin, myBottom;
  if (children) {
    myMargin = '-8rem';
    myBottom = '0vh';
  } else {
    myMargin = '15vh';
    myBottom = '-30vh';
  }
  const useStyles = makeStyles((theme) => ({
    mainContainer: {
      background: '#E5E5E5',
      height: '100%',
      width: '100%',
      position: 'absolute',
      marginBottom: myBottom,
    },
    cardContainer: {
      marginTop: myMargin,
      marginBottom: '0',
      margin: `${myMargin} 0 0 0`,
      minHeight: 450,
      padding: '.5rem',
      minWidth: 400,
      zIndex: 5,
    },
    [theme.breakpoints.up("xl")]: {
      cardContainer: {
        minWidth: '30%'
      }
    }
  }));
  const classes = useStyles();

  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const contact = {
      name,
      email,
      message,
    };
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const body = JSON.stringify(contact);
      await axios.post('/api/contact', body, config);
      setName('');
      setEmail('');
      setMessage('');
      alert('Message Sent Successfully');
    } catch (err) {
      console.error(err.response.data);
      alert(err.response.data.errors[0].msg);
    }
  };

  return (
    <Box component="div" className={classes.mainContainer}>
      {children}
      <Grid container justify="center">
        <Card
          className={`${classes.cardContainer} ${!homepage ? 'moveUp' : ''}`}
        >
          <CardContent>
            <Typography variant="h5" style={{ textAlign: 'center' }}>
              Get in touch
            </Typography>
            <br />
            <form onSubmit={handleFormSubmit}>
              <TextField
                name="name"
                value={name}
                label="Name"
                onChange={handleNameChange}
                fullWidth
                multiline
              />
              <br />
              <br />
              <TextField
                name="email"
                value={email}
                label="Email"
                onChange={handleEmailChange}
                fullWidth
                multiline
              />
              <br />
              <TextField
                name="message"
                value={message}
                label="Message"
                rows="5"
                multiline
                onChange={handleMessageChange}
                fullWidth
                margin="normal"
              />
              <Button
                type="submit"
                color="primary"
                style={{ marginTop: '2rem' }}
                variant="contained"
                fullWidth={true}
                endIcon={<SendIcon />}
                className={classes.button}
              >
                Send
              </Button>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </Box>
  );
};

export default Contact;
