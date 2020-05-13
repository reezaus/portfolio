import React from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import Home from './components/index'
import CssBaseline from '@material-ui/core/CssBaseline';
import Resume from './components/Resume'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import SimpleModal from './components/SimpleModal'


function App() {
  return (
    <>
      <CssBaseline />
      <Route exact path="/" component={Home} />
      <Route path="/resume" component={Resume} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/contact" component={Contact} /> 
      <Route path="/modal" component={SimpleModal} />
    </>
  );
}

export default App;
