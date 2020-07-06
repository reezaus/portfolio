import React, { useState } from 'react';
import './App.css';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Home from './components/index';
import CssBaseline from '@material-ui/core/CssBaseline';
import Navbar from './components/Navbar';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  const [label, setLabel] = useState('Home');
  setInterval(() => {
    if (window.scrollY > 500 && window.scrollY < 1600) {
      setLabel('Projects');
    } else if (window.scrollY > 1600 && window.scrollY < 3700) {
      setLabel('Experience');
    } else if (
      window.scrollY > 3800 &&
      window.scrollY < 4300 &&
      window.screen.width < 500
    ) {
      setLabel('Experience');
    } else if (window.scrollY > 4300 && window.screen.width < 500) {
      setLabel('Contact');
    } else if (window.scrollY > 3700 && window.screen.width > 500) {
      setLabel('Message Me');
    } else {
      setLabel('Home');
    }
  }, 500);
  return (
    <>
      <Router>
        <CssBaseline />
        <ScrollToTop />
        <Route
          path="/"
          render={() => (
            <Navbar
              page={
                window.location.pathname === '/'
                  ? `${label}`
                  : window.location.pathname.slice(1).charAt(0).toUpperCase() +
                    window.location.pathname.slice(2)
              }
            />
          )}
        />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/experience" component={Resume} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
