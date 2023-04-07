import useSheets from "../hooks/useSheet";
import { Text } from "@chakra-ui/react";
import FilterForm, { Column } from "./FilterForm";

const SheetList = () => {
  const { headers, rows, error, isLoading } = useSheets();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const columns: Column[] = headers.map((value) => {
    return { label: value, key: value };
  });

  const handleFilterChange = (filters: Record<string, string>) => {
    console.log(filters);
  };

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
