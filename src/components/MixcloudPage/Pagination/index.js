import "./styles.css";

const Pagination = (props) => {
  const { pager, handleNextPage } = props;
  return (
    <div className="pagination">

      <span className="pagination-info">
        {pager.current_page + 1} / {pager.total_pages}
      </span>

      <button
        disabled={pager.current_page === pager.total_pages}
        onClick={handleNextPage}
        className="pagination-button"
      >
        Загрузить ещё
      </button>
    </div>
  );
};

export default Pagination;
