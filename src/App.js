// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';

import About from './About';
import Experience from './Experience';
import Education from './Education';
import Certifications from './Certifications';
//import NotFound from './components/NotFound';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={About} />
          <Route path="/about" component={About} />
          
          <Route path="/experience" component={Experience} />
          <Route path="/education" component={Education} />
          <Route path="/certifications" component={Certifications} />
         
        </Switch>
      </div>
    </Router>
  );
}

export default App;
