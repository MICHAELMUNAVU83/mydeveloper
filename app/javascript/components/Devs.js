import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchDevelopers } from "../redux/developer";
function Devs() {
  const dispatch = useDispatch();
  const developers = useSelector((state) => state.developers.developers);
  useEffect(() => {
    dispatch(fetchDevelopers());
  }, [dispatch]);
  const displayDevelopers = developers.map((developer) => (
    <div key={developer.id}>
      <p>{developer.name}</p>
      <p>{developer.email}</p>
      <p>{developer.stack}</p>
      <Link to={`/developers/${developer.id}`}>Show</Link>
    </div>
  ));

  return (
    <div>
      Developers
      {displayDevelopers}
      <Link to="/bookings">My Booked Developers</Link>
    </div>
  );
}

export default Devs;
