import { createSlice } from "@reduxjs/toolkit";

const apiUrl =
  "https://geschoss-sons-of-horus-59e6.twc1.net/mixcloud/releases?page=";

const buildUrl = (url, number) => {
  return `${url}${number}`;
};

export const fetchReleasesSlice = createSlice({
  name: "fetchReleases",
  initialState: {
    value: {},
  },
  reducers: {
    fetchReleases: (state, pageNumber) => {
      fetch(buildUrl(apiUrl, pageNumber))
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
    },
  },
});

export const { fetchReleases } = fetchReleasesSlice.actions;

export default fetchReleasesSlice.reducer;
