import { useEffect } from 'react';
import { useAppDispatch } from 'src/store';
import { initReleases } from 'src/store/slices/releases/actions';

export const useReleases = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(initReleases());
  }, [dispatch]);
};
