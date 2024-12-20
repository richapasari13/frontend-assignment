import { useEffect, useState } from "react";
import { PAGE_SIZE } from "../components/Table/constants.js";

const usePagination = (dataSource, totalSize) => {
  const [currPage, setCurrentPage] = useState(0);
  const [paginatedData, setPaginatedData] = useState(
    dataSource.slice(0, PAGE_SIZE)
  );

  const handlePageNumber = (pageNum) => {
    setCurrentPage(pageNum);
  };

  const startIndex = currPage * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;

  useEffect(() => {
    setPaginatedData(dataSource.slice(startIndex, endIndex));
  }, [currPage, dataSource, endIndex, startIndex]);

  const totalPages = Math.ceil(totalSize / PAGE_SIZE);

  return { paginatedData, totalPages, currPage, handlePageNumber };
};

export default usePagination;
