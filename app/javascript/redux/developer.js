import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  developers: [],
};

export const fetchDevelopers = createAsyncThunk(
  "developers/fetchDevelopers",
  async () => {
    const response = await fetch("/api/v1/developers");
    const data = await response.json();
    return data;
  }
);

export const developersSlice = createSlice({
  name: "developers",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchDevelopers.fulfilled]: (state, action) => {
      state.developers = action.payload;
    },
  },
});

export default developersSlice.reducer;
