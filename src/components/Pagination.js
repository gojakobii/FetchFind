import React from "react";

function Pagination({page, totalPages, setPage}) {
  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  return (
    <div className="d-flex justify-content-center mt-4">
        <ul className="pagination">
          <li className={`page-item ${page === 1 ? 'disabled' : ''}`}>
            <button className="page-link" onClick={handlePrevPage}>Previous</button>
          </li>
          <li className="page-item">
            <span className="page-link">{`Page ${page} of ${totalPages}`}</span>
          </li>
          <li className={`page-item ${page === totalPages ? 'disabled' : ''}`}>
            <button className="page-link" onClick={handleNextPage}>Next</button>
          </li>
        </ul>
    </div>
  );
};

export default Pagination;