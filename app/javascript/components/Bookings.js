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
  }, [dispatch]);
  console.log(developers);
  console.log(bookings);
  const displayBookings =
    bookings.lenth !== 0 ? (
      bookings.map((booking) => (
        <div key={booking.id}>
          <p>{booking.name}</p>
          {developers.map(
            (developer) =>
              developer.id === booking.developer_id && (
                <p>For develloper: {developer.name}</p>
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
