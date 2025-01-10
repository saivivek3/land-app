import Button from '@/components/ui/Button';
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => (
  <div className="flex justify-between items-center mt-8">
    <Button
      disabled={currentPage === 1}
      onClick={() => onPageChange(currentPage - 1)}
      className="rounded-lg shadow-sm border max-w-24 border-b-disabledDark bg-white text-secondary text-xs font-semibold cursor-pointer"
    >
      <div className="flex items-center gap-1">
        <ArrowLeftIcon className="h-4 w-4" />
        <span> Previous</span>
      </div>
    </Button>

    <div className="flex gap-2">
      {[...Array(totalPages)].map((_, index) => (
        <Button
          key={index + 1}
          onClick={() => onPageChange(index + 1)}
          className={`text-tertiary text-xs font-semibold cursor-pointer w-8 h-8 p-0 flex-1 bg-white mx-auto border-none hover:text-[#252b37] hover:bg-[#fafafa] ${currentPage === index + 1 && 'bg-[#fafafa]'} `}
        >
          {index + 1}
        </Button>
      ))}
    </div>

    <Button
      variant="ghost"
      disabled={currentPage === totalPages}
      onClick={() => onPageChange(currentPage + 1)}
      className="rounded-lg shadow-sm border max-w-24 border-b-disabledDark bg-white text-secondary text-xs font-semibold cursor-pointer"
    >
      <div className="flex items-center gap-1">
        <ArrowRightIcon className="h-4 w-4" />
        <span> Next</span>
      </div>
    </Button>
  </div>
);

export default Pagination;
