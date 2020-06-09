import React, { Suspense } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './components/index';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter as Router } from 'react-router-dom';
const Resume = React.lazy(() => import('./components/Resume'));
const Portfolio = React.lazy(() => import('./components/Portfolio'));
const Contact = React.lazy(() => import('./components/Contact'));

function App() {
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <Router>
        <CssBaseline />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/resume" component={Resume} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </Router>
    </Suspense>
  );
}

export default App;
