import { createSlice} from "@reduxjs/toolkit";

export const audioControlSlice = createSlice({
  name: "audioControl",
  initialState: {
    value: 'pause',
  },
  reducers: {
    play: (state) => {
      state.value = 'play';
    },
    pause: (state) => {
      state.value = 'pause';
    },
    loading: (state) =>{
      state.value = 'loading';
    }
  },
});

export const { play, pause, loading } = audioControlSlice.actions;

export default audioControlSlice.reducer;
