import { createSlice } from "@reduxjs/toolkit";

const apiUrl =
  "https://geschoss-sons-of-horus-59e6.twc1.net/mixcloud/releases?page=";

const buildUrl = (url, number) => {
  return `${url}${number}`;
};

export const releasesSlice = createSlice({
  name: "releases",
  initialState: {
    releases: [],
    pager: {},
    pageNumber: 0,
  },
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
      const pageNumber = state.pageNumber
      const total_pages = state.pager.total_pages
      if (pageNumber < total_pages) {
        state.pageNumber = state.pageNumber + 1;
      }
    }
  },
});

export const { goToNextPage, setReleases, setPager, setPageNumber } = releasesSlice.actions;

export const selectReleases = ({ releases }) => releases.releases;
export const selectPager = ({ releases }) => releases.pager;
export const selectPageNumber = ({ releases }) => releases.pageNumber;

export const fetchReleases = (pageNumber) => (dispatch, getState) => {
  const releases = selectReleases(getState());

  fetch(buildUrl(apiUrl, pageNumber))
    .then((response) => response.json())
    .then((data) => {
      dispatch(setReleases([...releases, ...data.rows]));
      dispatch(setPager(data.pager));
    })
    .catch((error) => console.error("Error fetching data:", error));
};

export default releasesSlice.reducer;
