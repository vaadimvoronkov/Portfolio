import { createSlice } from '@reduxjs/toolkit';

export const currentRelease = createSlice({
  name: 'currentRelease',
  initialState: {
    release: {},
    index: 0,
  },
  reducers: {
    setRelease: (state, { payload }) => {
      state.release = payload;
    },
    setIndex: (state, { payload }) => {
      state.index = payload;
    },
  },
});

export const { setRelease, setIndex } = currentRelease.actions;
export const selectCurrentRelease = (state) => state.currentRelease.release;
export const selectCurrentIndex = (state) => state.currentRelease.index;

export const currentReleaseReducer = currentRelease.reducer;
