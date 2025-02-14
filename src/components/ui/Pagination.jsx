const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  // Show 5 pages at a time
  const getVisiblePages = () => {
    // For less than 7 pages, show all
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    // At start
    if (currentPage <= 3) {
      return [1, 2, 3, 4, 5, '...', totalPages];
    }

    // At end
    if (currentPage >= totalPages - 2) {
      return [
        1,
        '...',
        totalPages - 4,
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages,
      ];
    }

    // In middle
    return [
      1,
      '...',
      currentPage - 1,
      currentPage,
      currentPage + 1,
      '...',
      totalPages,
    ];
  };

  return (
    <div className="flex gap-2 items-center text-[8px] lg:text-xs font-semibold h-full">
      {getVisiblePages().map((page, index) =>
        page === '...' ? (
          <span key={index}>...</span>
        ) : (
          <button
            key={index}
            onClick={() => onPageChange(page)}
            className={`px-3 py-1 rounded ${currentPage === page ? 'bg-black text-white' : ''}`}
          >
            {page}
          </button>
        ),
      )}
    </div>
  );
};

export default Pagination;
