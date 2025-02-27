import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchReleases,
  selectPager,
  selectReleases,
  selectPageNumber,
  setPageNumber,
  
  goToNextPage
} from "../../store/slices/releasesSlice";

export const useReleases = () => {
  const dispatch = useDispatch();

  const releases = useSelector(selectReleases);
  const pager = useSelector(selectPager);
  const pageNumber = useSelector(selectPageNumber);

  const handleNextPage = () => {
      dispatch(goToNextPage());
  };

  console.log({ releases });
  console.log(`page number: ${pageNumber}`)

  useEffect(() => {
    dispatch(fetchReleases(pageNumber));
  }, [pageNumber, dispatch]);

  return { releases, pager, handleNextPage };
};
