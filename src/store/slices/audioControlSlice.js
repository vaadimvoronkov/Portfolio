import { createSlice} from "@reduxjs/toolkit";

export const audioControlSlice = createSlice({
  name: "audioControl",
  initialState: {
    value: false,
  },
  reducers: {
    play: (state) => {
      state.value = true;
    },
    pause: (state) => {
      state.value = false;
    },
  },
});

export const { play, pause } = audioControlSlice.actions;

export default audioControlSlice.reducer;
