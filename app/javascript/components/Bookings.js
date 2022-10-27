import React, { useEffect } from "react";

function Bookings() {
  useEffect(() => {
    fetch("/api/v1/bookings")
      .then((response) => response.json())
      .then((data) => console.log(data));
  });
  return <div>Bookings</div>;
}

export default Bookings;
