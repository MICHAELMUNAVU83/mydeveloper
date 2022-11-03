import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchBookings } from "../redux/booking";
import { fetchDevelopers } from "../redux/developer";
function Bookings() {
  const dispatch = useDispatch();
  const bookings = useSelector((state) => state.bookings.bookings);
  const developers = useSelector((state) => state.developers.developers);
  useEffect(() => {
    dispatch(fetchBookings());
    dispatch(fetchDevelopers());
  }, []);
  console.log(developers);
  console.log(bookings);
  const displayBookings =
    bookings.length !== 0 ? (
      bookings.map((booking) => (
        <div key={booking.id}>
          <p>{booking.name}</p>
          {developers.map(
            (developer) =>
              developer.id === booking.developer_id && (
                <p>For developer: {developer.name}</p>
              )
          )}
        </div>
      ))
    ) : (
      <div>
        <p>No bookings</p>
      </div>
    );

  return (
    <div>
      Bookings
      {displayBookings}
    </div>
  );
}

export default Bookings;
