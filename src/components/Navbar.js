import React, { useState } from 'react'
import { Link } from 'react-router-dom' 
import { makeStyles } from '@material-ui/core/styles';
import MobilRightMenuSlider from '@material-ui/core/Drawer'
import avatar from '../images/portrait.png'
import MenuIcon from '@material-ui/icons/Menu';
import {
  AppBar,
  Toolbar,
  ListItem,
  IconButton,
  ListItemText,
  ListItemIcon,
  Avatar,
  Divider,
  List,
  Typography,
  Box
} from '@material-ui/core'
import {
  AssignmentInd,
  Home,
  Apps,
  ContactMail
} from '@material-ui/icons'

const useStyles = makeStyles(theme => ({
  menuSliderContainer: {
    width: 250,
    background: "#222",
    height: "100%" 
  },
  avatar: {
    display: "block",
    margin: "0.5rem auto",
    width: theme.spacing(13),
    height: theme.spacing(13)
  },
  listItem: {
    color: "white"
  }
}))

const menuIcons = [
  {
    listIcon: <Home />,
    listText: "Home",
    listPath: "/"
  },
  {
    listIcon: <AssignmentInd />,
    listText: "Resume",
    listPath: "/resume"
  },
  {
    listIcon: <Apps />,
    listText: "Portfolio",
    listPath: "/portfolio"
  },
  {
    listIcon: <ContactMail />,
    listText: "Contacts",
    listPath: "/contacts"
  }
]

const Navbar = () => {
  const [state, setState] = useState({
    right: false,
  }) 

  const toggleSlider = ((slider, open) => () => {
    setState({...state, [slider]: open })
  })

  const classes = useStyles()
  
  const sideList = slider => (
    <Box 
      className={classes.menuSliderContainer} 
      component="div"
      onClick={toggleSlider(slider, false)}
      >
      <Avatar className={classes.avatar} src={avatar} alt="avatar"/>
      <Divider />
      <List>
        {menuIcons.map((lsItem, key) => (
            <ListItem button key={key} component={Link} to={lsItem.listPath}>
          <ListItemIcon className={classes.listItem}>
              {lsItem.listIcon}
            </ListItemIcon>
            <ListItemText className={classes.listItem}>
              {lsItem.listText}
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </Box>
  )
  return (
    <>
    <Box component="nav">
      <AppBar position="static" style={{ background: "#222", width: "100%" }}> 
        <Toolbar>
          <IconButton onClick={toggleSlider("right", true)}>
            <MenuIcon style={{ color: "white" }}/>
          </IconButton>
          <Typography variant="h6" style={{ color: "white" }}>Portfolio</Typography>
          <MobilRightMenuSlider 
            anchor="right"
            open={state.right}
            onClose={toggleSlider("right", false)}>
            {sideList("right")}
          </MobilRightMenuSlider>
        </Toolbar>
      </AppBar>
    </Box>
    </>
  )
}

export default Navbar
