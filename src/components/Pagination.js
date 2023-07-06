import { useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

function Pagination({
  page,
  totalPages,
  size,
  showSize,
  totalResults,
  setPage,
}) {
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
    <div className="flex mt-6 items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
      {totalPages > 0 && (
        <div className="flex flex-1 justify-between items-center sm:hidden">
          {page > 1 && (
            <a
              href="#"
              onClick={handlePrevPage}
              className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </a>
          )}
          <div>
            <p className="text-sm font-lexend text-gray-700">
              Showing{" "}
              <span className="font-medium text-[#800f74]">
                {(page - 1) * size + 1}
              </span>{" "}
              to{" "}
              <span className="font-medium text-[#800f74]">
                {(page - 1) * size + showSize}
              </span>{" "}
              of{" "}
              <span className="font-medium text-[#800f74]">{totalResults}</span>{" "}
              results
            </p>
          </div>
          {page < totalPages && (
            <a
              href="#"
              onClick={handleNextPage}
              className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </a>
          )}
        </div>
      )}
      {totalPages > 0 && (
        <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
          <p className="text-sm font-lexend text-gray-700">
            Showing{" "}
            <span className="font-medium text-[#800f74]">
              {(page - 1) * size + 1}
            </span>{" "}
            to{" "}
            <span className="font-medium text-[#800f74]">
              {(page - 1) * size + showSize}
            </span>{" "}
            of{" "}
            <span className="font-medium text-[#800f74]">{totalResults}</span>{" "}
            results
          </p>
          <nav
            className="isolate flex gap-2 -space-x-px rounded-md"
            aria-label="Pagination"
          >
            {page > 1 && (
              <a
                href="#"
                onClick={handlePrevPage}
                className="shadow-sm relative flex rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-lexend font-medium text-gray-700 hover:bg-gray-50"
              >
                <ChevronLeftIcon
                  className="h-[21px] w-[21px]"
                  aria-hidden="true"
                />
                Previous
              </a>
            )}
            {page < totalPages && (
              <a
                href="#"
                onClick={handleNextPage}
                className="shadow-sm relative ml-3 flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-lexend font-medium text-gray-700 hover:bg-gray-50"
              >
                Next
                <ChevronRightIcon
                  className="h-[21px] w-[21px]"
                  aria-hidden="true"
                />
              </a>
            )}
          </nav>
        </div>
      )}
    </div>
  );
}

export default Pagination;
