import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchBookings } from "../redux/booking";

function Bookings() {
  const dispatch = useDispatch();
  const bookings = useSelector((state) => state.bookings.bookings);
  useEffect(() => {
    dispatch(fetchBookings());
  }, [dispatch]);
  console.log(bookings);
  return <div>Bookings</div>;
}

export default Bookings;
