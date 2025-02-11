import { configureStore } from '@reduxjs/toolkit';
import audioControlReducer from './slices/audioControlSlice';

const store = configureStore({
  reducer: {
    audioControl: audioControlReducer,
  },
});

export default store;