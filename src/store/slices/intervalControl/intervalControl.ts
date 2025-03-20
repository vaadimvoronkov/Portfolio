import { createSlice } from '@reduxjs/toolkit';

export const intervalControlSlice = createSlice({
  name: 'intervalControl',
  initialState: {
    trackProgress: 0,
    intervalRef: null,
  },
  reducers: {
    setTrackProgress: (state, { payload }) => {
      state.trackProgress = payload;
    },
    startTimer: (state) => {
      if (state.intervalRef.current) {
        clearInterval(state.intervalRef.current);
      } else {
        console.log('Interval не установлен');
      }
      // state.intervalRef.current = setInterval(updateProgressBar, 100);
    },
    stopTimer: (state) => {
      if (state.intervalRef.current) {
        clearInterval(state.intervalRef.current);
      } else {
        console.log('Interval не установлен');
      }
    },
  },
});

export default intervalControlSlice.reducer;
