import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';  // Import Header
import Footer from './components/Footer';  // Import Footer

const App = () => (
  <Router>
    <Header />  {/* Header Component */}
    <Routes>
      <Route path="/" element={<div className="p-8"><h1>Welcome to TravelMate!</h1><p>Start planning your next adventure!</p></div>} />
      {/* Add more routes as you create other pages */}
    </Routes>
    <Footer />  {/* Footer Component */}
  </Router>
);

export default App;
