import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div>
      About me
      <Link to="/devs">Devs</Link>
    </div>
  );
}

export default About;
