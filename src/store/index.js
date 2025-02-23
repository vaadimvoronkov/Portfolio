import { configureStore } from '@reduxjs/toolkit';
import audioControlReducer from './slices/audioControlSlice';
import releasesSlice from './slices/releasesSlice';

const store = configureStore({
  reducer: {
    audioControl: audioControlReducer,
    releases: releasesSlice
  },
});

export default store;