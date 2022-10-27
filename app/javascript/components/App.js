import React from "react";
import Devs from "./Devs";
import Bookings from "./Bookings";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store";
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Devs />} />
          <Route path="/bookings" element={<Bookings />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
