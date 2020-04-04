import React from 'react';
import logo from './logo.svg';
import AllBlogs from './components/allBlogs';
import SingleBlog from './components/singleBlog';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Blogs
        </h1>
      </header>
      <Router>
        <Switch>
          <Route path="/blogs" exact component={AllBlogs} />
          <Route path="/blogs/:id?" component={SingleBlog} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
