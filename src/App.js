import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";




import "./App.css";

function App() {
  

  return (
    <div className={`App ${darkMode ? "dark" : ""}`}>
      
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
