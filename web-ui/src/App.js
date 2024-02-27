//import logo from './logo.svg';
import './App.css';
import { useRef } from 'react';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Profile from './components/Profile.js';
import Navheader from './components/Navheader.js';
import Introduction from './components/Introduction';
import Container from 'react-bootstrap/Container';
import Overlay from 'react-bootstrap/Overlay';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import oceanImage from './images/IMG_6638.jpg';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';

function App() {
  const target = useRef(null);

  return (
    <Router>
      <Navheader />
      <div>
        {/* Your React Bootstrap navbar or navigation links */}
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="Home" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Projects" element={<Projects />} />
          {/* Add more Route components for additional pages */}
        </Routes>
      </div>
    </Router>
  )
}

export default App;
