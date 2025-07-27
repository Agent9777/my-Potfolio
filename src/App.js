import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Component } from 'react';
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contacts from './components/Contact'

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About/>}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path="/Skills" element={<Skills/>}/>
        <Route path="/Contacts" element={<Contacts/>}/>

      </Routes>
      </Router>
    </div>
  );
}

export default App;
