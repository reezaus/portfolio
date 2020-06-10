import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './components/index';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  return (
    <>
    <Router>
      <CssBaseline />
      <Route
        path="/"
        render={() => (
          <Navbar
            page={
              window.location.pathname === '/'
                ? 'Home'
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
}

export default App;
