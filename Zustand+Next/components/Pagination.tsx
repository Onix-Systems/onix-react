"use client"

import type React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface PaginationProps {
  store: () => { currentPage: number; totalPages: number }
}

const Pagination: React.FC<PaginationProps> = ({ store }) => {
  const { currentPage, totalPages } = store()
  const pathname = usePathname()

  return (
    <div className="flex justify-center space-x-2 mt-4">
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <Link
          key={page}
          href={`${pathname}?page=${page}`}
          className={`px-3 py-2 rounded ${
            currentPage === page ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
          }`}
        >
          {page}
        </Link>
      ))}
    </div>
  )
}

export default Pagination

