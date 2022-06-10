import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ScrollToTop from './ScrollToTop';

import { AppProvider } from './contexts/AppContext';

import './css-gral.css';

import Home from './views/Home/Home';
import About from './views/About/About';
import Project from './views/Project/Project';
import Projects2 from './views/Projects2/Projects2';
import Contact from './views/Contact/Contact';


const App = () => {


  const [activeTab, setActiveTab] = useState('')


  function render(){
    return (
        <Router>
          <AppProvider>
          <ScrollToTop/>
            <Routes>
                {/* <Route exact path="/"> */}
                    {/* <Home setActiveTab={setActiveTab} /> */}
                {/* </Route> */}
                <Route path="/" element={<Home setActiveTab={setActiveTab} />} />
                <Route path="/about" element={<About setActiveTab={setActiveTab} />} />
                <Route path="/project/:id" element={<Project setActiveTab={setActiveTab} />} />
                <Route path="/projects" element={<Projects2 setActiveTab={setActiveTab} />} />
                <Route path="/contact" element={<Contact setActiveTab={setActiveTab} />} />
            </Routes>
            </AppProvider>
        </Router>
    );
  }

  return (
    render()        
  )

}

export default App;