import React from 'react';
import logo from './logo.svg';
import AllBlogs from './components/allBlogs';
import { BrowserRouter as Router, Route } from 'react-router-dom';
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
        <Route path="/" component={AllBlogs} />
      </Router>
    </div>
  );
}

export default App;
