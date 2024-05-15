import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface ProductsPaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

const ProductsPagination = ({
  totalItems,
  itemsPerPage,
  currentPage,
  setCurrentPage,
}: ProductsPaginationProps) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 5; // Maximum number of page links to show

    if (totalPages <= maxPagesToShow) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      const halfMaxPages = Math.floor(maxPagesToShow / 2);
      const startPage = Math.max(1, currentPage - halfMaxPages);
      const endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }
    }

    return pageNumbers;
  };

  const pageNumbers = getPageNumbers();

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={() => {
              setCurrentPage(currentPage - 1);
            }}
            aria-disabled={currentPage === 1}
            tabIndex={currentPage === 1 ? -1 : undefined}
            className={
              currentPage === 1 ? "pointer-events-none opacity-50" : undefined
            }
          />
        </PaginationItem>

        {pageNumbers.map((pageNumber, index) => (
          <React.Fragment key={index}>
            {index > 0 && pageNumber !== pageNumbers[index - 1] + 1 && (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            )}

            <PaginationItem>
              <PaginationLink
                onClick={() => {
                  setCurrentPage(pageNumber);
                }}
                isActive={pageNumber === currentPage}
              >
                {pageNumber}
              </PaginationLink>
            </PaginationItem>
          </React.Fragment>
        ))}

        <PaginationItem>
          <PaginationNext
            onClick={() => {
              setCurrentPage(currentPage + 1);
            }}
            aria-disabled={currentPage === totalPages}
            tabIndex={currentPage === totalPages ? -1 : undefined}
            className={
              currentPage === totalPages
                ? "pointer-events-none opacity-50"
                : undefined
            }
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default ProductsPagination;
