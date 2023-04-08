import React from "react";

import { IFilter } from "../interface/filter";
import { Text } from "@chakra-ui/react";
import SheetTable from "./SheetTable";

interface IDataListProps {
  columns: string[];
  rows: string[][];
  error: string;
  isLoading: boolean;
  //onFilterChange: (filters: IFilter[]) => void;
}
const DataList: React.FC<IDataListProps> = ({
  columns,
  rows,
  error,
  isLoading,
  //onFilterChange,
}) => {
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Text>{error ? error : ""}</Text>
      <SheetTable columns={columns} rows={rows} />
    </>
  );
};

export default DataList;