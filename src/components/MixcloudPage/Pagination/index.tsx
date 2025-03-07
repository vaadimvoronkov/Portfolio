import {
  selectPageNumber,
  selectPager,
} from 'src/store/slices/releases/selectors';
import styles from './styles.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { goToNextPage } from 'src/store/slices/releases/slice';

const Pagination = () => {
  const dispatch = useDispatch();
  const pager = useSelector(selectPager);
  const pageNumber = useSelector(selectPageNumber);

  const handleNextPage = () => {
    dispatch(goToNextPage());
  };

  return (
    <div className={styles.pagination}>
      <span className="pagination-info">
        {pageNumber + 1} / {pager.total_pages}
      </span>

      <button
        disabled={pageNumber === pager.total_pages}
        onClick={handleNextPage}
        className={styles.buttons}
      >
        Загрузить ещё
      </button>
    </div>
  );
};

export default Pagination;
