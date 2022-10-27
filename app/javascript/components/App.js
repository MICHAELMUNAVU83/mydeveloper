import React from "react";
import About from "./About";
import Devs from "./Devs";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/devs" element={<Devs />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
