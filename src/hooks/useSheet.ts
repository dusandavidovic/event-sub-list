import { useEffect, useState } from "react";
import apiClient from "../service/api-client";
import { getUri, getApiKey } from "../config/api";
import SHEETS from "../config/sheets";

// export interface Entries {
//   : string;
//   Type: string;
//   isRequired: string;
// }

const useSheets = () => {
  const [entries, setEntries] = useState<[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    //    const controler = new AbortController();
    setLoading(true);

    apiClient
      .get(getUri(SHEETS.eventSubscriptions.sheets.main), {
        headers: {
          apiKey: getApiKey(),
        },
        // signal: controler.signal,
      })
      .then((res) => {
        console.log(res.data);
        setEntries(res.data.Entries);
        setLoading(false);
      })
      .catch((err) => {
        //if (err instanceof CanceledError) return;
        setLoading(false);
        setError(err.message);
      });

    //  return () => controler.abort(); //to cancel first call in dev
  }, []);

  return { entries, error, isLoading };
};

export default useSheets;
