import React from 'react'
import Home from './pages/Home.jsx';
import Navbar from './components/Navbar.js';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
   
      <Router>
         <Navbar />
        <div >
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
