import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home"; // Import the Home component
import Sale from "./Components/Sale";
import About from "./Components/About";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sale" element={<Sale />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
