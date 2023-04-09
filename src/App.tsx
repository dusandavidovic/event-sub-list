import { Grid, GridItem } from "@chakra-ui/react";
import Header from "./components/Header";
import { IFilter } from "./interface/filter";
import useSheets from "./hooks/useSheet";
import DataList from "./components/DataList";
import Filter from "./components/Filter";
import { useState } from "react";

function App() {
  const { headers, rows, error, isLoading } = useSheets();
  const [filters, setFilters] = useState<IFilter[]>([{ columnKey: "", value: "" }]);

  const handleFilterChange = (filters: IFilter[], action: string) => {
    const filter = filters[0];
    console.log("Filter change", action, filters);
    if (action === "add")
      if (filter.columnKey && filter.value)
        setFilters((prevFilters) => [
          ...prevFilters,
          { columnKey: filters[0].columnKey, value: filters[0].value },
        ]);
  };
  return (
    <Grid templateAreas={`"header" "filter" "main"`} gap="1" color="blackAlpha.700">
      <GridItem pl="2" bg="gray.200" area={"header"}>
        <Header />
      </GridItem>
      <GridItem pl="2" bg="cyan.200" area={"filter"}>
        <Filter filters={filters} columns={headers} onFilterChange={handleFilterChange} />
      </GridItem>
      <GridItem pl="2" bg="blue.200" area={"main"}>
        <DataList
          columns={headers}
          rows={rows}
          error={error}
          isLoading={isLoading}
          //onFilterChange={handleFilterChange}
        />
      </GridItem>
    </Grid>
  );
}

export default App;
