import React, { useState } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './components/index';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  const [label, setLabel] = useState('Home');
  setInterval(() => {
    if (window.scrollY > 500 && window.scrollY < 1600) {
      setLabel('Projects');
    } else if (window.scrollY > 1600 && window.scrollY < 3800) {
      setLabel('Experience');
    } else if (
      window.scrollY > 3800 &&
      window.scrollY < 4500 &&
      window.screen.width < 500
    ) {
      setLabel('Experience');
    } else if (window.scrollY > 4500 && window.screen.width < 500) {
      setLabel('Contact');
    } else if (window.scrollY > 3800 && window.screen.width > 500) {
      setLabel('Contact');
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
                  : window.location.pathname
              }
            />
          )}
        />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/experience" component={Resume} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
