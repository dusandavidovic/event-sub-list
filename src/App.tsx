import { Grid, GridItem } from "@chakra-ui/react";

import Header from "./components/Header";
import { IFilter } from "./interface/filter";
import useSheets from "./hooks/useSheet";
import DataList from "./components/DataList";
import { useEffect, useState } from "react";
import FilterButtons from "./components/FilterButtons";
import {
  filterByDate,
  filterRows,
  getEvents,
  setNewFilter,
} from "./service/filterData";
import { CurrentDateFilter } from "./config/filters";

function App() {
  const { headers, rows, error, isLoading } = useSheets();
  const [filteredRows, setFilteredRows] = useState<string[][]>([]);
  const [filters, setFilters] = useState<IFilter[]>([]);

  useEffect(() => {
    setFilteredRows([...rows]);
  }, [rows]);

  const handleFilterChange = (filter: IFilter, column: string) => {
    // update state
    let updatedFilter: IFilter[] = [];
    const objIdx = filters.findIndex((element) => element.columnKey === column);

    updatedFilter = setNewFilter(filter, filters, objIdx);

    setFilters(updatedFilter);
    // filter data
    setFilteredData(updatedFilter, rows);
  };

  const setFilteredData = (filters: IFilter[], rows: string[][]) => {
    let newRows: string[][] = [...rows];
    let colIdx = 0;
    filters.forEach((filter) => {
      if (filter.columnKey === CurrentDateFilter.dateColumn) {
        newRows = filterByDate({
          filter: filter,
          rows: newRows,
          columnIndex: headers.indexOf(filter.columnKey),
        });
      } else {
        let colIdx =
          filter.columnKey === "Task" ? -1 : headers.indexOf(filter.columnKey);
        newRows = filterRows(filter, newRows, colIdx);
      }
    });

    setFilteredRows([...newRows]);
  };

  return (
    <Grid
      templateAreas={`"header" "filter" "main"`}
      gap="1"
      color="blackAlpha.700"
    >
      <GridItem pl="2" bg="gray.200" area={"header"}>
        <Header />
      </GridItem>
      <GridItem pl="2" bg="blue.100" area={"filter"}>
        <FilterButtons
          onFilterChange={handleFilterChange}
          events={getEvents({ columns: headers, rows: filteredRows })}
        />
      </GridItem>
      <GridItem pl="2" bg="blue.50" area={"main"}>
        <DataList
          columns={headers}
          rows={filteredRows}
          error={error}
          isLoading={isLoading}
        />
      </GridItem>
    </Grid>
  );
}

export default App;
