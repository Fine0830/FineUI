/**
 * Created by Fine on 2016/11/8.
 */
import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { browserHistory } from 'react-router';
import { render } from 'react-dom';

import App from './js/App';
import './js/style';
import Home from './js/Home/Home';
import About from './js/About/About';
import Contact from './js/Contact/Contact';
import Life from './js/Life/Life';
import Projects from './js/Projects/Projects';
import Technology from './js/Technology/Technology';

render(
  <Router history = {browserHistory}>
    <Route path = "/" component={App}>
      <IndexRoute component={Home}/>
      <Route path = "home" component={Home}/>
      <Route path = "about" component={About}/>
      <Route path = "life" component={Life}/>
      <Route path = "contact" component={Contact}/>
      <Route path = "projects" component={Projects}/>
      <Route path = "technology" component={Technology}/>
    </Route>
  </Router>
, document.querySelector('#Fine'));
