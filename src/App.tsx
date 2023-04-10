import { Grid, GridItem, HStack } from "@chakra-ui/react";
import Header from "./components/Header";
import { IFilter } from "./interface/filter";
import useSheets from "./hooks/useSheet";
import DataList from "./components/DataList";
import { useEffect, useState } from "react";
import FilterButtons from "./components/FilterButtons";
import { filterRows, setNewFilter } from "./service/filterData";
import FilterRemove from "./components/FilterRemove";

function App() {
  const { headers, rows, error, isLoading } = useSheets();
  const [filteredRows, setFilteredRows] = useState<string[][]>([]);
  const [filters, setFilters] = useState<IFilter[]>([]);

  useEffect(() => {
    setFilteredRows([...rows]);
  }, [rows]);

  const handleFilterChange = (filter: IFilter, column: string) => {
    console.log("handleFilterChange", filter, column);

    // update state
    const { value } = filter;
    let updatedFilter: IFilter[] = [];
    const objIdx = filters.findIndex((element) => element.columnKey === column);
    updatedFilter = setNewFilter(filter, filters, objIdx);
    setFilters(updatedFilter);
    // filter data
    setFilteredData(updatedFilter, rows, column);
  };

  const setFilteredData = (
    filters: IFilter[],
    rows: string[][],
    column: string
  ) => {
    let newRows: string[][] = [...rows];

    filters.forEach((filter) => {
      newRows = filterRows(
        filter,
        newRows,
        column === "Task" ? -1 : headers.indexOf(column) // for tasks searh is LIKE
      );
      //console.log(filter, newRows);
    });

    setFilteredRows([...newRows]);
  };

  //console.log("filters: ", filters);
  //console.log("FilteredRows", filteredRows);
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
        <HStack padding={"10px"}>
          <FilterButtons onFilterChange={handleFilterChange} />
          <FilterRemove />
        </HStack>
      </GridItem>
      <GridItem pl="2" bg="blue.200" area={"main"}>
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
