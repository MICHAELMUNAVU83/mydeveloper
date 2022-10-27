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
  console.log(developers);
  return (
    <div>
      Developers
      <Link to="/bookings">Bookings</Link>
    </div>
  );
}

export default Devs;
