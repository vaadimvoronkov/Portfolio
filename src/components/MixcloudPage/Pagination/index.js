import "./styles.css";

const Pagination = (props) => {
  const { pager, handleNextPage, handlePrevPage } = props;
  return (
    <div className="pagination">
      <button
        disabled={pager.current_page === 0}
        onClick={handlePrevPage}
        className="pagination-button"
      >
        Previous
      </button>

      <span className="pagination-info">
        {pager.current_page + 1} / {pager.total_pages}
      </span>

      <button
        disabled={pager.current_page === pager.total_pages}
        onClick={handleNextPage}
        className="pagination-button"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
