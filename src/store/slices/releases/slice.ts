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
      state.releases = payload;
    },
    setPager: (state, { payload }) => {
      state.pager = payload;
    },
    setPageNumber: (state, { payload }) => {
      state.pageNumber = payload;
    },
    goToNextPage: (state) => {
      const pageNumber = state.pageNumber;
      const total_pages = state.pager.total_pages;
      if (pageNumber < total_pages) {
        state.pageNumber = state.pageNumber + 1;
      }
    },
  },
});

export const { goToNextPage, setReleases, setPager, setPageNumber } =
  releasesSlice.actions;

export const releasesReducer = releasesSlice.reducer;
