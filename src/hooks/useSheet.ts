import { useEffect, useState } from "react";
import apiClient from "../service/api-client";
import { getUri } from "../config/api";
import SHEETS from "../config/sheets";

// export interface Entries {
//   : string;
//   Type: string;
//   isRequired: string;
// }

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
      //   .get(
      //     "https://sheets.googleapis.com/v4/spreadsheets/1YJM8O7pyAsv9Y8J8I5EGFoYR-6t8UKIeV7Gzf8tnx0Y/values/main?key=AIzaSyBPXVe9nXfFK0y7ThJJL5hyrxz82FaFzd4"
      //   )
      .get(getUri(SHEETS.eventSubscriptions.sheets.main), {
        //     headers: {
        //       apiKey: getApiKey(),
        //     },
        signal: controler.signal,
      })
      .then((res) => {
        console.log(res.data);
        setValues(res.data.Values);
        if (values.length > 0) {
          setHeaders(values[0]);
          setRows(values.slice(1));
        }
        setLoading(false);
      })
      .catch((err) => {
        //if (err instanceof CanceledError) return;
        setLoading(false);
        setError(err.message);
      });

    //  return () => controler.abort(); //to cancel first call in dev
  }, []);

  return { values, headers, rows, error, isLoading };
};

export default useSheets;
