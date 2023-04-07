import useSheets from "../hooks/useSheet";
import { Text } from "@chakra-ui/react";
import FilterForm, { Column, Filter } from "./FilterForm1";
import { useState } from "react";

interface Data {
  [key: string]: any; // allow any additional properties
}

const SheetList = () => {
  const { headers, rows, error, isLoading } = useSheets();
  const [filters, setFilters] = useState<Filter[]>([]);

  function handleFilterChange(filters: Filter[]) {
    setFilters(filters);
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const columns: Column[] = headers.map((value) => {
    return { label: value, key: value };
  });

  // const filteredData = rows.filter((row) => {
  //   for (const [columnKey, filterValue] of Object.entries(filters)) {
  //     const cellValue = String(row[columnKey]);
  //     if (!cellValue.toLowerCase().includes(filterValue.toLowerCase())) {
  //       return false;
  //     }
  //   }
  //   return true;
  // });
  // const filteredData1 = rows.filter((row) => {
  //   return Object.values<Data>(row).some((cellValue) => {
  //     for (const [columnKey, filterValue] of Object.entries(filters)) {
  //       if (cellValue && cellValue.toString().toLowerCase().includes(filterValue.toLowerCase())) {
  //         return true;
  //       }
  //     }
  //     return false;
  //   });
  // });

  return (
    <>
      <Text>{error ? error : ""}</Text>
      <FilterForm columns={columns} onFilterChange={handleFilterChange} />
      <table>
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              {row.map((cell, index) => (
                <td key={index} style={{ whiteSpace: "nowrap", textAlign: "left" }}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default SheetList;
