import React from "react";

import Table from "../Table/index.jsx";
import useFetchData from "./hooks/useFetchData.js";
import Pagination from "../Pagination/index.jsx";
import usePagination from "../../hooks/usePagination.js";
import "./styles.css";

const Layout = () => {
  const { tableData, isLoading, isError } = useFetchData();
  const { paginatedData, totalPages, currPage, handlePageNumber } =
    usePagination(tableData, tableData.length);

  return (
    <section data-testid="layout-wrapper" className="layout-wrapper">
      <Table dataSource={paginatedData} isLoading={isLoading} isError={isError} />
      <Pagination
        totalPages={totalPages}
        currPage={currPage}
        handlePageNumber={handlePageNumber}
      />
    </section>
  );
};

export default Layout;
