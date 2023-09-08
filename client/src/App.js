import React from 'react'
import Home from './pages/Home.jsx';
import AppNavbar from './components/Navbar.js';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import California from './pages/domestic/california.js';
import About from './pages/About.js';
import Colorado from './pages/domestic/colorado.js';


function App() {
  return (
   
      <Router>
         <AppNavbar />
        <div >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/domestic/california" element={<California />} />
            <Route path="/domestic/colorado" element={<Colorado />} />
            <Route path="/About" element={<About />} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
