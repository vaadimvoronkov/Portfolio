import styles from "./styles.module.css";

const Pagination = (props) => {
  const { pager, handleNextPage } = props;
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
