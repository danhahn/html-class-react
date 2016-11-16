import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from './App';
import About from './components/About/About';
import Home from './components/Home/Home';
import Lessons from './components/Lessons/Lessons';
import Lesson from './components/Lesson/Lesson';
import './index.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/lessons" component={Lessons}/>
      <Route path="/lessons/:id" component={Lesson}/>
      <Route path="/lessons/:id/:lesson" component={Lesson}/>
      <Route path="/about" component={About}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
