import { configureStore } from '@reduxjs/toolkit';
import audioControlReducer from './slices/audioControlSlice';
import audioFetchReducer from './slices/audioFetchSlice'

const store = configureStore({
  reducer: {
    audioControl: audioControlReducer,
    audioFetch: audioFetchReducer
  },
});

export default store;