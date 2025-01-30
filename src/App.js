import React from 'react';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <div className="main-container">
          <Sidebar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
            </Routes>
        </div>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
