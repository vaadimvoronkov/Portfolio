import { createSlice } from '@reduxjs/toolkit';

export const audioControlSlice = createSlice({
  name: 'audioControl',
  initialState: {
    value: 'stop',
  },
  reducers: {
    play: (state) => {
      state.value = 'play';
    },
    pause: (state) => {
      state.value = 'stop';
    },
    loading: (state) => {
      state.value = 'loading';
    },
  },
});

export const { play, pause, loading } = audioControlSlice.actions;
export const selectAudioState = (state) => state.audioControl.value;

export default audioControlSlice.reducer;
