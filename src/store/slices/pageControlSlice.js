import { createSlice } from "@reduxjs/toolkit";

export const pageControlSlice = createSlice({
  name: "pageControl",
  initialState: {
    value: 0
  },
  reducers: {
    nextPage: (state) => {
      state.value += 1;
    },
    previousPage: (state) => {
      state.value -= 1;
    },
  },
});

export const { nextPage, previousPage } = pageControlSlice.actions;

export default pageControlSlice.reducer;
