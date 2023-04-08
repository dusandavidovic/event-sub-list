import { Grid, GridItem } from "@chakra-ui/react";
import SheetList from "./components/SheetList";
import Header from "./components/Header";
import { IFilter } from "./interface/filter";
import useSheets from "./hooks/useSheet";
import DataList from "./components/DataList";

function App() {
  const { headers, rows, error, isLoading } = useSheets();

  const handleFilterChange = (filters: IFilter[]) => {
    console.log("Filter change", filters);
  };
  return (
    <Grid templateAreas={`"header" "filter" "main"`} gap="1" color="blackAlpha.700">
      <GridItem pl="2" bg="gray.200" area={"header"}>
        <Header />
      </GridItem>
      <GridItem pl="2" bg="cyan.200" area={"filter"}>
        <DataList
          columns={headers}
          rows={rows}
          error={error}
          isLoading={isLoading}
          onFilterChange={handleFilterChange}
        />
      </GridItem>
      <GridItem pl="2" bg="blue.200" area={"main"}>
        <SheetList />
      </GridItem>
    </Grid>
  );
}

export default App;
