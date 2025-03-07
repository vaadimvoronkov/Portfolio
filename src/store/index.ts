import { configureStore } from '@reduxjs/toolkit';
import audioControlReducer from './slices/audioControlSlice';
import { releasesReducer } from './slices/releases/slice';
import { useDispatch } from 'react-redux';

const store = configureStore({
  reducer: {
    audioControl: audioControlReducer,
    releases: releasesReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

export type GetStateType = typeof store.getState;
export type StoreType = ReturnType<typeof store.getState>;

export default store;
