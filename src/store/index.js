import { configureStore } from '@reduxjs/toolkit';
import audioControlReducer from './slices/audioControlSlice';
import audioFetchReducer from './slices/audioFetchSlice'
import pageControlResucer from './slices/pageControlSlice';

const store = configureStore({
  reducer: {
    audioControl: audioControlReducer,
    audioFetch: audioFetchReducer,
    pageControl: pageControlResucer
  },
});

export default store;