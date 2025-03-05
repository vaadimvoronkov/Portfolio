import styles from './styles.module.css';
import { selectPager, goToNextPage } from '../../../store/slices/releasesSlice';
import { useDispatch, useSelector } from 'react-redux';

const Pagination = () => {
  const dispatch = useDispatch();
  const pager = useSelector(selectPager);

  const handleNextPage = () => {
    dispatch(goToNextPage());
  };

  return (
    <div className={styles.pagination}>
      <span className="pagination-info">
        {pager.current_page + 1} / {pager.total_pages}
      </span>

      <button
        disabled={pager.current_page === pager.total_pages}
        onClick={handleNextPage}
        className={styles.buttons}
      >
        Загрузить ещё
      </button>
    </div>
  );
};

export default Pagination;
