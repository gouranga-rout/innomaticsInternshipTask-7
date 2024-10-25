import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import ServiceDetails from './pages/ServiceDetails';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      {/* Navbar is always displayed */}
      <Navbar />

      {/* Page content below navbar */}
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />}>
            <Route path="courses" element={<ServiceDetails service="Courses" />} />
            <Route path="placements" element={<ServiceDetails service="Placements" />} />
          </Route>
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

      {/* Optional Footer */}
      <Footer />
    </div>
  );
};

export default App;

