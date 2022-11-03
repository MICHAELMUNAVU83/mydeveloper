import { configureStore } from "@reduxjs/toolkit";
import developersReducer from "./redux/developer";
import bookingsReducer from "./redux/booking";

const store = configureStore({
  reducer: {
    developers: developersReducer,
    bookings: bookingsReducer,
  },
});

export default store;
