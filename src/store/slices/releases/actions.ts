import { GetStateType } from 'src/store';
import { setPageNumber, setPager, setReleases } from './slice';
import { Dispatch } from '@reduxjs/toolkit';
import { setIndex, setRelease } from '../currentRelease/currentRelease';

const apiUrl =
  'https://geschoss-sons-of-horus-59e6.twc1.net/mixcloud/releases?page=';

const buildUrl = (url, number) => {
  return `${url}${number}`;
};

export const goToNextPage =
  () => (dispatch: Dispatch, getState: GetStateType) => {
    const { releases } = getState();

    const pageNumber = releases.pageNumber;
    const total_pages = releases.pager.total_pages;
    if (pageNumber < total_pages) {
      const nextPage = releases.pageNumber + 1;

      fetch(buildUrl(apiUrl, nextPage))
        .then((response) => response.json())
        .then((data) => {
          dispatch(setReleases(data.rows));
          dispatch(setPager(data.pager));
          dispatch(setPageNumber(nextPage));
        })
        .catch((error) => console.error('Error fetching data:', error));
    }
  };

export const initReleases =
  () => (dispatch: Dispatch, getState: GetStateType) => {
    const INIT_INDEX = 0;
    fetch(buildUrl(apiUrl, 0))
      .then((response) => response.json())
      .then((data) => {
        const currentRelease = data.rows[INIT_INDEX];
        dispatch(setReleases(data.rows));
        dispatch(setRelease(currentRelease));
        dispatch(setIndex(INIT_INDEX));
        dispatch(setPager(data.pager));
      })
      .catch((error) => console.error('Error fetching data:', error));
  };
