import { configureStore } from '@reduxjs/toolkit';
import audioControlReducer from './slices/audioControlSlice';
import { releasesReducer } from './slices/releases/slice';
import { useDispatch } from 'react-redux';
import { stepSequenceReducer } from 'src/store/slices/stepSequencer/slice';

const store = configureStore({
  reducer: {
    releases: releasesReducer,
    audioControl: audioControlReducer,
    stepSequence: stepSequenceReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

export type GetStateType = typeof store.getState;
export type StoreType = ReturnType<typeof store.getState>;

export default store;
