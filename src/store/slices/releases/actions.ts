import { GetStateType } from 'src/store';
import { selectReleases } from './selectors';
import { setPager, setReleases } from './slice';
import { Dispatch } from '@reduxjs/toolkit';

const apiUrl =
  'https://geschoss-sons-of-horus-59e6.twc1.net/mixcloud/releases?page=';

const buildUrl = (url, number) => {
  return `${url}${number}`;
};

export const fetchReleases =
  (pageNumber: number) => (dispatch: Dispatch, getState: GetStateType) => {
    const releases = selectReleases(getState());

    fetch(buildUrl(apiUrl, pageNumber))
      .then((response) => response.json())
      .then((data) => {
        dispatch(setReleases([...releases, ...data.rows]));
        dispatch(setPager(data.pager));
      })
      .catch((error) => console.error('Error fetching data:', error));
  };
