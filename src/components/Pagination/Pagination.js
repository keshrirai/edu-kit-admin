import React from 'react';
import _ from 'lodash';
// import './pagination.css';

const Pagination = (props) => {

  const { itemsCount, pageSize, currentPage, onPageChange } = props;
  const pageCount = Math.ceil(itemsCount / pageSize);
  if (pageCount === 1) return null;
  const pages = _.range(1, pageCount + 1);


  return (
    <div className="pt-1 flex items-center justify-between  ">
      <div className="flex-1 flex justify-between sm:hidden">
        <span className="relative inline-flex items-center rounded px-4 py-2 bg-white bg-opacity-5 text-sm font-medium text-gray-500 hover:bg-black hover:bg-opacity-10">
          Previous
        </span>
        <span className="ml-3 relative inline-flex items-center rounded px-4 py-2 bg-white bg-opacity-5 text-sm font-medium text-gray-500 hover:bg-black hover:bg-opacity-10">
          Next
        </span>
      </div>
      <div className="hidden mt-5 lg:mt-2 flex flex-wrap sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <div className="mb-2 lg:mb-0">
          <p className="text-sm text-gray-700">
            Showing
            <span className="font-medium">1</span>
            to
            <span className="font-medium">10</span>
            of
            <span className="font-medium">97</span>
            results
          </p>
        </div>
        <div>
          <nav className="relative z-0 inline-flex shadow-sm -space-x-px" aria-label="Pagination">

            <div className="pagination items-center flex">
              <span className="relative inline-flex items-center px-2 py-2  bg-black bg-opacity-10 text-sm font-medium text-gray-500 hover:bg-black hover:bg-opacity-10 rounded-l">
                <span className="sr-only">Previous</span>
                {/* Heroicon name: solid/chevron-left */}
                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
              {pages.map(page => (
                <span className={page === currentPage ? "relative inline-flex items-center px-4 py-2 text-sm font-medium  cursor-pointer bg-shine text-white" : "relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 cursor-pointer bg-black bg-opacity-10"} key={page}
                  onClick={() => onPageChange(page)}
                // className={page === currentPage ? 'active' : 'page-item'}
                >
                  {page}
                </span>
              ))}
              <span className="relative inline-flex items-center px-2 py-2 bg-black bg-opacity-10  text-sm font-medium text-gray-500 hover:bg-black hover:bg-opacity-10 rounded-r">
                <span className="sr-only">Next</span>
                {/* Heroicon name: solid/chevron-right */}
                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </span>
            </div>

          </nav>
        </div>
      </div>
    </div>
  )
}

export default Pagination;