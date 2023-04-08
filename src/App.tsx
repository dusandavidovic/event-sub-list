import { Flex, Grid, GridItem } from "@chakra-ui/react";
import SheetList from "./components/SheetList";
import Header from "./components/Header";
import { IFilter } from "./interface/filter";
import Filter from "./components/Filter";

function App() {
  const columns: string[] = [];
  const handleFilterChange = (filters: IFilter[]) => {
    console.log("Filter change");
  };
  return (
    <Grid
      templateAreas={`"header" "filter" "main"`}
      //gridTemplateRows={"50px 1fr 30px"}
      //gridTemplateColumns={"550px 1fr"}
      // h="200px"
      gap="1"
      color="blackAlpha.700"
    >
      <GridItem pl="2" bg="gray.200" area={"header"}>
        <Flex>
          <Header />
        </Flex>
      </GridItem>
      <GridItem pl="2" bg="cyan.200" area={"filter"}>
        <Filter columns={columns} onFilterChange={handleFilterChange} />
      </GridItem>
      <GridItem pl="2" bg="blue.200" area={"main"}>
        <SheetList />
      </GridItem>
    </Grid>
  );
}

export default App;
