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
    if (window.screen.width > 500) {
      if (
        window.scrollY > window.screen.height * 3.5 &&
        window.screen.width > 1300
      ) {
        setLabel('Contact');
      } else if (window.scrollY < window.screen.height * 0.8) {
        setLabel('Home');
      } else if (
        window.scrollY > window.screen.height * 0.8 &&
        window.scrollY < 1.8 * window.screen.height
      ) {
        setLabel('Projects');
      } else if (
        window.scrollY > window.screen.height * 1.8 &&
        window.scrollY < window.screen.height * 4
      ) {
        setLabel('Experience');
      } else if (
        window.scrollY > window.screen.height * 4 &&
        window.screen.width < 1400
      ) {
        setLabel('Contact');
      }
    } else if (window.screen.width < 500) {
      if (window.scrollY < window.screen.height * 0.8) {
        setLabel('Home');
      } else if (
        window.scrollY > window.screen.height * 0.8 &&
        window.scrollY < 2.7 * window.screen.height
      ) {
        setLabel('Projects');
      } else if (
        window.scrollY > window.screen.height * 2.7 &&
        window.scrollY < window.screen.height * 5.8
      ) {
        setLabel('Experience');
      }
      if (window.scrollY > window.screen.height * 5.8) {
        setLabel('Contact');
      }
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
