import { useEffect, useState } from "react";

import apiClient, { CanceledError } from "../service/api-client";
import { getUri } from "../config/api";
import SHEETS from "../config/sheets";

const useSheets = () => {
  const [values, setValues] = useState<string[][]>([]);
  const [headers, setHeaders] = useState<string[]>([]);
  const [rows, setRows] = useState<string[][]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controler = new AbortController();
    setLoading(true);

    apiClient
      .get(getUri(SHEETS.eventSubscriptions.sheets.main), {
        signal: controler.signal,
      })
      .then((res) => {
        // console.log(res.data);
        setValues(res.data.values);
        if (res.data.values) {
          setHeaders(res.data.values[0]);
          setRows(res.data.values.slice(1));
        }
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setLoading(false);
        setError(err.message);
      });

    return () => controler.abort(); //to cancel first call in dev
  }, []);

  return { values, headers, rows, error, isLoading };
};

export default useSheets;
