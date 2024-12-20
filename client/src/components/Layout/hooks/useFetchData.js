import { useCallback, useEffect, useState } from "react";
import { API } from "../constants";

const useFetchData = () => {
    const [tableData, setTableData] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [isError, setError] = useState(null);
  
    const fetchTableData = useCallback(async () => {
      setLoading(true);
      try {
        const response = await fetch(API);
        const data = await response.json();
        setTableData(data);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    }, []);

    useEffect(() => {
      fetchTableData();
    }, [fetchTableData]);

    return {tableData, isLoading, isError}

}

export default useFetchData;