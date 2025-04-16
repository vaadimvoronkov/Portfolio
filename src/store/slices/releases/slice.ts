import { createSlice } from '@reduxjs/toolkit';

const initialState: Store = {
  releases: [],
  pager: {
    total_pages: 0,
  },
  pageNumber: 0,
};

export const releasesSlice = createSlice({
  name: 'releases',
  initialState: initialState,
  reducers: {
    setReleases: (state, { payload }) => {
      state.releases = [...state.releases, ...payload];
    },
    setPager: (state, { payload }) => {
      state.pager = payload;
    },
    setPageNumber: (state, { payload }) => {
      state.pageNumber = payload;
    },
  },
});

export const { setReleases, setPager, setPageNumber } = releasesSlice.actions;

export const releasesReducer = releasesSlice.reducer;
