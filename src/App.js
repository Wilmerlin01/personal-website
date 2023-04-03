import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footerbar from './components/Footerbar';
import Homepage from './components/Homepage';
import About from './components/About';
import Contact from './components/Contact';

import Personalwebsite from './components/projectpages/Personalwebsite';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="site-container">
      <div className="site-content">
        <Router>
          <Navbar />
          <div className='page-transition'>
            <Routes>
              <Route path='/' exact element={<Homepage/>}/>
              <Route path='/about' exact element={<About/>}/>
              <Route path='/contact' exact element={<Contact/>}/>
              <Route path='/personal-website' exact element={<Personalwebsite/>}/>
            </Routes>
          </div>
          <Footerbar />
        </Router>
      </div>
    </div>
  );
}

export default App;
