import { StoreType } from 'src/store';

export const selectReleases = ({ releases }: StoreType) => releases.releases;
export const selectPager = ({ releases }: StoreType) => releases.pager;
export const selectPageNumber = ({ releases }: StoreType) =>
  releases.pageNumber;
