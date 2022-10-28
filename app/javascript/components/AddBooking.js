import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchBookings } from "../redux/booking";
function AddBooking() {
  const params = useParams();
  const devid = Number(params.id);
  console.log(devid);
  const [bookingName, setBookingName] = useState("");
  const dispatch = useDispatch();

  return (
    <div>
      AddBooking
      <input
        type="text"
        placeholder="name"
        value={bookingName}
        onChange={(e) => {
          setBookingName(e.target.value);
        }}
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          fetch("/api/v1/bookings", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: bookingName,
              developer_id: devid,
            }),
          })
            .then((response) => response.json())
            .then((data) => {
              console.log(data);
              dispatch(fetchBookings());
            });
        }}
      >
        add booking
      </button>
    </div>
  );
}

export default AddBooking;
