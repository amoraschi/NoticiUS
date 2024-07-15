import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from '@/components/ui/pagination'

interface FrontPaginationProps {
  page: number
  setPage: (page: number) => void
  last: number
}

export default function FrontPagination ({
  page,
  setPage,
  last
}: FrontPaginationProps) {
  const goPrevious = () => {
    if (page > 0) {
      setPage(page - 1)
    }
  }

  const goNext = () => {
    if (page < last) {
      setPage(page + 1)
    }
  }

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={goPrevious}
            isActive={page !== 0}
          />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            onClick={() => setPage(page)}
            isActive
          >
            {page + 1}
          </PaginationLink>
        </PaginationItem>
        {
          page < last && (
            <PaginationItem>
              <PaginationLink
                onClick={() => setPage(page + 1)}
              >
                {page + 2}
              </PaginationLink>
            </PaginationItem>
          )
        }
        {
          page < last - 1 && (
            <PaginationItem>
              <PaginationLink
                onClick={() => setPage(page + 2)}
              >
                {page + 3}
              </PaginationLink>
            </PaginationItem>
          )
        }
        {
          page < last - 2 && (
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          )
        }
        <PaginationItem>
          <PaginationNext
            onClick={goNext}
            isActive={page !== last}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
