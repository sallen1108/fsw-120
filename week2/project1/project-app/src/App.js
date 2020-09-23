import React from 'react';
import './App.css';

import Header from "./Header"
import BlogPost from "./BlogPost"
import BlogList from "./BlogList"
import Footer from "./Footer"

function App() {
  return (
    <div className="App">
      <Header />
      <BlogList />
      <BlogPost />
      <Footer />
    </div>
  )
}

export default App
