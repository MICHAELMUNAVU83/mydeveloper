import React from "react";
import Devs from "./Devs";
import Bookings from "./Bookings";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Devs />} />
          <Route path="/bookings" element={<Bookings />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
