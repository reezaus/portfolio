import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import LinkedIn from '@material-ui/icons/LinkedIn';
import Github from '@material-ui/icons/GitHub';
import Email from '@material-ui/icons/Email';

const useStyles = makeStyles({
  root: {
    '& .MuiBottomNavigationAction-root': {
      minWidth: 0,
      maxWidth: 250
    },
    '&  .MuiSvgIcon-root': {
      fill: 'white',
      '&:hover': {
        fontSize: '1.8rem'
      }
    }
  }
});

const Footer = () => {
  const classes = useStyles();
  return (
    <BottomNavigation width="auto" style={{ background: '#232F34' }}>
      <BottomNavigationAction
        className={classes.root}
        style={{ padding: 0 }}
        icon={<LinkedIn />}
        href="https://www.linkedin.com/in/joseph-reed-5aa44a180/"
      />
      <BottomNavigationAction
        className={classes.root}
        style={{ padding: 0 }}
        icon={<Github />}
        href="https://github.com/josephereed"
      />
      <BottomNavigationAction
        className={classes.root}
        style={{ padding: 0 }}
        icon={<Email />}
        href="mailto:jereed559@gmail.com"
      />
    </BottomNavigation>
  );
};

export default Footer;
