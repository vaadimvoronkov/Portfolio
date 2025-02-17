import { createSlice } from "@reduxjs/toolkit";

export const fetchReleasesSlice = createSlice({
  name: "fetchReleases",
  initialState: {
    value: {},
  },
  reducers: {
    get: (state) => state.value
  },
});

export const { get } = fetchReleasesSlice.actions;

export default fetchReleasesSlice.reducer;
