import React, { lazy } from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import Home from './components/index'
import CssBaseline from '@material-ui/core/CssBaseline';
const Portfolio = lazy(() => import('./components/Portfolio'));
const Contact = lazy(() => import('./components/Contact'));
const Resume = lazy(() => import('./components/Resume'));


function App() {
  return (
    <>
      <CssBaseline />
      <Route exact path="/" component={Home} />
      <Route path="/resume" component={Resume} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/contact" component={Contact} /> 
    </>
  );
}

export default App;
