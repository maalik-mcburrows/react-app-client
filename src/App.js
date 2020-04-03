import React from 'react';
import logo from './logo.svg';
import AllBlogs from './components/allBlogs';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          All Blogs
        </h1>
      </header>
      <AllBlogs />
    </div>
  );
}

export default App;
