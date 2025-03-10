import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  isPlaying: false,
  currentNote: 0,
  nextNoteTime: 0.0,
};

export const stepSequenceSlice = createSlice({
  name: 'step-sequence',
  initialState,
  reducers: {
    togglePlaying: (state) => {
      state.isPlaying = !state.isPlaying;
    },
    setCurrentNote: (state, { payload }: PayloadAction<number>) => {
      state.currentNote = payload;
    },
    setNextNoteTime: (state, { payload }: PayloadAction<number>) => {
      state.nextNoteTime = payload;
    },
  },
});

export const { setCurrentNote, setNextNoteTime, togglePlaying } =
  stepSequenceSlice.actions;

export const stepSequenceReducer = stepSequenceSlice.reducer;
