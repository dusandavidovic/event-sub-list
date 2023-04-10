import { Grid, GridItem } from "@chakra-ui/react";
import Header from "./components/Header";
import { IFilter } from "./interface/filter";
import useSheets from "./hooks/useSheet";
import DataList from "./components/DataList";
import { useEffect, useState } from "react";
import FilterButtons from "./components/FilterButtons";
import { filterRows } from "./service/filterData";

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
    let newF: IFilter[] = [];
    const obj = filters.find((x) => x.columnKey === column);
    console.log("obj: ", obj);
    if (obj) {
      newF = filters?.map((item) =>
        item.columnKey === filter.columnKey
          ? { ...item, value: filter.value }
          : filter
      );
    } else {
      newF = [...filters, filter];
    }
    // newF = obj
    //   ? (filters?.map((item) =>
    //       item.columnKey === filter.columnKey
    //         ? { ...item, value: filter.value }
    //         : filter
    //     ))
    //   : [...filters, filter];
    setFilters(newF);

    //setFilteredData(newF, column);
  };

  const setFilteredData = (filters: IFilter[], column: string) => {
    let newRows: string[][] = [...rows];

    filters.forEach((filter) => {
      newRows = filterRows(filter, newRows, headers.indexOf(column));
    });

    setFilteredRows([...newRows]);
  };

  console.log("filters: ", filters);
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
        <FilterButtons onFilterChange={handleFilterChange} />
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
