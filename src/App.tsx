import { Grid, GridItem } from "@chakra-ui/react";
import Header from "./components/Header";
import { IFilter } from "./interface/filter";
import useSheets from "./hooks/useSheet";
import DataList from "./components/DataList";
import { useEffect, useState } from "react";
import FilterButtons from "./components/FilterButtons";
import { filterRows, getSeries, getSkills } from "./service/filterData";
import { IKeyValuePair } from "./config/filters";

function App() {
  const { headers, rows, error, isLoading } = useSheets();
  const [filteredRows, setFilteredRows] = useState<string[][]>([]);

  useEffect(() => {
    setFilteredRows([...rows]);
  }, [rows]);

  //const [filters, setFilters] = useState<IFilter[]>([{ columnKey: "", value: "", add: true }]);

  // const handleFilterChange = (filters: IFilter[], action: string) => {
  //   const filter = filters[0];
  //   console.log("Filter change", action, filters);
  //   if (action === "add")
  //     if (filter.columnKey && filter.value)
  //       setFilters((prevFilters) => [
  //         ...prevFilters,
  //         { columnKey: filter.columnKey, value: filter.value, add: filter.add },
  //       ]);
  // };

  const handleTest = (filter: IFilter, action?: string) => {
    console.log(filter, action);
    const newRows = filterRows({
      filter: filter,
      columns: headers,
      rows: filteredRows,
    });
    setFilteredRows([...newRows]);
  };

  console.log("FilteredRows", filteredRows);
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
        <FilterButtons onFilterChange={handleTest} />
      </GridItem>
      <GridItem pl="2" bg="blue.200" area={"main"}>
        <DataList
          columns={headers}
          rows={filteredRows}
          error={error}
          isLoading={isLoading}
          //onFilterChange={handleFilterChange}
        />
      </GridItem>
    </Grid>
  );
}

export default App;
