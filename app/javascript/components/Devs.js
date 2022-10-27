import React, { useEffect , useState } from "react";
import { Link } from "react-router-dom";
function Devs() {
  useEffect(() => {
    fetch("/api/v1/developers")
      .then((response) => response.json())
      .then((data) => console.log(data));
  });
  return (
    <div>
      Developers
      <Link to="/bookings">Bookings</Link>
    </div>
  );
}

export default Devs;
