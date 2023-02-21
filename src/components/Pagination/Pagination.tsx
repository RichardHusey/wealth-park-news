import React from 'react'
import { Button, StyledPagination } from './PaginationStyle'
type Props = {
  totalPageCount: number;
  currentPage: number;
  pageMove(page: number): void;
}

const Pagination: React.FC<Props> = ({totalPageCount, currentPage, pageMove}) =>{
  const movePage = (page: number) => {
    if (page < totalPageCount && page >= 0) {
      pageMove(page);
    }
  };
  return(
    <StyledPagination>
        <Button key="prev" onClick={() => movePage(currentPage - 1)}>
          &lt;
        </Button>
        {new Array(totalPageCount).fill(0).map(
          (button, index) => (
            <Button
              key={`${index}btn`}
              onClick={() => movePage(index)}
              selected={index === currentPage}
            >
              {index + 1}
            </Button>
          )
        )}
        <Button key="next" onClick={() => movePage(currentPage + 1)}>
          &gt;
        </Button>
      </StyledPagination>
  )
}

export default Pagination;